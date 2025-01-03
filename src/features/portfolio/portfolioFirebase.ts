import {
  IPortfolio,
  IPortfolioFirebasePayload,
  IPortfolioInput,
} from "@/interfaces/portfolio.interface";
import { db } from "@/lib/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";

const portfolioCollection = collection(db, "portfolio");

export async function addPortfolio(portfolio: IPortfolioInput) {
  const payload: IPortfolioFirebasePayload = {
    ...portfolio,
    postedAt: serverTimestamp(),
    views: 0,
  };

  const docRef = await addDoc(portfolioCollection, payload);
  return docRef.id;
}

export async function getPortfolio() {
  const snapshot = await getDocs(portfolioCollection);
  const portfolio: IPortfolio[] = [];
  snapshot.forEach((doc) => {
    const { postedAt, ...data } = doc.data();
    portfolio.push({
      id: doc.id,
      ...data,
      postedAt: postedAt.seconds * 1000,
    } as IPortfolio);
  });

  return portfolio;
}

export async function setCoverImage(
  portfolioId: string,
  coverImageUrl: string
) {
  const portfolioRef = doc(portfolioCollection, portfolioId);
  await updateDoc(portfolioRef, { coverImage: coverImageUrl });
}

export async function setPdf(portfolioId: string, pdfUrl: string) {
  const portfolioRef = doc(portfolioCollection, portfolioId);
  await updateDoc(portfolioRef, { pdf: pdfUrl });
}

export async function getPortfolioByAuthorId(authorId: string) {
  const q = query(portfolioCollection, where("authorId", "==", authorId));
  const querySnapshot = await getDocs(q);
  const portfolio: IPortfolio[] = [];
  querySnapshot.forEach((doc) => {
    const { postedAt, ...data } = doc.data();
    portfolio.push({
      id: doc.id,
      ...data,
      postedAt: postedAt.seconds * 1000,
    } as IPortfolio);
  });

  return portfolio;
}

export async function deletePortfolio(portfolioId: string) {
  const portfolioRef = doc(portfolioCollection, portfolioId);
  await deleteDoc(portfolioRef);
}