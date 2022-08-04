import React from "react";
import BodyOne from "./HomeComponents/BodyOne/BodyOne";
import Header from "./HomeComponents/Header/Header";
import Navbar from "./HomeComponents/Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <BodyOne />
    </div>
  );
}

export default Home;
