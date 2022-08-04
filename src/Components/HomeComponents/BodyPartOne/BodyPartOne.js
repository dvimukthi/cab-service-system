import React from "react";
import "../BodyPartOne/BodyPartOne.css";
import RIDEIMG from "../../../Assets/need a ride.jpg";

function BodyPartOne() {
  return (
    <div className="bodyone__container">
      <div className="bodyone__part1"></div>
      <div className="bodyone__part2">
        <img
          src={RIDEIMG}
          alt=""
          width="490"
          height="320"
          style={{
            alignSelf: "center",
            marginTop: "17px",
            borderRadius: "10px",
          }}
        />
        <h2>Need a Ride</h2>
        <p>
          You can trust on us to give you a safe and comfortable ride no matter
          where you need to travel by simply booking a taxi online with
          "GoCheetah".
        </p>
        <div className="NeedRide__btn">Book Now</div>
      </div>
    </div>
  );
}

export default BodyPartOne;
