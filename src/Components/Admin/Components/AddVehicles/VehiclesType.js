import React, { useState } from "react";
import "./VehiclesType.css";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

function VehiclesType({ values, handleSelect }) {
  // usestate
  const [isActive, setIsActive] = useState(false);
  const options = ["Mini", "Car", "Van"];

  return (
    // dropdown
    <div className="VehiclesDropdown__container">
      <div
        className="VehiclesDropdown__btn"
        onClick={(e) => setIsActive(!isActive)}
      >
        Type:  {values.type}
        <ArrowDropDownRoundedIcon />
      </div>
      {isActive && (
        <div className="VehiclesDropdown__content">
          {options.map((option, index) => (
            <div
              onClick={(e) => {
                handleSelect('type',option);
                setIsActive(false);
              }}
              className="VehiclesDropdown__item"
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

export default VehiclesType;
