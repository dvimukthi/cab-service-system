import React, { useState } from "react";
import "../BookingBody/BookingBody.css";
import DropdownBranches from "./DropdownBranches";

function BookingBody() {
  const [selected, setSelected] = useState("");

  return (
    <div className="bookingBody__container">
      <h1>Plan Your Trip</h1>
      <form>
        <div className="Trip__container">
          <div className="BookingField">
            <label>Pickup Location</label>
            <input
              type="text"
              name="PickupLocation"
              placeholder="Pickup Location"
              style={{
                marginTop: "10px",
                marginRight: "85%",
                height: "25px",
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
                marginRight: "85%",
                height: "25px",
                borderRadius: "4px",
              }}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              style={{
                marginTop: "10px",
                marginRight: "85%",
                height: "25px",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookingBody;
