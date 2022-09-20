import React from "react";
import DriverDetails from "./DriverDetails";
import DriverTable from "./DriverTable";

function DriverBody({userId}) {
  return (
    <div>
      <DriverDetails userId={userId}/>
      <DriverTable userId={userId}/>
    </div>
  );
}

export default DriverBody;
