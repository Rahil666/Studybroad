import React, { useState } from 'react';


const Slider = ({ images, slidesToShow }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const totalSlides = Math.ceil(images.length / slidesToShow);

  const goToNextSlide = () => {
    setCurrentSlideIndex((currentSlideIndex + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlideIndex((currentSlideIndex - 1 + totalSlides) % totalSlides);
  };

  const jumpToSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  return (
    <div className="slider">
      <div className="slider-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${Math.floor(index / slidesToShow) === currentSlideIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button onClick={goToPrevSlide} className="prev-btn">&#10094;</button>
      <button onClick={goToNextSlide} className="next-btn">&#10095;</button>
      <div className="dots">
        {Array.from({ length: totalSlides }, (_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlideIndex ? 'active' : ''}`}
            onClick={() => jumpToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
