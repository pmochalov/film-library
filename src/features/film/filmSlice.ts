import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import { Film, Genre } from '../../@types';

type Initial = {
    loading: boolean;
    error: string | null;
    data: Film;
}

const initialState: Initial = {
    loading: false,
    error: null,
    data: {
        kinopoiskId: 0,
        kinopoiskHDId: null,
        imdbId: null,
        nameRu: null,
        nameEn: null,
        nameOriginal: "",
        posterUrl: "",
        posterUrlPreview: "",
        coverUrl: null,
        logoUrl: null,
        reviewsCount: 0,
        ratingGoodReview: null,
        ratingGoodReviewVoteCount: null,
        ratingKinopoisk: null,
        ratingKinopoiskVoteCount: null,
        ratingImdb: null,
        ratingImdbVoteCount: null,
        ratingFilmCritics: null,
        ratingFilmCriticsVoteCount: null,
        ratingAwait: null,
        ratingAwaitCount: null,
        ratingRfCritics: null,
        ratingRfCriticsVoteCount: null,
        webUrl: "",
        year: null,
        filmLength: null,
        slogan: null,
        description: null,
        shortDescription: null,
        editorAnnotation: null,
        isTicketsAvailable: false,
        productionStatus: null,
        type: 'FILM',
        ratingMpaa: null,
        countries: [],
        ratingAgeLimits: null,
        hasImax: null,
        has3D: null,
        lastSync: "",
        genres: null,
        startYear: null,
        endYear: null,
        serial: null,
        shortFilm: null,
        completed: null,
    }
};


export const fetchFilm = createAsyncThunk<Film, { id: string }, {}>(
    'film/fetchFilm',
    async ({ id }) => {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}films/${id}`, {
            id: id
        });

        if (response.status !== 200) {
            throw new Error("Не удалось получить расписание.");
        }

        const data: Film = response.data;

        return data;
    },
);

export const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
        resetFilmState: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFilm.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchFilm.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchFilm.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Ошибка получения фильма.";
        })
    }
})

export const { resetFilmState } = filmSlice.actions

export default filmSlice.reducer