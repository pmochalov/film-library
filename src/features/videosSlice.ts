import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import { Videos } from '../@types/Videos';

type Initial = {
    loading: boolean;
    error: string | null;
    data: Videos;
}

const initialState: Initial = {
    loading: false,
    error: null,
    data: {
        total: 0,
        items: null,
    }
};


export const fetchVideos = createAsyncThunk<Videos, { id: number }, {}>(
    'videos/fetchVideos',
    async ({ id }) => {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}films/${id}/videos`, {
            id: id
        });

        if (response.status !== 200) {
            throw new Error("Не удалось получить видео.");
        }

        const data: Videos = response.data;

        return data;
    },
);

export const videosSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {
        resetVideoState: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchVideos.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchVideos.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchVideos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Ошибка получения видео.";
        })
    }
})

export const { resetVideoState } = videosSlice.actions

export default videosSlice.reducer