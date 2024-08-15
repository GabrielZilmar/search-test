export type SidebarState = {
  isOpen: boolean;
};

export type SidebarActions = {
  toggleSidebar: () => void;
  closeSidebar: () => void;
  openSidebar: () => void;
};
