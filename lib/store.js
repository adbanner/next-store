import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import searchReducer from "./features/searchSlice";
import historyReducer from "./features/historySlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    searchStore: searchReducer,
    historyStore: historyReducer,
  },
});

