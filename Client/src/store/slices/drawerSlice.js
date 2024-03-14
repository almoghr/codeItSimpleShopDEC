import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: false
}

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    setDrawerOpened:(state) => {
        state.open = true
    },
    setDrawerClosed:(state) => {
        state.open = false
    }
  }
});

export const {setDrawerOpened, setDrawerClosed} = drawerSlice.actions

export default drawerSlice.reducer