import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchHistoryResponse } from "~/types/search-history";

const initialState: SearchHistoryResponse = {
  items: [],
  pages: 1,
};

export const searchHistorySlice = createSlice({
  name: "searchHistorySlice",
  initialState,
  reducers: {
    setSearchHistory: (state, action: PayloadAction<SearchHistoryResponse>) => {
      state.items = action.payload.items;
      state.pages = action.payload.pages;
    },
  },
});
