import React, { useState } from "react";
import "./DropdownBranches.css";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

function DropdownBranches({ selected, setSelected }) {
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
    <div className="dropdown__container">
      <div className="dropdown__btn" onClick={(e) => setIsActive(!isActive)}>
        Branch: {selected}
        <ArrowDropDownRoundedIcon />
      </div>
      {isActive && (
        <div className="dropdown__content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown__item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownBranches;
