import { Box } from "@mui/material";
import React from "react";
import Driver from "../Driver";
import "./AdminMain.css";
import AddVehicleCategories from "./Components/AddVehicleCategories";
import AddVehicles from "./Components/AddVehicles";
import Branch from "./Components/Branch";
import DriverList from "./Components/DriverList";

function AdminMain({widget}) {
  return (
    <div className="AdminMain__Container">
      <div className="AdminMain">

      <Box>
        { widget === "driver" ? 
          <Driver />
          :widget === "driverlist" ? 
          <DriverList />
         : widget === "addvehicles" ? 
          <AddVehicles />
         : widget === "addvehiclecategories" ? 
          <AddVehicleCategories />
         : widget === "branches" ? 
          <Branch />
         : 
         null
        }
      </Box>

      </div>
    </div>
  );
}

export default AdminMain;
