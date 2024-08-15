import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "~/data/api";
import { GenericResponseError } from "~/types/api/errors";
import { SearchHistoryResponse } from "~/types/search-history";

export type SearchHistoryResult = AxiosResponse<SearchHistoryResponse>;
export type SearchHistoryError = AxiosError<GenericResponseError>;

export const searchHistory = async (): Promise<SearchHistoryResult> => {
  return axiosInstance.get<SearchHistoryResponse>(`/search/history`);
};
