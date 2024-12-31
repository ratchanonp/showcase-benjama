import { db } from "@/lib/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { IComment } from "./comment.interface";

const commentCollection = collection(db, "comments");

export async function addComment(
  comment: Omit<IComment, "id" | "postedAt" | "isApproved">
) {
  await addDoc(commentCollection, {
    ...comment,
    postedAt: serverTimestamp(),
    isApproved: false,
  });
}

export async function getComments(storyId: string) {
  const q = query(
    commentCollection,
    where("storyId", "==", storyId),
    orderBy("postedAt")
  );
  const snapshot = await getDocs(q);

  const comments: IComment[] = [];
  snapshot.forEach((doc) => {
    const { postedAt, ...comment } = doc.data();
    comments.push({
      id: doc.id,
      postedAt: postedAt.seconds,
      ...comment,
    } as IComment);
  });

  return comments;
}

export async function approveComment(commentId: string) {
  await updateDoc(doc(commentCollection, commentId), {
    isApproved: true,
  });
}

export async function deleteComment(commentId: string) {
  await deleteDoc(doc(commentCollection, commentId));
}
