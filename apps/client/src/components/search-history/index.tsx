"use client";

import Link from "next/link";
import { useSearchHistory } from "~/hooks";

const SearchHistory = () => {
  const { result } = useSearchHistory();

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
    </div>
  );
};

export default SearchHistory;
