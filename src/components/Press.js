import React, { useState } from 'react';
import PressCSS from './Press.module.css'
import Gallery from './Gallery';

function PressReviewSlider() {
  const reviews = [
    "This is the first review",
    "This is the second review",
    "This is the third review"
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150"
  ];

  return (
    <section className={PressCSS.PressSection}>
        <div className={PressCSS.QuoteSection}>
            <h3>"It deserves all the praise"</h3>
            <button className={PressCSS.outlineBtn}>View More Press</button>
        </div>
        <Gallery />
    </section>

    /*<div className="press-review-slider">
      <button class={`${PressCSS.arrow} ${PressCSS.left}`} onClick={handlePrev}></button>
      <div className="review-text">{reviews[index]}</div>
      <button class={`${PressCSS.arrow} ${PressCSS.right}`} onClick={handleNext}></button>
    </div>*/
  );
};

export default PressReviewSlider;