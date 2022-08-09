import React from "react";
import "../AboutUsBody/AboutUsBody.css";
import LOGO from "../../../Assets/GoCheeta logo.png";

function AboutUsBody() {
  return (
    <div className="AboutUs__Container">
      <div className="AboutUs__partOne">
        <div className="PartOne">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="AboutUs__partTwo">
        <div className="PartTwo">
          <img
            src={LOGO}
            alt=""
            width="400"
            height="400"
            style={
              {
                // marginLeft: "7px",
              }
            }
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUsBody;
