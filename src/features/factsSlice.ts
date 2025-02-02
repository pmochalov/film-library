import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import { Facts } from '../@types/Facts';

type Initial = {
    loading: boolean;
    error: string | null;
    data: Facts;
}

const initialState: Initial = {
    loading: false,
    error: null,
    data: {
        total: 0,
        items: null,
    }
};


export const fetchFacts = createAsyncThunk<Facts, { id: number }, {}>(
    'facts/fetchFacts',
    async ({ id }) => {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}films/${id}/facts`, {
            id: id
        });

        if (response.status !== 200) {
            throw new Error("Не удалось получить факты.");
        }

        const data: Facts = response.data;

        return data;
    },
);

export const factsSlice = createSlice({
    name: 'facts',
    initialState,
    reducers: {
        resetFactsState: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFacts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchFacts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchFacts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Ошибка получения фактов.";
        })
    }
})

export const { resetFactsState } = factsSlice.actions

export default factsSlice.reducer