import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "~/data/api";
import { GenericResponseError } from "~/types/api/errors";
import { SearchHistoryResponse } from "~/types/search-history";

export type SearchHistoryQuery = {
  pageParam?: number;
};

export type SearchHistoryResult = AxiosResponse<SearchHistoryResponse>;
export type SearchHistoryError = AxiosError<GenericResponseError>;

export const searchHistory = async ({
  pageParam = 1,
}: SearchHistoryQuery = {}): Promise<SearchHistoryResult> => {
  return axiosInstance.get<SearchHistoryResponse>(
    `/search/history?page=${pageParam}`,
  );
};
