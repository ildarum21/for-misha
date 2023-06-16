import { createSlice } from '@reduxjs/toolkit'

type SessionSliceState = {
  accessToken?: string
  userId?: string
  isAuthorized: boolean
}

const initialState: SessionSliceState = {
  isAuthorized: false
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    clearSessionData: (state) => {
      state.accessToken = undefined
      state.userId = undefined
      state.isAuthorized = false
    }
  }
  // extraReducers: (builder) => {
  //   builder.addMatcher(sessionApi.endpoints.login.matchFulfilled, (state: SessionSliceState, { payload }) => {
  //     state.isAuthorized = true

  //     // say TypeScript that isAuthorized = true
  //     if (state.isAuthorized) {
  //       state.userId = payload.userId
  //       state.accessToken = payload.accessToken
  //     }
  //   })
  // }
})

export const { clearSessionData } = sessionSlice.actions

export default sessionSlice.reducer
