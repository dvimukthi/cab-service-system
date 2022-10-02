import React, { useState } from "react";
import "./VehicleBranch.css";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

function VehicleBranch({ values, handleSelect }) {
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
         Branch: {values.branch}
        <ArrowDropDownRoundedIcon />
      </div>
      {isActive && (
        <div className="VehicleBranchDropdown__content">
          {options.map((option, index) => (
            <div
              onClick={(e) => {
                handleSelect('branch',option);
                setIsActive(false);
              }}
              className="VehicleBranchDropdown__item"
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

export default VehicleBranch;
