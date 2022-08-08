import React from "react";
import "./BookingVehicles.css";
import { orange } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import BUDGETIMG from "../../../Assets/BookingImg/budget.png";
import CARIMG from "../../../Assets/BookingImg/car.png";
import VANIMG from "../../../Assets/BookingImg/van.png";

const label = { inputProps: { "aria-label": "Checkbox bookingVehicles" } };

function BookingVehicles() {
  return (
    <div>
      <img src={BUDGETIMG} alt="" width="60" height="60" style={{}} />

      <Checkbox
        {...label}
        sx={{
          color: orange[800],
          "&.Mui-checked": {
            color: orange[600],
          },
        }}
      />

      <img src={CARIMG} alt="" width="60" height="60" style={{}} />
      <Checkbox
        {...label}
        sx={{
          color: orange[800],
          "&.Mui-checked": {
            color: orange[600],
          },
        }}
      />

      <img src={VANIMG} alt="" width="60" height="60" style={{}} />
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
