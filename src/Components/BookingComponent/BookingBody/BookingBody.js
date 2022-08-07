import React from "react";
import "../BookingBody/BookingBody.css";

function BookingBody() {
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
            />
          </div>
          <div className="BookingField">
            <label>Drop Location</label>
            <input
              type="text"
              name="StreetAddress"
              placeholder="Street Address"
            />
            <input type="text" name="city" placeholder="City" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookingBody;
