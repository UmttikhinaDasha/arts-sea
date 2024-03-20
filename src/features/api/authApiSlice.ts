import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/users/token/',
        method: 'POST',
        body: {...credentials}
      })
    }),
    registration: builder.mutation({
      query: credentials => ({
        url: '/users/',
        method: 'POST',
        body: {...credentials}
      })
    }),
    im: builder.query({
      query: () => 'users/im/',
    }),
    updateProfile: builder.mutation({
      query: credentials => ({
        url: 'users/im/',
        method: 'PATCH',
        body: {...credentials}
      })
    }),
  })
})

export const { useLoginMutation, useRegistrationMutation, useImQuery, useUpdateProfileMutation } = authApiSlice