import React from "react";
import { useNavigate } from "react-router";
import "./PlaceBooking.css";

function PlaceBooking() {
  const navigate = useNavigate();

  const loadAvailableVehicles = () => {
    navigate("/availablevehicles");
  };

  return (
    <div className="PlaceBooking__btn" onClick={loadAvailableVehicles}>
      Confirm Booking
    </div>
  );
}

export default PlaceBooking;
