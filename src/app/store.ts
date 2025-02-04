import { configureStore } from '@reduxjs/toolkit';
import filmReducer from '../pages/Film/model/filmSlice';
import galleryReducer from '../pages/Gallery/model/gallerySlice';
import factsReducer from '../pages/Facts/model/factsSlice';
import videosReducer from '../pages/Videos/model/videosSlice';

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