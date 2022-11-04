import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data:[],
}
export const ResourceSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    }
  }
})

export const { setData } = ResourceSlice.actions
export default ResourceSlice.reducer