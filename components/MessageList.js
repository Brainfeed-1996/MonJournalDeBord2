import React, { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      setMessages(querySnapshot.docs.map((doc) => doc.data()));
    };

    fetchMessages();
  }, []);

  return (
    <div>
      {messages.map((msg, index) => (
        <div key={index}>
          <p>{msg.message}</p>
          {msg.fileName && <p>Fichier attaché: {msg.fileName}</p>}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
