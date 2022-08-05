import React from "react";
import BodyPartOne from "./HomeComponents/BodyPartOne/BodyPartOne";
import BodyPartThree from "./HomeComponents/BodyPartThree/BodyPartThree";
import BodyPartTwo from "./HomeComponents/BodyPartTwo/BodyPartTwo";
import Footer from "./HomeComponents/Footer/Footer";
import Header from "./HomeComponents/Header/Header";
import Navbar from "./HomeComponents/Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <BodyPartOne />
      <BodyPartTwo />
      <BodyPartThree />
      <Footer />
    </div>
  );
}

export default Home;
