import { db } from "@/lib/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getCountFromServer,
  getDocs,
  increment,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";

const likeCollection = collection(db, "likes");

export async function likesCount(storyId: string): Promise<number> {
  const q = query(likeCollection, where("storyId", "==", storyId));
  const snapshot = await getCountFromServer(q);

  return snapshot.data().count;
}

export async function isLiked(
  storyId: string,
  userId: string
): Promise<string | null> {
  const querySnapshot = await getDocs(
    query(
      likeCollection,
      where("storyId", "==", storyId),
      where("userId", "==", userId)
    )
  );

  if (querySnapshot.empty) {
    return null;
  }

  return querySnapshot.docs[0].id;
}

export async function likeStory(storyId: string, userId: string) {
  const docRef = await addDoc(likeCollection, {
    storyId,
    userId,
    createdAt: serverTimestamp(),
  });

  const storyRef = doc(db, "stories", storyId);
  await updateDoc(storyRef, {
    likes: increment(1),
  });

  return docRef.id;
}

export async function unlikeStory(likeId: string, storyId: string) {
  try {
    await deleteDoc(doc(db, "likes", likeId));
  } catch (error) {
    console.error("Error removing document: ", error);
  }
  const storyRef = doc(db, "stories", storyId);
  await updateDoc(storyRef, {
    likes: increment(-1),
  });
}
