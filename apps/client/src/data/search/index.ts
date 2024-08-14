import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "~/data/api";
import { GenericResponseError } from "~/types/api/errors";

export type SearchResult = AxiosResponse<boolean>;
export type SearchError = AxiosError<GenericResponseError>;

export const search = async (searchTerm: string): Promise<SearchResult> => {
  return axiosInstance.get<boolean>(`/search?searchTerm=${searchTerm}`);
};
