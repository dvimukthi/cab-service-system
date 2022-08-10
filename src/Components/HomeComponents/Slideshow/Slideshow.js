import React, { useState } from "react";
import { SlideshowData } from "./SlideshowData";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Slideshow = () => {
  const { taxi, setTaxi } = useState(0);
  const length = slides.length;

  return (
    <>
      {SlideshowData.map((slide, index) => {
        return <img src={slide.Image} alt="taxi image" />;
      })}
    </>
  );
};

export default Slideshow;
