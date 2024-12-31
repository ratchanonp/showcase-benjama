import { firebaseApi } from "@/store/firebaseApi";
import { addComment, getComments } from "./commentFirebase";
import { IComment } from "./comment.interface";
import { FirebaseError } from "firebase/app";

const commentApi = firebaseApi.injectEndpoints({
  endpoints: (builder) => ({
    addComment: builder.mutation<void, Omit<IComment, "id" | "postedAt" | "isApproved">>({
      async queryFn(arg) {
        try {
          const commentId = await addComment(arg);
          return { data: commentId };
        } catch (error) {
          return { error: error as FirebaseError };
        }
      },
      invalidatesTags: ["Comment"],
    }),
    getComments: builder.query<IComment[], string>({
      async queryFn(arg) {
        try {
          const comments = await getComments(arg);
          return { data: comments };
        } catch (error) {
          return { error: error as FirebaseError };
        }
      },
      providesTags: ["Comment"],
    }),
  }),
});

export const { useAddCommentMutation, useGetCommentsQuery } = commentApi;
