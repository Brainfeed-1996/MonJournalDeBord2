import React, { useState } from "react";

const Settings = () => {
  const [notifyNewPost, setNotifyNewPost] = useState(true);
  const [notifyNewAlbum, setNotifyNewAlbum] = useState(true);

  const handleSave = () => {
    // Sauvegarde des préférences dans Firebase ou localement
    alert("Préférences sauvegardées !");
  };

  return (
    <div>
      <h1>Paramètres de Notification</h1>
      <label>
        <input
          type="checkbox"
          checked={notifyNewPost}
          onChange={() => setNotifyNewPost(!notifyNewPost)}
        />
        Notifier pour chaque nouvelle publication
      </label>
      <label>
        <input
          type="checkbox"
          checked={notifyNewAlbum}
          onChange={() => setNotifyNewAlbum(!notifyNewAlbum)}
        />
        Notifier pour chaque nouvel album
      </label>
      <button onClick={handleSave}>Sauvegarder</button>
    </div>
  );
};

export default Settings;
