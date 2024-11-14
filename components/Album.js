import React from "react";
import Slideshow from "./Slideshow";

const Album = ({ albumName, photos }) => {
  return (
    <div className="album">
      <h2>{albumName}</h2>
      <Slideshow images={photos} />
    </div>
  );
};

export default Album;
