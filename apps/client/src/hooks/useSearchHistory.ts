import { useQuery } from "@tanstack/react-query";
import {
  searchHistory,
  SearchHistoryError,
  SearchHistoryQuery,
  SearchHistoryResult,
} from "~/data/search-history";
import { SearchHistoryResponse } from "~/types/search-history";

const initialData: SearchHistoryResponse = {
  items: [],
  pages: 1,
};

export const useSearchHistory = (query: SearchHistoryQuery = {}) => {
  const { isPending, isLoading, error, data } = useQuery<
    SearchHistoryResult,
    SearchHistoryError
  >({
    queryKey: ["search-history", query],
    queryFn: () => searchHistory(query),
  });

  return { isPending, isLoading, error, result: data?.data || initialData };
};
