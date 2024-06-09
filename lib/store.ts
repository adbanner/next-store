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

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']