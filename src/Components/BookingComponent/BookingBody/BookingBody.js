import React from "react";
import "../BookingBody/BookingBody.css";

function BookingBody() {
  return (
    <div className="bookingBody__container">
      <form>
        <h1>Plan Your Trip</h1>
        <div className="Trip__container">
          <div className="BookingField">
            <label>Pickup Location</label>
            <input type="text" name="Pickup Location" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookingBody;
