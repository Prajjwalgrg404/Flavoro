import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "fooditems",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      // console.log(state)
      state.push(action.payload);
    },
    removeItem: (state, action) => {
        state.filter((item) => item.id!== action.payload);
    },
  },
});
export const { addItem, removeItem } = Slice.actions;

export default Slice.reducer;
