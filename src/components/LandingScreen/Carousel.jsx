

import React, { useState, useEffect, useCallback } from 'react';
import "../Styles/Carousel.css";
import Slides from "./Slides"

const Carousel = () => {

  // console.log('Slides:', slides);
  var slides=Slides();

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const  goToNext = useCallback(() => {
    if (!slides || slides.length===0) {
      console.log("slides is not defined");
      return; // Added conditional check to handle undefined or empty slides
    }
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  },[slides,currentIndex]);



  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, goToNext]);
  if (!slides || slides.length===0) {
    return <div>No slides available</div>;
  }

  const slideStylesWidthBackground = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };




  return (
    <div className="page-container">
    <div className="slider">
      <div>
        <div onClick={goToPrevious} className="arrow left-arrow">
          ❰
        </div>
        <div onClick={goToNext} className="arrow right-arrow">
          ❱
        </div>
      </div>
      <div className="slide" style={slideStylesWidthBackground}>
        <div className="content-container">
          <h2 className="slide-title">{slides[currentIndex].title}</h2>
          <p className="slide-subtitle">{slides[currentIndex].subtitle}</p>
        </div>
        <div className="dots-container">
      {slides.map((slide, slideIndex) => (
          <div
            className={`dot ${slideIndex === currentIndex ? "active" : ""}`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            
          </div>
        ))}
      </div>
      </div>

    </div>
    </div>
  );
};

export default Carousel;
