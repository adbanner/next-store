'use client'
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "@/app/models/IProduct";


interface CartState{
  cartItems: IProduct[],
  savedItems: IProduct[]
}

const initialState: CartState = {
  cartItems: [],
  savedItems: []
};


export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    // Cart Items -------------------------------------------------------
    getCartItems: (state: CartState, actions) => {
      state.cartItems = actions.payload[0] || []
    }
    ,
    addToCart: (state: CartState, actions) => {
      let itemIndex = state.cartItems.findIndex(item=> item.id == actions.payload[0].id)
     const currentItem = JSON.parse(JSON.stringify(actions.payload[0]))
      
      if(itemIndex == -1) {
        currentItem.amount = actions.payload[1]
         state.cartItems = [...state.cartItems, currentItem]
      } else{ 
        state.cartItems[itemIndex].amount += actions.payload[1]
      }
       
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    //
    removeFromCart: (state: CartState, actions) => {
      //console.log(actions.payload)
      state.cartItems = state.cartItems.filter((product) => product.id != Number(actions.payload))
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    
    // Saved Items -------------------------------------------------------
    getSavedItems: (state, actions) => {
      state.savedItems = actions.payload[0] || []
    }
    ,
    addToSaved: (state, actions) => {
      let itemIndex = state.cartItems.findIndex(item => item.id == actions.payload[0])
      let savedIndex = state.savedItems.findIndex(item => item.id == actions.payload[0])
      
      if(savedIndex == -1){
        state.savedItems = [...state.savedItems, state.cartItems[itemIndex]]
      } else{
        state.savedItems[savedIndex].amount += state.cartItems[itemIndex].amount
      } 
      localStorage.setItem('savedItems', JSON.stringify(state.savedItems));
    }
    ,
    removeFromSaved: (state, actions) => {
      //console.log(actions.payload)
      state.savedItems = state.savedItems.filter((product) => product.id != Number(actions.payload))
      localStorage.setItem('savedItems', JSON.stringify(state.savedItems));
    },
  },
})

export const { getCartItems, addToCart, removeFromCart} = cartSlice.actions;
export const { getSavedItems, addToSaved, removeFromSaved } = cartSlice.actions;


export default cartSlice.reducer;
