import { useMutation, useQueryClient } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import {
  search,
  SearchError,
  SearchPayload,
  SearchResult,
} from "~/data/search";

export const useSearch = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess, isError, error, data } = useMutation<
    SearchResult,
    SearchError,
    SearchPayload
  >({
    mutationFn: (payload) => search(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["search-history"],
      });
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
  });

  return {
    mutate,
    isPending,
    isSuccess,
    isError,
    error,
    data: data?.data || null,
  };
};

export default useSearch;
