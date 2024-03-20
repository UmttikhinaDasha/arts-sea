import { apiSlice } from "../api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUser: builder.query({
      query: (id) => `users/${id}`
    }),
  })
})

export const { useGetUserQuery } = userApiSlice