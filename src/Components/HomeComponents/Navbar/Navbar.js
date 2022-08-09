import React from "react";
import "../Navbar/Navbar.css";
import LOGO from "../../../Assets/GoCheeta logo.png";
import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();

  const loadSignIn = () => {
    navigate("/signin");
  };

  const loadSignUp = () => {
    navigate("/signup");
  };

  const loadHome = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="logo__img">
        <img
          src={LOGO}
          alt=""
          onClick={loadHome}
          width="70"
          height="70"
          style={{
            marginLeft: "7px",
          }}
        />
      </div>
      <div className="text__container">
        <div className="nav__text1" onClick={loadSignIn}>
          Sign in
        </div>
        <div className="nav__text2" onClick={loadSignUp}>
          Sign up
        </div>
      </div>
    </div>
  );
}

export default Navbar;
