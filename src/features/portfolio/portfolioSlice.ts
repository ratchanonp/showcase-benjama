import { IPortfolio, IPortfolioInput } from "@/interfaces/portfolio.interface";
import { storage } from "@/lib/firebase";
import { firebaseApi } from "@/store/firebaseApi";
import { FirebaseError } from "firebase/app";
import { deleteObject, ref } from "firebase/storage";
import {
  addPortfolio,
  deletePortfolio,
  getPortfolio,
  getPortfolioByAuthorId,
  setCoverImage,
  setPdf,
} from "./portfolioFirebase";

const portfolioApi = firebaseApi.injectEndpoints({
  endpoints: (builder) => ({
    addPortfolio: builder.mutation<string, IPortfolioInput>({
      async queryFn(arg) {
        try {
          const portfolioId = await addPortfolio(arg);
          return { data: portfolioId };
        } catch (error) {
          return { error: error as FirebaseError };
        }
      },
      invalidatesTags: ["Portfolio"],
    }),
    setCoverImage: builder.mutation<
      void,
      { portfolioId: string; imageUrl: string }
    >({
      async queryFn(arg) {
        try {
          await setCoverImage(arg.portfolioId, arg.imageUrl);
          return { data: undefined };
        } catch (error) {
          return { error: error as FirebaseError };
        }
      },
      invalidatesTags: ["Portfolio"],
    }),
    setPdf: builder.mutation<void, { portfolioId: string; pdfUrl: string }>({
      async queryFn(arg) {
        try {
          await setPdf(arg.portfolioId, arg.pdfUrl);
          return { data: undefined };
        } catch (error) {
          return { error: error as FirebaseError };
        }
      },
      invalidatesTags: ["Portfolio"],
    }),
    getPortfolio: builder.query<IPortfolio[], void>({
      async queryFn() {
        try {
          const portfolio = await getPortfolio();
          return { data: portfolio };
        } catch (error) {
          return { error: error as FirebaseError };
        }
      },
      providesTags: ["Portfolio"],
    }),
    getPortfolioByAuthorId: builder.query<IPortfolio[], string>({
      async queryFn(arg) {
        try {
          const portfolio = await getPortfolioByAuthorId(arg);
          return { data: portfolio };
        } catch (error) {
          return { error: error as FirebaseError };
        }
      },
      providesTags: ["Portfolio"],
    }),
    deletePortfolio: builder.mutation<void, string>({
      async queryFn(arg) {
        try {
          await deletePortfolio(arg);

          const coverImageRef = ref(storage, `portfolio/${arg}/coverImage`);
          await deleteObject(coverImageRef);

          const pdfRef = ref(storage, `portfolio/${arg}/pdf`);
          await deleteObject(pdfRef);

          return { data: undefined };
        } catch (error) {
          return { error: error as FirebaseError };
        }
      },
      invalidatesTags: ["Portfolio"],
    }),
  }),
});

export const {
  useAddPortfolioMutation,
  useSetCoverImageMutation,
  useSetPdfMutation,
  useGetPortfolioQuery,
  useGetPortfolioByAuthorIdQuery,
  useDeletePortfolioMutation,
} = portfolioApi;
