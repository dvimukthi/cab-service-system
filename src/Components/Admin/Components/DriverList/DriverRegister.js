import { Button } from "@mui/material";
import React from "react";
import AddDriver from "./AddDriver";
import "./DriverRegister.css";
import DriverRegisteredTables from "./DriverRegisteredTables";

function DriverRegister() {
  return (
    <div className="DriverRegisterMain__Container">
      <div className="DriverRegister__Container">
        <h2>Driver Registration</h2>
        <AddDriver />
      </div>
      <DriverRegisteredTables />
    </div>
  );
}

export default DriverRegister;
