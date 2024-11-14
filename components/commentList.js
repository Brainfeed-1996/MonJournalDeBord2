import React, { useState, useEffect } from "react";
import { db } from "/firebase-config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const q = query(
        collection(db, "posts", postId, "comments"),
        orderBy("timestamp", "desc")
      );
      const querySnapshot = await getDocs(q);
      setComments(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };

    fetchComments();
  }, [postId]);

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.comment}</p>
          <small>{new Date(comment.timestamp.toDate()).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
