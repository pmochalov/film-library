import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Gallery } from "../../../@types/Gallery";

export const imagesApi = createApi({
    reducerPath: 'galleryApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}films/` }),
    endpoints: (builder) => ({
        getImages: builder.query<Gallery, { id: number, page: number }>({
            query: ({ id, page }) => `${id}/images?page=${page}`
        }),
    }),
});

export const { useGetImagesQuery } = imagesApi