import React from "react";
import "./Navbar.css";
import LOGO from "../../Assets/applogo.png";

function Navbar() {
  return (
    <div className="container">
      <div className="logo__img">
        <img src={LOGO} alt="" />
      </div>
      <div className="text__container">
        <div className="nav__text1">Sign in</div>
        <div className="nav__text2">Sign up</div>
      </div>
    </div>
  );
}

export default Navbar;
