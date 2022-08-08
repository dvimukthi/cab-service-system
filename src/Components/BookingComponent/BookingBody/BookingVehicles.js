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
    <div className="Bookingvehicles__container">
      <div className="Vehicle__item">
        <div className="Vehicles">
          <img
            src={BUDGETIMG}
            alt=""
            width="80"
            height="80"
            style={{
              background: "orange",
            }}
          />
        </div>
        <div className="Vehicle__Checkbox">
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
      </div>
      <div className="Vehicle__item">
        <div className="Vehicles">
          <img
            src={CARIMG}
            alt=""
            width="80"
            height="80"
            style={{ background: "orange" }}
          />
        </div>
        <div className="Vehicle__Checkbox">
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
      </div>
      <div className="Vehicle__item">
        <div className="Vehicles">
          <img
            src={VANIMG}
            alt=""
            width="80"
            height="80"
            style={{ background: "orange" }}
          />
        </div>
        <div className="Vehicle__Checkbox">
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
      </div>
    </div>
  );
}

export default BookingVehicles;
