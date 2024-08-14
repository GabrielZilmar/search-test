import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "~/data/api";
import { GenericResponseError } from "~/types/api/errors";
import { SearchResponse } from "~/types/search";

export type SearchResult = AxiosResponse<SearchResponse>;
export type SearchError = AxiosError<GenericResponseError>;

export const search = async (searchTerm: string): Promise<SearchResult> => {
  return axiosInstance.get<SearchResponse>(`/search?searchTerm=${searchTerm}`);
};
