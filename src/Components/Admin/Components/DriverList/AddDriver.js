import React, { useState } from "react";
import "./AddDriver.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DriverVehicleType from "./DriverVehicleType";
import DriverBranch from "./DriverBranch";

function AddDriver() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Driver
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="DriverRegister__container">
          Driver Registration
        </DialogTitle>

        <form className="DriverForm__Container">
          <div className="Register__Form">
            <div className="DriverRegisterField">
              <label>Name</label>
              <input
                type="text"
                name="DriverName"
                placeholder="Enter Driver Name"
                style={{
                  marginTop: "5px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />

              <label>Email</label>
              <input
                type="text"
                name="DriverEmail"
                placeholder="Enter Driver Email"
                style={{
                  marginTop: "5px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />

              <label>Phone Number</label>
              <input
                type="text"
                name="DriverPhoneNumber"
                placeholder="Enter Driver Phone Number"
                style={{
                  marginTop: "5px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />
              <label>Password</label>
              <input
                type="text"
                name="DriverPassword"
                placeholder="Enter Password"
                style={{
                  marginTop: "5px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />

              <label>Select Driver's Vehicle Type</label>
              {/* dropdown vehicle type dropdown */}
              <DriverVehicleType
                selected={selected}
                setSelected={setSelected}
              />

              <label>Vehicle Name</label>
              <input
                type="text"
                name="DriverName"
                placeholder="Enter Vehicle Name"
                style={{
                  marginTop: "5px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />

              <label>Vehicle NumberPlate</label>
              <input
                type="text"
                name="DriverNumberPlate"
                placeholder="Enter Vehicle NumberPlate"
                style={{
                  marginTop: "5px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />
              <label>Select Driver's Branch</label>
              {/* dropdown driver branch dropdown */}
              <DriverBranch selected={selected} setSelected={setSelected} />
            </div>

            <div className="DriverBtn">Add Driver</div>
          </div>
        </form>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default AddDriver;
