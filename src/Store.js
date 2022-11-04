import { configureStore } from '@reduxjs/toolkit'
import ResourceReducer from './redux/ResourceSlice'
const Store = configureStore({
  reducer: {
    resources: ResourceReducer
  },
})

export default Store