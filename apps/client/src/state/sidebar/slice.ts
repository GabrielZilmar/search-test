import { SidebarState } from "~/state/sidebar/types";

import { createSlice } from "@reduxjs/toolkit";

const initialState: SidebarState = {
  isOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebarSlice",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    openSidebar: (state) => {
      state.isOpen = true;
    },
    closeSidebar: (state) => {
      state.isOpen = false;
    },
  },
  selectors: {
    isOpen: (state) => state.isOpen,
  },
});
