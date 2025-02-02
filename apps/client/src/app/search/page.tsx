"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo } from "react";
import DisplayRelatedTopics from "~/components/display-related-topics";
import DisplaySearchResult from "~/components/display-search-result";
import SearchHighlight from "~/components/search-highlight";
import { useSearch } from "~/hooks";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const searchTerm = useMemo(() => searchParams.get("q") || "", [searchParams]);
  const { data, isError, isPending, mutate: searchMutate } = useSearch();

  useEffect(() => {
    if (searchTerm) {
      searchMutate({ searchTerm });
    }
  }, [searchTerm, searchMutate]);

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen text-destructive">
        <p>Error</p>
      </div>
    );
  }

  if (isPending || !data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-evenly h-screen p-4">
      <SearchHighlight />
      <div className="space-y-2 mt-4">
        <h1 className="font-bold text-lg">{searchTerm}</h1>
        <p className="text-sm sm:text-xs">{data.abstract}</p>
      </div>
      <div className="mt-4">
        <DisplaySearchResult searchResult={data.results} />
      </div>
      <div className="mt-4">
        <DisplayRelatedTopics relatedTopics={data.relatedTopics} />
      </div>
    </div>
  );
};

export default function SearchSuspensePage() {
  return (
    <Suspense>
      <SearchPage />
    </Suspense>
  );
}
