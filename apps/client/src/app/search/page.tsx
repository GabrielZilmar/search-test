"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { useSearch } from "~/hooks";

export default function SearchPage() {
  const searchParams = useSearchParams();

  const searchTerm = useMemo(() => searchParams.get("q") || "", [searchParams]);

  const { result } = useSearch(searchTerm);
  console.log("🚀 ~ SearchPage ~ result:", result);

  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <p>{searchTerm}</p>
      </div>
    </main>
  );
}
