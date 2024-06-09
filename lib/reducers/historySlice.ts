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
    
    getBrowsedItems: (state: BrowsedItemsState, actions) => {
      state.browsedItems = actions.payload[0] || []
    }
    ,
    addBrowsedItem: (state, actions) => {
      //console.log(actions.payload.id)
      state.browsedItems.findIndex(Item => Item.id === actions.payload.id) == -1
        ?
        state.browsedItems = [...state.browsedItems, actions.payload]
        :
        localStorage.setItem('browsedItems', JSON.stringify(state.browsedItems));

    },
    removeBrowsedItem: (state, actions) => {
      state.browsedItems = state.browsedItems.filter((Item) => Item.id != Number(actions.payload))
      localStorage.setItem('browsedItems', JSON.stringify(state.browsedItems))
    },
  },
});

export const { getBrowsedItems } = historySlice.actions;
export const { addBrowsedItem } = historySlice.actions;
export const { removeBrowsedItem } = historySlice.actions;
export default historySlice.reducer;
