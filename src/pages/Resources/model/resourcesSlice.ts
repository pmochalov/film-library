import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { Resources } from '../../../@types/Resources';

type Initial = {
    loading: boolean;
    error: string | null;
    data: Resources;
}

const initialState: Initial = {
    loading: false,
    error: null,
    data: {
        total: 0,
        items: null,
    }
};

export const fetchResources = createAsyncThunk<Resources, { id: number }, {}>(
    'resources/fetchResources',
    async ({ id }) => {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}films/${id}/external_sources`, {
            id: id
        });

        if (response.status !== 200) {
            throw new Error("Не удалось получить данные.");
        }

        const data: Resources = response.data;

        return data;
    },
);

export const resourcesSlice = createSlice({
    name: 'resources',
    initialState,
    reducers: {
        resetResourcesState: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchResources.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchResources.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchResources.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Ошибка получения ресурсов.";
        })
    }
})

export const { resetResourcesState } = resourcesSlice.actions

export default resourcesSlice.reducer