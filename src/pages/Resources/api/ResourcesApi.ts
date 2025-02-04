import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Resources } from "../../../@types/Resources";

export const resourcesApi = createApi({
    reducerPath: 'resourcesApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}films/` }),
    endpoints: (builder) => ({
        getResources: builder.query<Resources, number>({
            query: (id) => `${id}/external_sources`
        }),
    }),
});

export const { useGetResourcesQuery } = resourcesApi