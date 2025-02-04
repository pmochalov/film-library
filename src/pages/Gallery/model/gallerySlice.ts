import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import { Gallery } from '../../../@types/Gallery';

type Initial = {
    loading: boolean;
    error: string | null;
    data: Gallery;
}

const initialState: Initial = {
    loading: false,
    error: null,
    data: {
        total: 0,
        totalPages: 0,
        items: null,
    }
};


export const fetchGallery = createAsyncThunk<Gallery, { id: number }, {}>(
    'gallery/fetchGallery',
    async ({ id }) => {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}films/${id}/images`, {
            id: id
        });

        if (response.status !== 200) {
            throw new Error("Не удалось получить изображения.");
        }

        const data: Gallery = response.data;

        return data;
    },
);

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        resetGalleryState: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGallery.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchGallery.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchGallery.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Ошибка получения галереи.";
        })
    }
})

export const { resetGalleryState } = gallerySlice.actions

export default gallerySlice.reducer