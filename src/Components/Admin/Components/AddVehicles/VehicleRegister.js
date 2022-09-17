import React from "react";
import "./VehicleRegister.css";

import AddVehicle from "./AddVehicle";
import VehicleRegisteredTables from "./VehicleRegisteredTables";

function VehicleRegister() {
  return (
    <div className="VehicleRegisterMain__Container">
      <div className="VehicleRegister__Container">
        <h2>Vehicle Registration</h2>
        <AddVehicle />
      </div>
      <VehicleRegisteredTables />
    </div>
  );
}

export default VehicleRegister;
