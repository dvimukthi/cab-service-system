import React, { useState } from "react";
import "./DriverVehicleType.css";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

function DriverVehicleType({ selected, setSelected }) {
  // usestate
  const [isActive, setIsActive] = useState(false);
  const options = ["Mini", "Car", "Van"];

  return (
    // dropdown
    <div className="DriverVehicleDropdown__container">
      <div
        className="DriverVehicleDropdown__btn"
        onClick={(e) => setIsActive(!isActive)}
      >
        Type: {selected}
        <ArrowDropDownRoundedIcon />
      </div>
      {isActive && (
        <div className="DriverVehicleDropdown__content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="DriverVehicleDropdown__item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DriverVehicleType;
