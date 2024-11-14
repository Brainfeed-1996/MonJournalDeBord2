import React from "react";
import { db } from "../firebase-config";
import { doc, updateDoc, increment } from "firebase/firestore";

const Reactions = ({ postId }) => {
  const handleReaction = async (reaction) => {
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, {
      [reaction]: increment(1),
    });
  };

  return (
    <div>
      <button onClick={() => handleReaction("like")}>👍</button>
      <button onClick={() => handleReaction("love")}>❤️</button>
      <button onClick={() => handleReaction("laugh")}>😂</button>
      <button onClick={() => handleReaction("sad")}>😢</button>
    </div>
  );
};

export default Reactions;
