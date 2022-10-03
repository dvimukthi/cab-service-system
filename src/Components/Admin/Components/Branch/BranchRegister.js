import React, { useState } from "react";
import AddEditBranch from "./AddEditBranch";
import "./BranchRegister.css";
import BranchRegisteredTables from "./BranchRegisteredTables";

function BranchRegister() {
  const [status, setStatus] = useState(false);
  const [id, setId] = useState(null);
  const [open, setOpen] = useState(false);
  const [reload, setReload] = useState(true);

  return (
    <div className="BranchRegisterMain__Container">
      <div className="BranchRegister__Container">
        <h2>Branch Registration</h2>
        <AddEditBranch 
          status = {status}
          id={id}
          open={open}
          setStatus={setStatus}
          setId={setId}
          setOpen={setOpen}
          setReload={setReload}
        />
      </div>
      <BranchRegisteredTables 
        setStatus={setStatus}
        setId={setId}
        setOpen={setOpen}
        reload={reload}
        setReload={setReload}
      />
    </div>
  );
}

export default BranchRegister;
