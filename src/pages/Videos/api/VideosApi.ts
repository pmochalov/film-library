import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Videos } from "../../../@types/Videos";

export const videosApi = createApi({
    reducerPath: 'videosApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}films/` }),
    endpoints: (builder) => ({
        getVideos: builder.query<Videos, number>({
            query: (id) => `${id}/videos`
        }),
    }),
});

export const { useGetVideosQuery } = videosApi