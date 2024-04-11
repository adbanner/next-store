'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      { state.cartList.indexOf(actions.payload)==-1 ? state.cartList =  [...state.cartList, actions.payload] : false};
      console.log(state.cartList)
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
