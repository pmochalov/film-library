import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Gallery } from "../../../@types/Gallery";

export const galleryApi = createApi({
    reducerPath: 'galleryApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}films/` }),
    endpoints: (builder) => ({
        getGallery: builder.query<Gallery, number>({
            query: (id) => `${id}/images`
        }),
    }),
});

export const { useGetGalleryQuery } = galleryApi