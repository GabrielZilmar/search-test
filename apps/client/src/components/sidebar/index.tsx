"use client";

import { Maximize2, Minimize2 } from "lucide-react";
import SearchHistory from "~/components/search-history";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { sidebarSlice } from "~/state/sidebar";

const Sidebar: React.FC = () => {
  const { isOpen } = useAppSelector((state) => state.sidebarSlice);
  const dispatch = useAppDispatch();

  return (
    <div>
      {isOpen ? (
        <div className="absolute h-screen w-fit shadow-lg rounded-lg bg-white">
          <div className="p-4 flex justify-end">
            <Minimize2
              className="cursor-pointer w-4 md:w-6"
              onClick={() => dispatch(sidebarSlice.actions.toggleSidebar())}
            />
          </div>
          <div className="p-4">
            <SearchHistory />
          </div>
        </div>
      ) : (
        <div className="absolute p-4">
          <Maximize2
            className="cursor-pointer w-4 md:w-6"
            onClick={() => dispatch(sidebarSlice.actions.toggleSidebar())}
          />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
