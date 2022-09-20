import React from "react";
import "./PlaceBooking.css";


function PlaceBooking({placeBooking}) {
  function confirmTrip(e) {
    placeBooking();
  }

  return <div className="PlaceBooking__btn" onClick={confirmTrip}>Confirm Booking</div>;
}

export default PlaceBooking;
