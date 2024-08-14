import { useQuery } from "@tanstack/react-query";
import { search, SearchError, SearchResult } from "~/data/search";

export const useSearch = (searchTerm: string) => {
  const { isPending, isLoading, error, data } = useQuery<
    SearchResult,
    SearchError
  >({
    queryKey: ["search", searchTerm],
    queryFn: () => search(searchTerm),
    enabled: !!searchTerm,
  });

  return { isPending, isLoading, error, result: data?.data || null };
};

export default useSearch;
