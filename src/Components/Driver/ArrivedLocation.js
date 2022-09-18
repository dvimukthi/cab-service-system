import React from "react";
import "./ArrivedLocation.css";
import ArrivedLocationIMG from "../../Assets/locationimage.png";
import { useNavigate } from "react-router";

function ArrivedLocation() {
  const navigate = useNavigate();

  const loadDriver = () => {
    navigate("/driver");
  };

  return (
    <div className="ArrivedLocation__Container">
      <div className="ArrivedLocation__Img">
        <img
          src={ArrivedLocationIMG}
          alt=""
          width="450"
          height="450"
          style={{
            marginTop: "40px",
            borderRadius: "10px",
          }}
        />
      </div>
      <h2>You Arrived To The Location</h2>
      <div className="ArrivedLocation__btn" onClick={loadDriver}>
        End Trip
      </div>
    </div>
  );
}

export default ArrivedLocation;
