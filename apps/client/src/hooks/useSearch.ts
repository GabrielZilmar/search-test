import { useQuery } from "@tanstack/react-query";
import { search, SearchError, SearchResult } from "~/data/search";
import { SearchResponse } from "~/types/search";

const initialData: SearchResponse = {
  abstract: "",
  results: [],
  relatedTopics: [],
};

export const useSearch = (searchTerm: string) => {
  const { isPending, isLoading, error, data } = useQuery<
    SearchResult,
    SearchError
  >({
    queryKey: ["search", searchTerm],
    queryFn: () => search(searchTerm),
    enabled: !!searchTerm,
  });

  return { isPending, isLoading, error, result: data?.data || initialData };
};

export default useSearch;
