import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';
import { galleryApi } from '../pages/Gallery/api/GalleryApi';
import { filmApi } from '../pages/Film/api/FilmApi';
import { videosApi } from '../pages/Videos/api/VideosApi';
import { factsApi } from '../pages/Facts/api/FactsApi';
import { resourcesApi } from '../pages/Resources/api/ResourcesApi';

export const store = configureStore({
    reducer: {
        [filmApi.reducerPath]: filmApi.reducer,
        [galleryApi.reducerPath]: galleryApi.reducer,
        [videosApi.reducerPath]: videosApi.reducer,
        [factsApi.reducerPath]: factsApi.reducer,
        [resourcesApi.reducerPath]: resourcesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(filmApi.middleware).concat(galleryApi.middleware).concat(videosApi.middleware).concat(factsApi.middleware).concat(resourcesApi.middleware),
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch