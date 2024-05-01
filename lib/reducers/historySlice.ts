'use client'
import { createSlice } from "@reduxjs/toolkit";

export interface BrowsedItem{
  amount: number,
  id: number,
}

interface BrowsedItemsState {
  browsedItems: BrowsedItem[]
  browsedCategories: string[]
}

const initialState: BrowsedItemsState = {
  browsedItems: [],
  browsedCategories: ["All"],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addBrowsedItem: (state, actions) => {
      state.browsedItems.findIndex(Item => Item.id === actions.payload.id) == -1
        ?
        state.browsedItems = [...state.browsedItems, actions.payload]
        :
        false
        localStorage.setItem('browsedItems', JSON.stringify(state.browsedItems));

    },
    removeBrowsedItem: (state, actions) => {
      state.browsedItems = state.browsedItems.filter((Item) => Item.id != Number(actions.payload))
      localStorage.setItem('browsedItems', JSON.stringify(state.browsedItems))
    },
  },
});

export const { addBrowsedItem } = historySlice.actions;
export const { removeBrowsedItem } = historySlice.actions;
export default historySlice.reducer;
