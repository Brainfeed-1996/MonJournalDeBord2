import React, { useState } from "react";
import { db } from "/firebase-config";
import { collection, addDoc } from "firebase/firestore";

const CommentForm = ({ postId }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "posts", postId, "comments"), {
        comment,
        timestamp: new Date(),
      });
      setComment("");
      alert("Commentaire publié avec succès!");
    } catch (error) {
      console.error("Erreur lors de la publication du commentaire : ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Écrivez votre commentaire..."
        required
      />
      <button type="submit">Publier</button>
    </form>
  );
};

export default CommentForm;
