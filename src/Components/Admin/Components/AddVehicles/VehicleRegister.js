import React, { useState } from "react";
import "./VehicleRegister.css";

import AddEditVehicle from "./AddEditVehicle";
import VehicleRegisteredTables from "./VehicleRegisteredTables";

function VehicleRegister() {
  const [status, setStatus] = useState(false);
  const [id, setId] = useState(null);
  const [open, setOpen] = useState(false);
  const [reload, setReload] = useState(true);
  return (
    <div className="VehicleRegisterMain__Container">
      <div className="VehicleRegister__Container">
        <h2>Vehicle Registration</h2>
        <AddEditVehicle 
          status = {status}
          id={id}
          open={open}
          setStatus={setStatus}
          setId={setId}
          setOpen={setOpen}
          setReload={setReload}
        />
      </div>
      <VehicleRegisteredTables 
        setStatus={setStatus}
        setId={setId}
        setOpen={setOpen}
        reload={reload}
        setReload={setReload}
      />
    </div>
  );
}

export default VehicleRegister;
