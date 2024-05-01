import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";
import searchReducer from "./reducers/searchSlice";
import historyReducer from "./reducers/historySlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    searchStore: searchReducer,
    historyStore: historyReducer,
  },
});

