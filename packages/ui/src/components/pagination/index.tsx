import React from "react";
import { Button } from "../button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  backPage: () => void;
  isLoading?: boolean;
}

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ currentPage, totalPages, nextPage, backPage, isLoading = false }, ref) => {
    return (
      <nav ref={ref} aria-label="Pagination">
        <ul className="flex items-center space-x-2">
          <li>
            <Button
              onClick={backPage}
              disabled={currentPage === 1 || isLoading}
              variant="outline"
            >
              Previous
            </Button>
          </li>
          <div className="px-4 py-2 border rounded">{currentPage}</div>
          <li>
            <Button
              onClick={nextPage}
              disabled={currentPage === totalPages || isLoading}
              variant="outline"
            >
              Next
            </Button>
          </li>
        </ul>
      </nav>
    );
  },
);
Pagination.displayName = "Pagination";

export { Pagination };
