'use client'
import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  name: string,
  email: string,
  image: string,
}

interface userState {
  user: IUser | {}
}

const initialState: userState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

    addUser: (state, actions) => {
      state.user = actions.payload
    },
    removeUser: (state, actions) => {
      state.user = {}
    },
  },
});

export const { addUser } = userSlice.actions;
export const { removeUser } = userSlice.actions;
export default userSlice.reducer;
