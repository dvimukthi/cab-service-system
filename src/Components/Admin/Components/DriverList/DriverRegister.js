import React, { useState } from "react";
import AddEditDriver from "./AddEditDriver";
import "./DriverRegister.css";
import DriverRegisteredTables from "./DriverRegisteredTables";

function DriverRegister() {
  const [status, setStatus] = useState(false);
  const [id, setId] = useState(null);
  const [open, setOpen] = useState(false);
  const [reload, setReload] = useState(true);

  return (
    <div className="DriverRegisterMain__Container">
      <div className="DriverRegister__Container">
        <h2>Driver Registration</h2>
        <AddEditDriver 
          status = {status}
          id={id}
          open={open}
          setStatus={setStatus}
          setId={setId}
          setOpen={setOpen}
          setReload={setReload}
        />
      </div>
      <DriverRegisteredTables 
        setStatus={setStatus}
        setId={setId}
        setOpen={setOpen}
        reload={reload}
        setReload={setReload}
      />
    </div>
  );
}

export default DriverRegister;
