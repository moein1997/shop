import React, { useState, useEffect } from 'react';
import './slider.css';

const Slider = ({ images, autoSlide = true, slideInterval = 7000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      handleNext();
    }, slideInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoSlide, slideInterval]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <button className="slider-btn slider-btn-prev" onClick={handlePrev}>
        &#8249;
      </button>
      <div
        className="slider-image-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="slider-image"
          />
        ))}
      </div>
      <button className="slider-btn slider-btn-next" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default Slider;
