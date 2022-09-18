import React from "react";
import { useNavigate } from "react-router";
import "./DriverTripConfirm.css";

function DriverTripConfirm() {
  const navigate = useNavigate();

  const loadArrivedLocation = () => {
    navigate("/arrivedlocation");
  };

  return (
    <div className="DriverTripConfirm__Container">
      <h1>Order Details Page</h1>
      <div className="DriverTripConfirm__Content">
        <p>
          <h2>Customer Name :</h2>
          <br />
          <h2>PickUp Location</h2>
          <h3>Street Address : </h3>
          <h3>City : </h3>
          <br />
          <h2>Drop Location</h2>
          <h3>Street Address : </h3>
          <h3>City : </h3>
          <br />
          <h2>Total Distance : </h2>
          <h2>Price : </h2>
        </p>
      </div>
      <div className="DriverTripConfirm__btn" onClick={loadArrivedLocation}>
        Confirm Order
      </div>
    </div>
  );
}

export default DriverTripConfirm;
