import React from "react";
import "../BodyPartThree/BodyPartThree.css";
import IMG1 from "../../../Assets/BodyPartThree Icons/accept the request.png";
import IMG2 from "../../../Assets/BodyPartThree Icons/pickup client.png";
import IMG3 from "../../../Assets/BodyPartThree Icons/drive to destination.png";

function BodyPartThree() {
  return (
    <div className="bodypartthree__container">
      <h2>How GoCheetah Works</h2>
      <div className="bodypartthreeIcon__container">
        <div className="bodypartthreeIcon">
          <p>1. Accept the request</p>
          <img
            src={IMG1}
            alt=""
            width="350"
            height="350"
            style={{
              marginTop: "7px",
              borderRadius: "175px",
            }}
          />
        </div>
        <div className="bodypartthreeIcon">
          <p>2. Pickup the client</p>
          <img
            src={IMG2}
            alt=""
            width="350"
            height="350"
            style={{
              paddingTop: "5px",
              borderRadius: "175px",
            }}
          />
        </div>
        <div className="bodypartthreeIcon">
          <p>3. Drive to destination</p>
          <img
            src={IMG3}
            alt=""
            width="350"
            height="350"
            style={{
              marginTop: "7px",
              borderRadius: "175px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default BodyPartThree;
