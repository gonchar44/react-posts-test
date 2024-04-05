import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post, PostRequestParams } from '@types'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], PostRequestParams>({
      query: ({ limit }) => `/posts?_limit=${limit}`,
      transformResponse: (response: Post[] | undefined): Post[] =>
        response ?? []
    })
  })
})

export const { useGetPostsQuery } = apiSlice
