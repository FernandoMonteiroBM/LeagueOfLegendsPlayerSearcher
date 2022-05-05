import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'rank',
  initialState: {
    rankInfo: {
      freshBlood: null,
      hotStreak: null,
      inactive: false,
      leagueId: '',
      leaguePoints: '',
      losses: 0,
      queueType: '',
      rank: '',
      summonerId: '',
      summonerName: '',
      tier: '',
      veteran: '',
      wins: 0,
    },
  },
  reducers: {
    changeRank(state, { payload }) {
      return { ...state, rankInfo: payload }
    },
  },
})

export const { changeRank } = slice.actions

export const selectRank = (state) => state.rank

export default slice.reducer
