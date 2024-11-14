import { db } from "./firebase-config";
import { collection, addDoc, getDocs } from "firebase/firestore";

const postsCollection = collection(db, "posts");

export const createPost = async (post) => {
  await addDoc(postsCollection, post);
};

export const getPosts = async () => {
  const snapshot = await getDocs(postsCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Vérifie si window est défini
if (typeof window !== "undefined") {
  // Code spécifique au navigateur
  const postsCollection = collection(db, "posts");
  // Ajoute d'autres fonctions pour interagir avec Firestore si nécessaire
}
export const addComment = async (postId, comment) => { const postRef = doc(db, 'posts', postId); await updateDoc(postRef, { comments: arrayUnion(comment) }); };
