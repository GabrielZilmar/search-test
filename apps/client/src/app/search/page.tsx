"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { useSearch } from "~/hooks";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const searchTerm = useMemo(() => searchParams.get("q") || "", [searchParams]);
  const { result, isLoading } = useSearch(searchTerm);

  if (isLoading) {
    return (
      <main>
        <div className="flex justify-center items-center h-screen">
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="h-screen">
      <div className="p-4 space-y-2">
        <h1 className="font-bold text-lg">{searchTerm}</h1>
        <p className="text-sm sm:text-xs">{result?.abstract || ""}</p>
      </div>
      <div className="flex justify-center items-center ">
        {/** DisplayRelatedTopics */}
        {/** DisplayRelatedTopics */}
        {/** DisplaySearchResult */}
      </div>
    </main>
  );
}
