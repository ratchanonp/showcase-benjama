import { firebaseApi } from "@/store/firebaseApi";
import { FirestoreError } from "firebase/firestore";
import { isLiked, likesCount, likeStory, unlikeStory } from "./likeFirebase";

const likeApi = firebaseApi.injectEndpoints({
  endpoints: (builder) => ({
    likesCount: builder.query<number, string>({
      async queryFn(storyId) {
        try {
          const count = await likesCount(storyId);
          return { data: count };
        } catch (error) {
          return { error: error as FirestoreError };
        }
      },
      providesTags: (result, error, storyId) => {
        return [{ type: "Like", id: storyId }];
      },
    }),
    isLiked: builder.query<string | null, { storyId: string; userId: string }>({
      async queryFn(arg) {
        try {
          const likeId = await isLiked(arg.storyId, arg.userId);
          return { data: likeId };
        } catch (error) {
          return { error: error as FirestoreError };
        }
      },
      providesTags: (result, error, arg) => {
        return [{ type: "IsLiked", id: `${arg.storyId}-${arg.userId}` }];
      },
    }),
    likeStory: builder.mutation<void, { storyId: string; userId: string }>({
      async queryFn(arg) {
        try {
          await likeStory(arg.storyId, arg.userId);
          return { data: undefined };
        } catch (error) {
          return { error: error as FirestoreError };
        }
      },
      invalidatesTags: (result, error, arg) => {
        // Invalidate the "isLiked" query for the current user
        // and the "likesCount" query for the story

        return [
          { type: "IsLiked", id: `${arg.storyId}-${arg.userId}` },
          { type: "Like", id: arg.storyId },
        ];
      },
    }),
    unlikeStory: builder.mutation<
      void,
      { likeId: string; storyId: string; userId: string }
    >({
      async queryFn(arg) {
        try {
          await unlikeStory(arg.likeId, arg.storyId);
          return { data: undefined };
        } catch (error) {
          return { error: error as FirestoreError };
        }
      },
      invalidatesTags: (result, error, arg) => {
        // Invalidate the "isLiked" query for the current user
        // and the "likesCount" query for the story
        return [
          { type: "IsLiked", id: `${arg.storyId}-${arg.userId}` },
          { type: "Like", id: arg.storyId },
        ];
      },
    }),
  }),
});
export const {
  useLikesCountQuery,
  useLazyIsLikedQuery,
  useLikeStoryMutation,
  useIsLikedQuery,
  useUnlikeStoryMutation,
} = likeApi;
