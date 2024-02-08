import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: []
  },
  reducers: {
    postAdded(state, action) {
      state.posts.push(action.payload)
    },
    postUpdated(state, action) {
      
    }
  }
})

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer