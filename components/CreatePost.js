import React, { useState } from "react";
import { db } from "/firebase-config"; // Modifie ce chemin si nécessaire
import { collection, addDoc } from "firebase/firestore";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "posts"), {
        title,
        content,
        timestamp: new Date(),
        likes: 0,
      });
      setTitle("");
      setContent("");
      alert("Post publié avec succès!");
    } catch (error) {
      console.error("Erreur lors de la publication du post : ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titre"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Contenu"
        required
      />
      <button type="submit">Publier</button>
    </form>
  );
};

export default CreatePost;
