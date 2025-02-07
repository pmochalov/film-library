import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Collections } from "../../../@types/Collections";

export const collectionsApi = createApi({
    reducerPath: 'collectionsApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}films/` }),
    endpoints: (builder) => ({
        getCollection: builder.query<Collections, { type: string; page: number }>({
            query: ({ type, page }) => `collections?type=${type}&page=${page}`
        }),
    }),
});

export const { useGetCollectionQuery } = collectionsApi