import React, { useState, useEffect } from "react";
import { db } from "/firebase-config"; // Modifie ce chemin si nécessaire
import { doc, updateDoc, deleteDoc, increment } from "firebase/firestore";
import Reactions from "./Reactions";

const Post = ({ post }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState("");

  useEffect(() => {
    if (post && post.content) {
      setNewContent(post.content);
    }
  }, [post]);

  const handleEdit = async () => {
    if (post && post.id) {
      const postRef = doc(db, "posts", post.id);
      await updateDoc(postRef, {
        content: newContent,
      });
      setIsEditing(false);
    }
  };

  const handleDelete = async () => {
    if (post && post.id) {
      const postRef = doc(db, "posts", post.id);
      await deleteDoc(postRef);
      alert("Post supprimé avec succès !");
    }
  };

  const handleLike = async () => {
    if (post && post.id) {
      const postRef = doc(db, "posts", post.id);
      await updateDoc(postRef, {
        likes: increment(1),
      });
    }
  };

  if (!post) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <button onClick={handleEdit}>Sauvegarder</button>
          <button onClick={() => setIsEditing(false)}>Annuler</button>
        </div>
      ) : (
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <small>{new Date(post.timestamp.toDate()).toLocaleString()}</small>
          <button onClick={() => setIsEditing(true)}>Modifier</button>
          <button onClick={handleDelete}>Supprimer</button>
          <button onClick={handleLike}>J'aime ({post.likes || 0})</button>
        </div>
      )}
    </div>
  );
};

export default Post;
