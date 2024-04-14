'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [{
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 470
    }
  },

  ],
  searchCategory: "category",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //
    addToCart: (state, actions) => {
      let itemIndex = state.cartList.findIndex(item => item.id==actions.payload[0].id)
      console.log(actions.payload[1])
      { itemIndex == -1 ? state.cartList = [...state.cartList, actions.payload[0]] : false };
     
    },
    //
    removeFromCart: (state, actions) => {
      console.log(actions.payload)
      {state.cartList=state.cartList.filter((product)=> product.id!=Number(actions.payload))};
      
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const { removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
