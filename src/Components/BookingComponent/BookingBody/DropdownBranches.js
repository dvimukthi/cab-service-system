import React, { useEffect, useState } from "react";
import "./DropdownBranches.css";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import axios from "axios";

function DropdownBranches({ selected, setSelected, handleChange }) {
  // usestate
  const [isActive, setIsActive] = useState(false);
  const [options , setOptions] = useState([
    "Galle",
    "Kandy",
    "Nugegoda",
    "Gampaha",
    "Kurunegala",
    "Jaffna",
  ]);


  useEffect(()=>{
    loadBranched();
  },[])

  async function loadBranched () {
    var resp = await axios.get('http://localhost:3001/branch');
    if(resp.status == 200) {
      var branchList =await resp.data.map((br)=>{
        return (
          br.location
        );
      });

      console.log(branchList);
      setOptions(branchList);
    }
  }
  return (
    // dropdown
    <div className="dropdown__container">
      <div className="dropdown__btn" onClick={(e) => setIsActive(!isActive)}>
        Branch: {selected}
        <ArrowDropDownRoundedIcon />
      </div>
      {isActive && (
        <div className="dropdown__content">
          {options.map((option,index) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
                handleChange(e, 'branch', option);
              }}
              className="dropdown__item"
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

export default DropdownBranches;
