import { configureStore } from '@reduxjs/toolkit'
import contextReducer from './redux/context'

export default configureStore({
  reducer: {
    context: contextReducer,
  },
})