import React, { useState } from "react";
import "./DriverBranch.css";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

function DriverBranch({ values, handleSelect }) {
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
    <div className="DriverBranchDropdown__container">
      <div
        className="DriverBranchDropdown__btn"
        onClick={(e) => setIsActive(!isActive)}
      >
        Type: {values.branch}
        <ArrowDropDownRoundedIcon />
      </div>
      {isActive && (
        <div className="DriverBranchDropdown__content">
          {options.map((option, index) => (
            <div
              onClick={(e) => {
                handleSelect('branch',option);
                setIsActive(false);
              }}
              className="DriverBranchDropdown__item"
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

export default DriverBranch;
