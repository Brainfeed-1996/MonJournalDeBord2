import React, { useState } from "react";

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative flex items-center justify-center p-4 bg-gray-100 rounded-lg slideshow">
      <button
        onClick={goToPrevious}
        className="absolute left-0 p-2 ml-3 bg-gray-300 rounded-full hover:bg-gray-400"
      >
        Précédent
      </button>
      <img
        src={images[currentIndex].url}
        alt="Diaporama"
        className="object-cover w-full h-64 rounded-lg"
      />
      <button
        onClick={goToNext}
        className="absolute right-0 p-2 mr-3 bg-gray-300 rounded-full hover:bg-gray-400"
      >
        Suivant
      </button>
    </div>
  );
};

export default Slideshow;
