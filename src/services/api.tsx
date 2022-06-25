import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from 'server/interface';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        post: builder.query<IPost[], void>({
            query: () => '/posts',
        }),
    }),
});

export const { usePostQuery } = postApi;
