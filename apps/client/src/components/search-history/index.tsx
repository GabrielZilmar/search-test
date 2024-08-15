"use client";

import { Pagination } from "@cialdnb/ui";
import Link from "next/link";
import { useCallback, useState } from "react";
import { useSearchHistory } from "~/hooks";

const INITIAL_PAGE = 1;

const SearchHistory = () => {
  const [page, setPage] = useState<number>(INITIAL_PAGE);
  const { result, isLoading } = useSearchHistory({ pageParam: page });

  const nextPage = useCallback(() => {
    setPage(page + 1);
  }, [setPage, page]);

  const backPage = useCallback(() => {
    setPage(page - 1);
  }, [setPage, page]);

  return (
    <div className="space-y-2">
      <h1 className="font-bold text-lg">Search History</h1>
      <div className="px-2">
        <ul>
          {result.items.map((item) => (
            <Link href={`/search?q=${item.title}`} key={item.title}>
              <li>
                <p>{item.title}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Pagination
        currentPage={page}
        totalPages={result.pages}
        nextPage={nextPage}
        backPage={backPage}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SearchHistory;
