import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { SidebarActions, SidebarState } from "~/store/sidebar/types";

const initialState: SidebarState = {
  isOpen: false,
};
export const useSidebarStore = create(
  immer<SidebarState & SidebarActions>((set) => ({
    ...initialState,

    toggleSidebar: () =>
      set((state) => {
        state.isOpen = !state.isOpen;
      }),
    openSidebar: () =>
      set((state) => {
        state.isOpen = true;
      }),
    closeSidebar: () =>
      set((state) => {
        state.isOpen = false;
      }),
  })),
);
