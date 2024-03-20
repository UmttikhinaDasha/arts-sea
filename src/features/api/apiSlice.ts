import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { signUp, logIn, logOut } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8000/api/v1',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth?.accessToken
    // console.log('token ' + token)
    if (token) {
      // console.log('token ' + token)
      headers.set("authorization", `Bearer ${token}`)
    }
    return headers
  }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  
  if (result?.error?.status === 401 || result?.error?.status === 403) {
    // console.log('sending refresh token')
    const refresh = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

    if (refresh) {
      const refreshResult = await baseQuery({url: '/users/token/refresh/', method: 'POST', body: refresh}, api, extraOptions);
      // console.log(refreshResult)
      if (refreshResult?.data) {
        // const user = api.getState().auth.user
        // store the new token
        api.dispatch(logIn({...refreshResult.data, /*user*/}))
        // retry the original query
        result =  await baseQuery(args, api, extraOptions)
      } else {
        api.dispatch(logOut())
      }
    } else {
      api.dispatch(logOut())
    }
  }

  return result
}


export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({})
})