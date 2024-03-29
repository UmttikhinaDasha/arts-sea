import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface IMeState {
    id: string | null
    username: string
    is_active: boolean
    profile: string | null
    followers: number | null
    followers_count: number | null
    subscriptions: number | null
    subscriptions_count: number | null
}

const initialState: IMeState = {
    id: null,
    username: '',
    is_active: false,
    profile: null,
    followers: null,
    followers_count: null,
    subscriptions: null,
    subscriptions_count: null
}

const meSlice = createSlice({
  name: 'me',
  initialState,
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
      deleteMe: (state) => {
        state.id = null
        state.username = ''
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

const selectBase = createSelector(
    (state: RootState) => state,
    (state) => state.me
)

export const selectId = createSelector(selectBase, state => state.id)

export const selectUsername = (state) => state.me.username
export const selectIsActive = (state) => state.me.is_active
export const selectProfile = (state) => state.me.profile
export const selectFollowers = (state) => state.me.followers
export const selectFollowersCount = (state) => state.me.followers_count
export const selectSubscriptions = (state) => state.me.subscriptions
export const selectSubscriptionsCount = (state) => state.me.subscriptions_count

