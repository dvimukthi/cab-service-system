import React from "react";
import "./CustomerHeader.css";
import LOGO from "../../Assets/GoCheeta logo.png";
import UserProfile from "../../Assets/user-profile-img.png";
import { useNavigate } from "react-router";

function CustomerHeader() {
  const navigate = useNavigate();

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
      <div className="profile__logo">
        <img
          src={UserProfile}
          alt=""
          //   onClick={}
          width="50"
          height="50"
          style={{
            marginRight: "10px",
            borderRadius: "50%",
            border: "3px solid  black",
            background: "white",
          }}
        />
      </div>
    </div>
  );
}

export default CustomerHeader;
