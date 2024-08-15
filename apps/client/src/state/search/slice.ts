import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchResponse } from "~/types/search";

const initialState: SearchResponse = {
  name: "",
  abstract: "",
  results: [],
  relatedTopics: [],
};

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<SearchResponse>) => {
      state.name = action.payload.name;
      state.abstract = action.payload.abstract;
      state.results = action.payload.results;
      state.relatedTopics = action.payload.relatedTopics;
    },
  },
});
