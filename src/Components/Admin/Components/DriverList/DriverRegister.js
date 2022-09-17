import { Button } from "@mui/material";
import React from "react";
import AddDriver from "./AddDriver";
import "./DriverRegister.css";

function DriverRegister() {
  return (
    <div className="DriverRegister__Container">
      <h2>Driver Registration</h2>
      <AddDriver />
    </div>
  );
}

export default DriverRegister;
