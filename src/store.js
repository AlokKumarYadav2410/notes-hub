import { configureStore } from '@reduxjs/toolkit'
import noteReducer from './redux/noteSlice'

export default configureStore({
  reducer: {
    note: noteReducer,
  },
  
})