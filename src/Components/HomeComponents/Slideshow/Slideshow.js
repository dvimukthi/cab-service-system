import React, { useState } from "react";
import "./Slideshow.css";
import { SlideshowData } from "./SlideshowData";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Slideshow = ({ slides }) => {
  const { taxi, setTaxi } = useState(0);
  const length = slides.length;

  return (
    <section className="slider">
      <ArrowBackIosNewRoundedIcon className="leftArrowIcon" />
      <ArrowForwardIosRoundedIcon className="RightArrowIcon" />
      {SlideshowData.map((slide, index) => {
        return <img src={slide.Image} alt="taxi image" className="Image" />;
      })}
    </section>
  );
};

export default Slideshow;
