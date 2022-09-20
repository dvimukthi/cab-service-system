import React from "react";
import "./AdminBody.css";
import AdminMain from "./AdminMain";
import AdminSidebar from "./AdminSidebar";

// import Box from "@mui/material/Box";

import DriverList from "./Components/DriverList";
import AddVehicles from "./Components/AddVehicles";
import AddVehicleCategories from "./Components/AddVehicleCategories";
import Branch from "./Components/Branch";
import { Box } from "@mui/material";

function AdminBody(props) {
  const { window, widget } = props;
  return (
    <div className="AdminBody__Container">
      <AdminSidebar />
      <AdminMain widget={widget}/>
    </div>
  );
}

export default AdminBody;
