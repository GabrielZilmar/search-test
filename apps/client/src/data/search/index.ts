import { api } from "~/data/api";
import { searchSlice } from "~/state/search";
import { SearchResponse } from "~/types/search";

export type SearchPayload = {
  searchTerm: string;
};

export const searchApi = api.injectEndpoints({
  endpoints: (builder) => ({
    search: builder.mutation<SearchResponse, SearchPayload>({
      query: (data) => ({
        url: "/search",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["history"],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        queryFulfilled.then(({ data }) => {
          dispatch(searchSlice.actions.setSearch(data));
        });
      },
    }),
  }),
});

export const { useSearchMutation } = searchApi;
