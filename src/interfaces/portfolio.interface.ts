import { FieldValue } from "firebase/firestore";

export interface IPortfolio {
  id: string;
  producer: string;
  department: string;
  faculty: string;
  university: string;
  year: string;
  coverImage: string;
  pdf: string;
  postedAt: number;
  authorId: string;
  authorName: string;
  views: number;
}

export type IPortfolioInput = Omit<
  IPortfolio,
  "id" | "postedAt" | "views" | "coverImage" | "pdf"
>;

export interface IPortfolioFirebasePayload
  extends Omit<IPortfolio, "id" | "postedAt" | "coverImage" | "pdf"> {
  postedAt: FieldValue;
}
