import React from "react";
import "./BookingVehicles.css";
import { orange } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox bookingVehicles" } };

function BookingVehicles() {
  return (
    <div>
      <Checkbox
        {...label}
        sx={{
          color: orange[800],
          "&.Mui-checked": {
            color: orange[600],
          },
        }}
      />
      <Checkbox
        {...label}
        sx={{
          color: orange[800],
          "&.Mui-checked": {
            color: orange[600],
          },
        }}
      />
      <Checkbox
        {...label}
        sx={{
          color: orange[800],
          "&.Mui-checked": {
            color: orange[600],
          },
        }}
      />
    </div>
  );
}

export default BookingVehicles;
