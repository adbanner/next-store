'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchWords: [],
  searchCategory: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addToSearch: (state, actions) => {
      { state.searchWords.indexOf(actions.payload)==-1 ? state.searchWords =  [...state.searchWords, actions.payload] : false};
      console.log(state.searchWords)
    },
  },
});

export const { addToSearch } = searchSlice.actions;
export default searchSlice.reducer;
