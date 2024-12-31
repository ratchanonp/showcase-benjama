import { IStory } from "@/interfaces/story.inteface";
import { db } from "@/lib/firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  limit,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";

const storyCollection = collection(db, "stories");

export type AddStoryPayload = Pick<
  IStory,
  "title" | "categoryId" | "content" | "authorId" | "authorName"
>;

export async function addStory(story: AddStoryPayload) {
  const docRef = await addDoc(storyCollection, {
    ...story,
    likes: 0,
    view: 0,
    postedAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function setFeatureImage(storyId: string, imageUrl: string) {
  const docRef = doc(db, "stories", storyId);
  await updateDoc(docRef, {
    image: imageUrl,
  });
}

export async function getStories() {
  const snapshot = await getDocs(storyCollection);
  const stories: IStory[] = [];
  snapshot.forEach((doc) => {
    const { postedAt, ...data } = doc.data();
    stories.push({
      id: doc.id,
      ...data,
      postedAt: postedAt.secounds,
    } as IStory);
  });

  return stories;
}

export async function getStoriesByUserId(userId: string) {
  const q = query(storyCollection, where("authorId", "==", userId));
  const querySnapshot = await getDocs(q);
  const stories: IStory[] = [];
  querySnapshot.forEach((doc) => {
    const { postedAt, ...data } = doc.data();
    stories.push({
      id: doc.id,
      ...data,
      postedAt: postedAt.secounds,
    } as IStory);
  });

  return stories;
}

export async function getStoriesByCategory(categoryId: string) {
  const q = query(storyCollection, where("categoryId", "==", categoryId));
  const querySnapshot = await getDocs(q);
  const stories: IStory[] = [];
  querySnapshot.forEach((doc) => {
    const { postedAt, ...data } = doc.data();
    stories.push({
      id: doc.id,
      ...data,
      postedAt: postedAt.secounds,
    } as IStory);
  });

  return stories;
}

export async function getStory(storyId: string) {
  const docRef = doc(db, "stories", storyId);
  const docSnapshot = await getDoc(docRef);

  if (!docSnapshot.exists()) {
    throw new Error("IStory not found");
  }

  const { postedAt, ...data } = docSnapshot.data();
  return {
    id: docSnapshot.id,
    ...data,
    postedAt: postedAt.secounds,
  } as IStory;
}

export async function viewStory(storyId: string) {
  const docRef = doc(db, "stories", storyId);
  const docSnapshot = await getDoc(docRef);

  if (!docSnapshot.exists()) {
    throw new Error("IStory not found");
  }

  await updateDoc(docRef, {
    view: increment(+1),
  });
}

export async function getPopularStory(top?: number, categoryId?: string) {
  const DEFALT_TOP = 5;
  let q = query(
    storyCollection,
    orderBy("view", "desc"),
    limit(top || DEFALT_TOP)
  );

  if (categoryId) {
    q = query(
      storyCollection,
      where("categoryId", "==", categoryId),
      orderBy("view", "desc"),
      limit(top || DEFALT_TOP)
    );
  }

  const querySnapshot = await getDocs(q);

  const stories: IStory[] = [];
  querySnapshot.forEach((doc) => {
    const { postedAt, ...data } = doc.data();
    stories.push({
      id: doc.id,
      ...data,
      postedAt: postedAt.secounds,
    } as IStory);
  });

  return stories;
}
