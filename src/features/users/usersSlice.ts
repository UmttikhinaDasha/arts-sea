import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: []
  },
  reducers: {
    userAdded(state, action) {
      state.users.push(action.payload)
    }
  }
})

export const { userAdded } = usersSlice.actions

export default usersSlice.reducer