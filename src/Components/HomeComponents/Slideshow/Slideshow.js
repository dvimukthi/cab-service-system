import React, { useState } from "react";
import "./Slideshow.css";
import { SlideshowData } from "./SlideshowData";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Slideshow = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <ArrowForwardIosRoundedIcon
        className="leftArrowIcon"
        onClick={nextSlide}
      />
      <ArrowBackIosNewRoundedIcon
        className="RightArrowIcon"
        onClick={prevSlide}
      />
      {SlideshowData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.Image} alt="taxi image" className="Image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slideshow;
