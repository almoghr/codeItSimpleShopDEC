import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arr:[],
    obj:{}
}

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    someFunction: (state, action) => {
        state.arr = action.payload.arrExmaple
        state.obj = action.payload.objExmaple
    }
  }
});

export const {someFunction} = exampleSlice.actions

export default exampleSlice.reducer





