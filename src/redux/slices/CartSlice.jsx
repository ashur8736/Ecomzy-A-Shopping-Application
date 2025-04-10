import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },

    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    clearCart: () => {
      return []; 
    },
  },
});

export const { add, remove, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
