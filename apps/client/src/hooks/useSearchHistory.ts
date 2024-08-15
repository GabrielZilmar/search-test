import { useQuery } from "@tanstack/react-query";
import {
  searchHistory,
  SearchHistoryError,
  SearchHistoryResult,
} from "~/data/search-history";
import { SearchHistoryResponse } from "~/types/search-history";

const initialData: SearchHistoryResponse = {
  items: [],
  pages: 1,
};

export const useSearchHistory = () => {
  const { isPending, isLoading, error, data } = useQuery<
    SearchHistoryResult,
    SearchHistoryError
  >({
    queryKey: ["search-history"],
    queryFn: () => searchHistory(),
  });

  return { isPending, isLoading, error, result: data?.data || initialData };
};

export default useSearchHistory;
