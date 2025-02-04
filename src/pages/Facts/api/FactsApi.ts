import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Facts } from "../../../@types/Facts";

export const factsApi = createApi({
    reducerPath: 'factsApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}films/` }),
    endpoints: (builder) => ({
        getFacts: builder.query<Facts, number>({
            query: (id) => `${id}/facts`
        }),
    }),
});

export const { useGetFactsQuery } = factsApi