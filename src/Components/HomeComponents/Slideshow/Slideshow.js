import React, { useState } from "react";
import "./Slideshow.css";
import { SlideshowData } from "./SlideshowData";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Slideshow = ({ slides }) => {
  const { taxi, setTaxi } = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setTaxi(taxi === length - 1 ? 0 : taxi + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <ArrowForwardIosRoundedIcon className="RightArrowIcon" />
      <ArrowBackIosNewRoundedIcon className="leftArrowIcon" />
      {SlideshowData.map((slide, index) => {
        return <img src={slide.Image} alt="taxi image" className="Image" />;
      })}
    </section>
  );
};

export default Slideshow;
