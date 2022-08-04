import React from "react";
import BodyPartOne from "./HomeComponents/BodyPartOne/BodyPartOne";
import BodyPartTwo from "./HomeComponents/BodyPartTwo/BodyPartTwo";
import Header from "./HomeComponents/Header/Header";
import Navbar from "./HomeComponents/Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <BodyPartOne />
      <BodyPartTwo />
    </div>
  );
}

export default Home;
