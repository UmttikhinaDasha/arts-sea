import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {accessToken: null, refreshToken: null},
  reducers: {
    // signUp: (state, action) => {
    //   // const { id } = action.payload
    //   // state.user = id
    // },
    logIn: (state, action) => {
      const { access, refresh } = action.payload
      state.accessToken = access
      state.refreshToken = refresh
      localStorage.setItem('user', JSON.stringify({refresh}))
    },
    logOut: (state) => {
      // state.user = null
      state.accessToken = null
      state.refreshToken = null
      localStorage.removeItem('user')
    },
    // setMe: (state, action) => {
    //   const {user} = action.payload
    //   state.user = user
    // },
    // deleteMe: (state, action) => {
    //   state.user = null
    // }
  }
})

export const { logIn, logOut} = authSlice.actions

export default authSlice.reducer

// export const selectCurrentUser = (state) => state.auth.user
export const selectAccessToken = (state) => state.auth.accessToken