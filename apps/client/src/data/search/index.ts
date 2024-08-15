import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "~/data/api";
import { GenericResponseError } from "~/types/api/errors";
import { SearchResponse } from "~/types/search";

export type SearchResult = AxiosResponse<SearchResponse>;
export type SearchError = AxiosError<GenericResponseError>;
export type SearchPayload = {
  searchTerm: string;
};

export const search = async (payload: SearchPayload): Promise<SearchResult> => {
  return axiosInstance.post<SearchResponse>(`/search`, payload);
};
