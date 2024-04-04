import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from '../types/posts'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], number>({
      query: (limit) => `/posts?_limit=${limit}`
    })
  })
})

export const { useGetPostsQuery } = apiSlice
