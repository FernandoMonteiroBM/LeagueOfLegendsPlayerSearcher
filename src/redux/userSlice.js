import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'user',
  initialState: {
    playerInfo: {
      accountId: '',
      id: '',
      name: '',
      profileIconId: '',
      puuid: '',
      revisionDate: '',
      summonerLevel: '',
    },
  },
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, playerInfo: payload }
    },
  },
})

export const { changeUser } = slice.actions

export const selectUser = (state) => state.user

export default slice.reducer
