import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import rankReducer from './rankSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    rank: rankReducer,
  },
})
