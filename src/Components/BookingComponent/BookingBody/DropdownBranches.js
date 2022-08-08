import React, { useState } from "react";
import "./DropdownBranches.css";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

function DropdownBranches() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown__container">
      <div className="dropdown__btn">
        Branches
        <ArrowDropDownRoundedIcon />
      </div>
      <div className="dropdown__content">
        <div className="dropdown__item">Galle</div>
        <div className="dropdown__item">Kandy</div>
        <div className="dropdown__item">Nugegoda</div>
        <div className="dropdown__item">Gampaha</div>
        <div className="dropdown__item">Kurunegala</div>
        <div className="dropdown__item">Jaffna</div>
      </div>
    </div>
  );
}

export default DropdownBranches;
