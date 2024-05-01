'use client'
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cartItems: [],
  searchCategory: "category",
};


export const listSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //

    getCartItems: (state, actions) => {
      state.cartItems = actions.payload[0] || []
    }
    ,
    addTolist: (state, actions) => {
      let itemIndex = state.cartItems.findIndex(item => item.id == actions.payload[0].id)
      const currentItem = JSON.parse(JSON.stringify(actions.payload[0]))
      currentItem.amount = actions.payload[1]
      
      itemIndex == -1 ?
        state.cartItems = [...state.cartItems, currentItem]
        :
        state.cartItems[itemIndex].amount += actions.payload[1]

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    //
    removeFromList: (state, actions) => {
      //console.log(actions.payload)
      state.cartItems = state.cartItems.filter((product) => product.id != Number(actions.payload))
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
})

export const { getCartItems } = listSlice.actions;
export const { addToCart } = listSlice.actions;
export const { removeFromCart } = listSlice.actions;
export default listSlice.reducer;
