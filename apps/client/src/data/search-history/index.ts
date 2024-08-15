import { api } from "~/data/api";
import { searchHistorySlice } from "~/state/search-history";
import { SearchHistoryResponse } from "~/types/search-history";

export type SearchHistoryQuery = {
  pageParam?: number;
};

export const searchHistoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    fetchSearchHistory: builder.query<
      SearchHistoryResponse,
      SearchHistoryQuery
    >({
      query: ({ pageParam }) => {
        return {
          url: `/search/history?page=${pageParam}`,
        };
      },
      keepUnusedDataFor: 0,
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        queryFulfilled.then(({ data }) => {
          dispatch(searchHistorySlice.actions.setSearchHistory(data));
        });
      },
      providesTags: ["history"],
    }),
  }),
});

export const { useFetchSearchHistoryQuery } = searchHistoryApi;
