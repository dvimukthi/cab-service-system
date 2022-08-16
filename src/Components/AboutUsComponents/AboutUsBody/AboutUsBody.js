import React from "react";
import "../AboutUsBody/AboutUsBody.css";
import LOGO from "../../../Assets/GoCheeta logo.png";

function AboutUsBody() {
  return (
    <div className="AboutUs__Container">
      <div className="AboutUs__partOne">
        {/* about text section */}
        <div className="PartOne">
          <h2>About Us</h2>
          <p>
            From humble beginnings to Sri Lanka’s most trusted business-class
            car service in just over 10 years, GoCheeta have grown with and for
            the times. And yet, so little has changed about us. We still believe
            that minicabs can be so much more than just a means to an end our
            clients are right to expect extraordinary standards, and by allying
            the latest technologies with traditional customer service values, we
            can not only disrupt the industry, we can revolutionise it. Today,
            our cars are responsible for getting over 1 million people where
            they need to go each year in sri lanka alone. And with our business
            expanding every day across the sri lanka. we will continue to
            deliver that same executive service consistently, no matter where we
            are.
          </p>
        </div>
      </div>
      <div className="AboutUs__partTwo">
        {/* logo section */}
        <div className="PartTwo">
          <img
            src={LOGO}
            alt=""
            width="500"
            height="500"
            style={{
              marginRight: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUsBody;
