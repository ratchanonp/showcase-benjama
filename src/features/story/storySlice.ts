import { IStory } from "@/interfaces/story.inteface";
import { firebaseApi } from "@/store/firebaseApi";
import { FirebaseError } from "firebase/app";
import {
  addStory,
  AddStoryPayload,
  getPopularStory,
  getStories,
  getStoriesByCategory,
  getStoriesByUserId,
  setFeatureImage,
  viewStory,
} from "./storyFirebase";

const storyApi = firebaseApi.injectEndpoints({
  endpoints: (builder) => ({
    addStory: builder.mutation<string, AddStoryPayload>({
      async queryFn(arg) {
        try {
          const storyId = await addStory(arg);
          return { data: storyId };
        } catch (error) {
          return { error: error as FirebaseError };
        }
      },
      invalidatesTags: ["Story"],
    }),
    setFeatureImage: builder.mutation<
      void,
      { storyId: string; imageUrl: string }
    >({
      async queryFn(arg) {
        try {
          await setFeatureImage(arg.storyId, arg.imageUrl);
          return { data: undefined };
        } catch (error) {
          return { error: error as FirebaseError };
        }
      },
      invalidatesTags: ["Story"],
    }),
    getStories: builder.query<IStory[], void>({
      async queryFn() {
        try {
          const stories = await getStories();
          return { data: stories };
        } catch (error) {
          return { error: error as FirebaseError };
        }
      },
      providesTags: ["Story"],
    }),
    getStoriesByUserId: builder.query<IStory[], string>({
      async queryFn(arg) {
        try {
          const stories = await getStoriesByUserId(arg);
          return { data: stories };
        } catch (error) {
          return { error: error as FirebaseError };
        }
      },
      providesTags: ["Story"],
    }),
    getStoriesByCategory: builder.query<IStory[], string>({
      async queryFn(arg) {
        try {
          const stories = await getStoriesByCategory(arg);
          return { data: stories };
        } catch (error) {
          return { error: error as FirebaseError };
        }
      },
      providesTags: ["Story"],
    }),
    getStory: builder.query<IStory, string>({
      async queryFn(arg) {
        try {
          const stories = await getStories();
          const story = stories.find((s) => s.id === arg);
          if (!story) {
            throw new Error("Story not found");
          }
          return { data: story };
        } catch (error) {
          return { error: error as FirebaseError };
        }
      },
      providesTags: (result, error, storyId) => [
        { type: "Story", id: storyId },
      ],
    }),
    viewStory: builder.mutation<void, string>({
      async queryFn(arg) {
        try {
          await viewStory(arg);
          return { data: undefined };
        } catch (error) {
          return { error: error as FirebaseError };
        }
      },
    }),
    getPopularStory: builder.query<
      IStory[],
      { top?: number; categoryId?: string } | void
    >({
      async queryFn(arg) {
        try {
          const stories = await getPopularStory(arg?.top, arg?.categoryId);
          return { data: stories };
        } catch (error) {
          return { error: error as FirebaseError };
        }
      },
    }),
  }),
});

export const {
  useAddStoryMutation,
  useSetFeatureImageMutation,
  useGetStoriesQuery,
  useLazyGetStoriesQuery,
  useGetStoriesByUserIdQuery,
  useLazyGetStoriesByUserIdQuery,
  useGetStoriesByCategoryQuery,
  useLazyGetStoriesByCategoryQuery,
  useGetStoryQuery,
  useLazyGetStoryQuery,
  useViewStoryMutation,
  useGetPopularStoryQuery,
  useLazyGetPopularStoryQuery,
} = storyApi;
