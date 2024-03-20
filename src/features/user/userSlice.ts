import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null, 
    username: null, 
    is_active: false,
    profile: null,
    followers: null,
    followers_count: null,
    subscriptions: null,
    subscriptions_count: null,
    is_your_follower: null,
    is_your_subscription: null,
  },
    reducers: {
      setUser: (state, action) => {
        const {id, username, is_active, profile, followers, 
          followers_count, subscriptions, subscriptions_count,
          is_your_follower, is_your_subscription} = action.payload
        state.id = id
        state.username = username
        state.is_active = is_active
        state.profile = profile
        state.followers = followers
        state.followers_count = followers_count
        state.subscriptions = subscriptions
        state.subscriptions_count = subscriptions_count
        state.is_your_follower = is_your_follower
        state.is_your_subscription = is_your_subscription
      },
      deleteUser: (state, action) => {
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

export const {setUser, deleteUser} = userSlice.actions

export default userSlice.reducer

export const selectId = (state) => state.user.id
export const selectUsername = (state) => state.user.username
export const selectIsActive = (state) => state.user.is_active
export const selectProfile = (state) => state.user.profile
export const selectFollowers = (state) => state.user.followers
export const selectFollowersCount = (state) => state.user.followers_count
export const selectSubscriptions = (state) => state.user.subscriptions
export const selectSubscriptionsCount = (state) => state.user.subscriptions_count

