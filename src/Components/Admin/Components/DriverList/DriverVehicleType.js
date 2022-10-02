import React, { useState } from "react";
import "./DriverVehicleType.css";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

function DriverVehicleType({ values, handleSelect }) {
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
        Type: {values.vehicleType}
        <ArrowDropDownRoundedIcon />
      </div>
      {isActive && (
        <div className="DriverVehicleDropdown__content">
          {options.map((option, index) => (
            <div
              onClick={(e) => {
                handleSelect('vehicleType', option);
                setIsActive(false);
              }}
              className="DriverVehicleDropdown__item"
              key={index}
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
