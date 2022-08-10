import React from "react";
import BodyPartOne from "./HomeComponents/BodyPartOne/BodyPartOne";
import BodyPartThree from "./HomeComponents/BodyPartThree/BodyPartThree";
import BodyPartTwo from "./HomeComponents/BodyPartTwo/BodyPartTwo";
import Footer from "./HomeComponents/Footer/Footer";
import Header from "./HomeComponents/Header/Header";
import Navbar from "./HomeComponents/Navbar/Navbar";
import Slideshow from "./HomeComponents/Slideshow/Slideshow";
import { SlideshowData } from "./HomeComponents/Slideshow/SlideshowData";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <BodyPartOne />
      <Slideshow slides={SlideshowData} />
      <BodyPartTwo />
      <BodyPartThree />
      <Footer />
    </div>
  );
}

export default Home;
