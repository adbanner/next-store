'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchWords: [],
  searchCategory: "All",
};

export const searchSlice = createSlice({
  name: "searchStore",
  initialState,
  reducers: {
    addToSearch: (state, actions) => {
      { state.searchWords.indexOf(actions.payload)==-1 ? state.searchWords =  [...state.searchWords, actions.payload] : false};
      //console.log("searchWords", state.searchWords)
    },
    changeSearchCategory: (state, action) => {
      {state.searchCategory = action.payload}
      //console.log("searchCategory", state.searchCategory)
    }
  },
});

export const { addToSearch } = searchSlice.actions;
export const { changeSearchCategory } = searchSlice.actions;
export default searchSlice.reducer;
