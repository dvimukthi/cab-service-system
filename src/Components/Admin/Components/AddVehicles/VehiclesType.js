import React, { useState } from "react";
import "./VehiclesType.css";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

function VehiclesType({ selected, setSelected }) {
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
        Type: {selected}
        <ArrowDropDownRoundedIcon />
      </div>
      {isActive && (
        <div className="VehiclesDropdown__content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="VehiclesDropdown__item"
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
