import React from "react";
import "../Navbar/Navbar.css";
import LOGO from "../../../Assets/GoCheeta logo.png";
import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();

  // link signin page
  const loadSignIn = () => {
    navigate("/signin");
  };

  // link signup page
  const loadSignUp = () => {
    navigate("/signup");
  };

  // link home page
  const loadHome = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="logo__img">
        {/* logo */}
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
      {/* sign in & signup  */}
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
