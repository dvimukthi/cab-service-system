import React from "react";
import "./CustomerBody.css";
import UserProfile from "../../Assets/user-profile-img.png";
import CustomerBookings from "./CustomerBookings";

function CustomerBody() {
  return (
    <div className="CustomerBody__Container">
      {/* Add Customer Details */}
      <div className="ProfileDetails__Container">
        <h2>Your Profile</h2>
        <div className="Details__Container">
          {/* customer image part */}
          <img
            src={UserProfile}
            alt=""
            width="90"
            height="90"
            style={{
              marginRight: "10px",
              borderRadius: "10px",
              border: "3px solid  black",
              background: "white",
            }}
          />
          {/* customer details part */}
          <div className="Details">
            <h3>Name: </h3>
            <h3>Email: </h3>
          </div>
        </div>
      </div>
      {/* customer previous bookings table */}
      <CustomerBookings />
    </div>
  );
}

export default CustomerBody;
