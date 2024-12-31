import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const firebaseApi = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: () => ({}),
  tagTypes: ["Story", "Like", "IsLiked", "Comment"],
});
