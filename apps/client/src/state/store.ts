import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { api } from "~/data/api";
import { searchSlice } from "~/state/search";
import { searchHistorySlice } from "~/state/search-history";
import { sidebarSlice } from "~/state/sidebar";

export const store = configureStore({
  reducer: {
    [searchSlice.name]: searchSlice.reducer,
    [searchHistorySlice.name]: searchHistorySlice.reducer,
    [sidebarSlice.name]: sidebarSlice.reducer,
    api: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([api.middleware]),
  devTools: !["production", "prod"].includes(process.env.NODE_ENV),
});

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
