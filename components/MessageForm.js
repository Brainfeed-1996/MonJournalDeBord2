import React, { useState } from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

const MessageForm = () => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "messages"), {
        message,
        fileName: file ? file.name : null,
        timestamp: new Date(),
      });
      setMessage("");
      setFile(null);
      alert("Message publié avec succès!");
    } catch (error) {
      console.error("Erreur lors de la publication du message : ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Écrivez votre message..."
      />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Publier</button>
    </form>
  );
};

export default MessageForm;
