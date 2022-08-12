import React from "react";
import "./DriverDetails.css";

function DriverDetails() {
  return (
    <div className="DriverProfile__Container">
      {/* driver details */}
      <h1>Driver Profile</h1>
      <p>
        <h2>Driver Name: </h2>
        <h2>Driver Email: </h2>
        <h2>Branch: </h2>
        <h2>Vehicle Type: </h2>
        <h2>Vehicle Name: </h2>
        <h2>Vehicle Number: </h2>
      </p>
    </div>
  );
}

export default DriverDetails;
