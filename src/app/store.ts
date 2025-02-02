import { configureStore } from '@reduxjs/toolkit';
import filmReducer from '../features/filmSlice';
import galleryReducer from '../features/gallerySlice';
import factsReducer from '../features/factsSlice';
import videosReducer from '../features/videosSlice';

export const store = configureStore({
    reducer: {
        film: filmReducer,
        gallery: galleryReducer,
        facts: factsReducer,
        videos: videosReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch