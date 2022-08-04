import React from "react";
import "../Header/Header.css";
import headervideo from "../../../Assets/headervideo.mp4";

function Header() {
  return (
    <div className="header__container">
      <div className="header__text">
        <h1>Book the best taxi that you are looking for</h1>
        <h2>"Gocheetah" offer the lowest rates in Sri Lanka.</h2>
      </div>
      <div className="header__video">
        <video
          src={headervideo}
          width="690"
          height="520"
          controls="controls"
          autoPlay
          loop="true"
          style={{}}
        />
      </div>
    </div>
  );
}

export default Header;
