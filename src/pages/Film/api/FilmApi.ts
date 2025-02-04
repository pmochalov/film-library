import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Film } from "../../../@types";

export const filmApi = createApi({
    reducerPath: 'filmApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}films/` }),
    endpoints: (builder) => ({
        getFilm: builder.query<Film, string>({
            query: (id) => `${id}`
        }),
    }),
});

export const { useGetFilmQuery } = filmApi