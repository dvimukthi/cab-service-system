import React, { useState } from "react";
import "./BookingVehicles.css";
import { orange } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import BUDGETIMG from "../../../Assets/BookingImg/budget.png";
import CARIMG from "../../../Assets/BookingImg/car.png";
import VANIMG from "../../../Assets/BookingImg/van.png";

const label = { inputProps: { "aria-label": "Checkbox bookingVehicles" } };

function BookingVehicles({handleChange}) {
  const [checked, setChecked] = useState([]);

  return (
    <div className="Bookingvehicles__container">
      <div className="Vehicle__item">
        {/* vehicles image */}
        <div className="Vehicles">
          <img src={BUDGETIMG} alt="" width="80" height="80" style={{}} />
        </div>
        {/* vehicle details */}
        <div className="Vehicle__Checkbox">
          <h3>Mini</h3>
          <p>Max Passengers 3</p>
          {/* checkbox */}
          <Checkbox
            onChange={(e)=>{handleChange(e, "mini", "mini")}}
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
        {/* vehicles image */}
        <div className="Vehicles">
          <img src={CARIMG} alt="" width="80" height="80" style={{}} />
        </div>
        {/* vehicle details */}
        <div className="Vehicle__Checkbox">
          <h3>Car</h3>
          <p>Max Passengers 4</p>
          {/* checkbox */}
          <Checkbox
            onChange={(e)=>{handleChange(e, "car", "car")}}
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
        {/* vehicles image */}
        <div className="Vehicles">
          <img src={VANIMG} alt="" width="80" height="80" style={{}} />
        </div>
        {/* vehicle details */}
        <div className="Vehicle__Checkbox">
          <h3>Van</h3>
          <p>Max Passengers 10</p>
          {/* checkbox */}
          <Checkbox
            onChange={(e)=>{handleChange(e, "van", "van")}}
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
