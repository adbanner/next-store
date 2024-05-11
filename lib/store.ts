import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import cartReducer from "./reducers/cartSlice";
import searchReducer from "./reducers/searchSlice";
import historyReducer from "./reducers/historySlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    searchStore: searchReducer,
    historyStore: historyReducer,
  },
});

