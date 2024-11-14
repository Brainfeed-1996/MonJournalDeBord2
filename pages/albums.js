import React, { useState, useEffect } from "react";
import Album from "../components/Album";
import { getAlbums } from "../albumService";

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const albumsData = await getAlbums();
      setAlbums(albumsData);
    };
    fetchAlbums();
  }, []);

  return (
    <div>
      <h1>Albums Photos</h1>
      {albums.map((album, index) => (
        <Album key={index} albumName={album.name} photos={album.photos} />
      ))}
    </div>
  );
};

export default Albums;
