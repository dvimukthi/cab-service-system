import React from "react";
import { useNavigate } from "react-router";
import "./TripDetailsPage.css";

function TripDetailsPage() {
  const navigate = useNavigate();

  const loadHome = () => {
    navigate("/");
  };

  return (
    <div className="TripDetailsPage__Container">
      <h1>Thanks For Ride With GoCheeta</h1>
      <div className="TripDetailsPage__Content">
        <h2>Your Trip Details</h2>
        <br />
        <p>
          <h2>PickUp Location</h2>
          <h3>Street Address : </h3>
          <h3>City : </h3>
          <br />
          <h2>Drop Location</h2>
          <h3>Street Address : </h3>
          <h3>City : </h3>
          <br />
          <h2>Vehicle Details</h2>
          <h3>Driver Name : </h3>
          <h3>Vehicle Type : </h3>
          <h3>Vehicle Name : </h3>
          <h3>Vehicle Number : </h3>
          <br />
          <h3>Branch : </h3>
          <h3>Total Distance : </h3>
          <h3>Price : </h3>
        </p>
      </div>
      <div className="TripDetailsPage__btn" onClick={loadHome}>
        Close
      </div>
    </div>
  );
}

export default TripDetailsPage;
