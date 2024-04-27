'use client'
import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";



const initialState = {
  cartList: typeof window !== 'undefined' ? getFromLocalStorage("cartList") : [],
  searchCategory: "category",
};

const getFromLocalStorage = (key) => {
  if(!key || window !== undefined) {
    return ""
  }
  return JSON.parse(localStorage.getItem(key))
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //
    addToCart: (state, actions) => {
      let itemIndex = state.cartList.findIndex(item => item.id == actions.payload[0].id)
      const currentItem = JSON.parse(JSON.stringify(actions.payload[0]))
      currentItem.amount = actions.payload[1]
      
      itemIndex == -1 ?
        state.cartList = [...state.cartList, currentItem]
        :
        state.cartList[itemIndex].amount += actions.payload[1]

      localStorage.setItem('cartList', JSON.stringify(state.cartList));
    },
    //
    removeFromCart: (state, actions) => {
      //console.log(actions.payload)

      state.cartList = state.cartList.filter((product) => product.id != Number(actions.payload))
      localStorage.setItem('cartList', JSON.stringify(state.cartList));
    },
  },
})

export const { addToCart } = cartSlice.actions;
export const { removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
