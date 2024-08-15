import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import env from "~/shared/env";

const tagTypes = ["search", "history"];

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: env.apiBaseUrl,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Access-Control-Allow-Credentials", "true");
      headers.set("Access-Control-Allow-Origin", "*");
    },
  }),
  tagTypes,
  endpoints: () => ({}),
});
