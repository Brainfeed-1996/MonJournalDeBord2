import { db } from "./firebase-config";
import { collection, addDoc, getDocs } from "firebase/firestore";

const albumsCollection = collection(db, "albums");

export const createAlbum = async (album) => {
  await addDoc(albumsCollection, album);
};

export const getAlbums = async () => {
  const snapshot = await getDocs(albumsCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
