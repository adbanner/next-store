'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  browsedProducts: [],
  browsedCategories: ["All"],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addBrowsedProduct: (state, actions) => {

      state.browsedProducts.findIndex(product => product.id === actions.payload.id) == -1
        ?
        state.browsedProducts = [...state.browsedProducts, actions.payload]
        :
        false


    },
    removeBrowsedProduct: (state, actions) => {
      state.browsedProducts = state.browsedProducts.filter((product) => product.id != Number(actions.payload))
     // localStorage.setItem('browsedProducts', JSON.stringify(state.cartList)); state.browsedProducts
    },
  },
});

export const { addBrowsedProduct } = historySlice.actions;
export const { removeBrowsedProduct } = historySlice.actions;
export default historySlice.reducer;
