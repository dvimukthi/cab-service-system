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
      <div className="bodypartone__part1">
        <div className="box">
          <figure>
            <img
              src={PROMOTIONIMG}
              alt=""
              width="729.2"
              height="560"
              style={{
                borderRadius: "10px",
              }}
            />
            <figcaption>
              <h1>GoCheeta Taxi Service</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="bodypartone__part2">
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
        <div className="NeedRide__btn" onClick={loadBooking}>
          Book Now
        </div>
      </div>
    </div>
  );
}

export default BodyPartOne;
