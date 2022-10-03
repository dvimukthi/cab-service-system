import React, { useEffect, useState } from "react";
import "./DriverDetails.css";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

import axios from "axios";
import { useNavigate } from "react-router";

function DriverDetails({ userId }) {
  // navigate to sign in page
  const navigate = useNavigate();
  function logOut() {
    navigate("/signin");
  }

  const [driver, setDriver] = useState({});
  const [reload, setReload] = useState(true);

  useEffect(() => {
    if (reload) getDriverDetail();
  }, [reload]);

  async function getDriverDetail() {
    var response = await axios.get(`http://localhost:3001/driver/${userId}`);
    if (response.status == 200) {
      setDriver(response.data);
    }
  }
  return (
    <div className="DriverProfile__Container">
      {/* driver log out button */}
      <div className="Driver__LogOutBtn" onClick={logOut}>
        <ExitToAppRoundedIcon />
        Log Out
      </div>
      {/* driver details */}
      <h1>Driver Profile</h1>
      <p>
        <h2>
          Driver Name: {driver.firstName} {driver.lastName}
        </h2>
        <h2>Driver Email: {driver.email}</h2>
        <h2>Branch: {driver.branch}</h2>
      </p>
    </div>
  );
}

export default DriverDetails;
