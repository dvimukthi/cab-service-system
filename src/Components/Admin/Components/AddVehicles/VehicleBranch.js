import React, { useState } from "react";
import "./VehicleBranch.css";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

function VehicleBranch({ selected, setSelected }) {
  // usestate
  const [isActive, setIsActive] = useState(false);
  const options = [
    "Galle",
    "Kandy",
    "Nugegoda",
    "Gampaha",
    "Kurunegala",
    "Jaffna",
  ];

  return (
    // dropdown
    <div className="VehicleBranchDropdown__container">
      <div
        className="VehicleBranchDropdown__btn"
        onClick={(e) => setIsActive(!isActive)}
      >
        Type: {selected}
        <ArrowDropDownRoundedIcon />
      </div>
      {isActive && (
        <div className="VehicleBranchDropdown__content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="VehicleBranchDropdown__item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default VehicleBranch;
