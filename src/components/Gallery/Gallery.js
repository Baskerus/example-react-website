import React, { useState, useEffect } from "react";
import { SliderData } from "./SliderData";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

import "./Gallery.css";

function Gallery({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className="gallery-section-container">
      <div className="slider-wrapper">
        <BsChevronLeft className="left-arrow" onClick={prevSlide} />
        <BsChevronRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <div className="slide-wrapper">
                  <div className="slide-text-wrapper">
                    <h2>{slide.title}</h2>
                    <p>{slide.desc}</p>
                    <div className="row">
                      <button>Button {index + 1}</button>
                      <button className="button-inverted">
                        Button {index + 1}
                      </button>
                    </div>
                  </div>
                  <div className="slider">
                    <img alt="Placeholder for carousel"
                      style={{
                        transform: `translateY(${offsetY * 0.3 - 500}px)`,
                      }}
                      src={slide.image}
                      className="slider-image"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
