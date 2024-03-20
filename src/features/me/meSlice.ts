import { createSlice } from "@reduxjs/toolkit";

const meSlice = createSlice({
  name: 'me',
  initialState: {
    id: null, 
    username: null, 
    is_active: false,
    profile: null,
    followers: null,
    followers_count: null,
    subscriptions: null,
    subscriptions_count: null,},
    reducers: {
      setMe: (state, action) => {
        const {id, username, is_active, profile, followers, 
          followers_count, subscriptions, subscriptions_count} = action.payload
        state.id = id
        state.username = username
        state.is_active = is_active
        state.profile = profile
        state.followers = followers
        state.followers_count = followers_count
        state.subscriptions = subscriptions
        state.subscriptions_count = subscriptions_count
      },
      deleteMe: (state, action) => {
        state.id = null
        state.username = null
        state.is_active = false
        state.profile = null
        state.followers = null
        state.followers_count = null
        state.subscriptions = null
        state.subscriptions_count = null
      }
    }
})

export const {setMe, deleteMe} = meSlice.actions

export default meSlice.reducer

export const selectId = (state) => state.me.id
export const selectUsername = (state) => state.me.username
export const selectIsActive = (state) => state.me.is_active
export const selectProfile = (state) => state.me.profile
export const selectFollowers = (state) => state.me.followers
export const selectFollowersCount = (state) => state.me.followers_count
export const selectSubscriptions = (state) => state.me.subscriptions
export const selectSubscriptionsCount = (state) => state.me.subscriptions_count

