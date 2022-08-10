import React from "react";
import { SlideshowData } from "./SlideshowData";

const Slideshow = () => {
  return (
    <>
      {SlideshowData.map((slide, index) => {
        return <img src={slide.Image} alt="taxi image" />;
      })}
    </>
  );
};

export default Slideshow;
