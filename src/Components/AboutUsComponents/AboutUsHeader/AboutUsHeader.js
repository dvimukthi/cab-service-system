import React from "react";
import "../AboutUsHeader/AboutUsHeader.css";
import LOGO from "../../../Assets/GoCheeta logo.png";

function AboutUsHeader() {
  return (
    <div className="AboutusHeader__container">
      <div className="logo__img">
        <img
          src={LOGO}
          alt=""
          width="70"
          height="70"
          style={{
            marginLeft: "7px",
          }}
        />
      </div>
      <div className="text__container">
        <div className="nav__text1">Sign in</div>
        <div className="nav__text2">Sign up</div>
      </div>
    </div>
  );
}

export default AboutUsHeader;
