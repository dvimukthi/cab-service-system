import React, { useState } from "react";
import "../BookingBody/BookingBody.css";
import BookingVehicles from "./BookingVehicles";
import DropdownBranches from "./DropdownBranches";
import PlaceBooking from "./PlaceBooking";
import BOOKINGPAGEIMG from "../../../Assets/BookingImg/bookingpage.png";

function BookingBody() {
  const [selected, setSelected] = useState("");

  return (
    <div className="bookingBody__container">
      <div className="boookingparttwo__container">
        <form>
          <h1>Plan Your Trip</h1>
          <div className="Trip__container">
            <div className="BookingField">
              <label>Pickup Location</label>
              <input
                type="text"
                name="PickupLocation"
                placeholder="Your Current Location"
                style={{
                  marginTop: "10px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                style={{
                  marginTop: "10px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />
            </div>
            <label>Select your nearest branch</label>
            <DropdownBranches selected={selected} setSelected={setSelected} />
            <div className="BookingField">
              <label>Drop Location</label>
              <input
                type="text"
                name="StreetAddress"
                placeholder="Street Address"
                style={{
                  marginTop: "10px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                style={{
                  marginTop: "10px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />
              <label
                style={{
                  marginTop: "15px",
                }}
              >
                Total Trip Distance
              </label>
              <input
                type="number"
                name="distance"
                placeholder="Total Kilometers"
                style={{
                  marginTop: "10px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />
            </div>
          </div>
        </form>
        <BookingVehicles />
        <PlaceBooking />
      </div>
      <img
        src={BOOKINGPAGEIMG}
        alt=""
        width="300"
        height="300"
        style={{
          marginTop: "80px",
          marginBottom: "5px",
          marginRight: "50%",
          borderRadius: "300px",
        }}
      />
    </div>
  );
}

export default BookingBody;
