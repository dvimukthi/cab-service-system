import React from "react";
import "../BodyPartOne/BodyPartOne.css";
import RIDEIMG from "../../../Assets/need a ride.jpg";
import PROMOTIONIMG from "../../../Assets/GoCheeta poster.png";
import { useNavigate } from "react-router";

function BodyPartOne() {
  const navigate = useNavigate();
  const loadBooking = () => {
    navigate("/book");
  };
  return (
    <div className="bodypartone__container">
      {/* promotion image section */}
      <div className="bodypartone__part1">
        <img
          src={PROMOTIONIMG}
          alt=""
          width="550"
          height="550"
          style={{
            borderRadius: "10px",
          }}
        />
      </div>
      <div className="bodypartone__part2">
        {/* book Now section */}
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
          "GoCheeta".
        </p>
        {/* book now button */}
        <div className="NeedRide__btn" onClick={loadBooking}>
          Book Now
        </div>
      </div>
    </div>
  );
}

export default BodyPartOne;
