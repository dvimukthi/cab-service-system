import React from "react";
import "./DropdownBranches.css";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

function DropdownBranches() {
  return (
    <div className="dropdown__container">
      <div className="dopdown__btn">
        Branches
        <ArrowDropDownRoundedIcon />
      </div>
      <div className="dopdown__content">
        <div className="dopdown__item">Galle</div>
        <div className="dopdown__item">Kandy</div>
        <div className="dopdown__item">Nugegoda</div>
        <div className="dopdown__item">Gampaha</div>
        <div className="dopdown__item">Kurunegala</div>
        <div className="dopdown__item">Jaffna</div>
      </div>
    </div>
  );
}

export default DropdownBranches;
