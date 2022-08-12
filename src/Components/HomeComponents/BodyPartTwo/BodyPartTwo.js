import React from "react";
import "../BodyPartTwo/BodyPartTwo.css";
import PERSONALCHAUFFEURS from "../../../Assets/BodyPartTwo Icons/proffesional-cheffuars.png";
import FLEXIBLEUSAGEPACKAGES from "../../../Assets/BodyPartTwo Icons/flexiblepcg.png";
import TRANSPARENTPRICING from "../../../Assets/BodyPartTwo Icons/transparentpricing.png";
import DIGITIZEDBOOKING from "../../../Assets/BodyPartTwo Icons/digitaizedbooking.png";
import IMPECCABLESERVICE from "../../../Assets/BodyPartTwo Icons/impicableservice.png";
import COMMITMENTTOSAFETY from "../../../Assets/BodyPartTwo Icons/saiftycommitment.png";

function BodyPartTwo() {
  return (
    <div className="bodyparttwo__container">
      {/* text */}
      <h2>Why Ride With Us</h2>
      <div className="bodyparttwoIcon__container">
        <div className="bodyparttwoIcon">
          {/* images and text */}
          <img
            src={PERSONALCHAUFFEURS}
            alt=""
            width="120"
            height="120"
            style={{
              marginTop: "7px",
              marginLeft: "30px",
              borderRadius: "50px",
              background: "orange",
            }}
          />
          <p>PERSONAL CHAUFFEURS</p>
        </div>
        <div className="bodyparttwoIcon">
          <img
            src={FLEXIBLEUSAGEPACKAGES}
            alt=""
            width="120"
            height="120"
            style={{
              marginTop: "7px",
              marginLeft: "40px",
              borderRadius: "50px",
              background: "orange",
            }}
          />
          <p>FLEXIBLE USAGE PACKAGES</p>
        </div>
        <div className="bodyparttwoIcon">
          <img
            src={TRANSPARENTPRICING}
            alt=""
            width="120"
            height="120"
            style={{
              marginTop: "7px",
              marginLeft: "25px",
              borderRadius: "50px",
              background: "orange",
            }}
          />
          <p>TRANSPARENT PRICING</p>
        </div>
        <div className="bodyparttwoIcon">
          <img
            src={DIGITIZEDBOOKING}
            alt=""
            width="120"
            height="120"
            style={{
              marginTop: "7px",
              marginLeft: "15px",
              borderRadius: "50px",
              background: "orange",
            }}
          />
          <p>DIGITIZED BOOKING</p>
        </div>
        <div className="bodyparttwoIcon">
          <img
            src={IMPECCABLESERVICE}
            alt=""
            width="120"
            height="120"
            style={{
              marginTop: "7px",
              marginLeft: "15px",
              borderRadius: "50px",
              background: "orange",
            }}
          />
          <p>IMPECCABLE SERVICE</p>
        </div>
        <div className="bodyparttwoIcon">
          <img
            src={COMMITMENTTOSAFETY}
            alt=""
            width="120"
            height="120"
            style={{
              marginTop: "7px",
              marginLeft: "35px",
              borderRadius: "50px",
              background: "orange",
            }}
          />
          <p>COMMITMENT TO SAFETY</p>
        </div>
      </div>
    </div>
  );
}

export default BodyPartTwo;
