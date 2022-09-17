import React, { useState } from "react";
import "./AddVehicle.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import VehicleBranch from "./VehicleBranch";
import VehiclesType from "./VehiclesType";

function AddVehicle() {
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
        Add Vehicle
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="VehicleRegister__container">
          Vehicle Registration
        </DialogTitle>

        <form className="VehicleForm__Container">
          <div className="VehicleRegister__Form">
            <div className="VehicleRegisterField">
              <label>Select Vehicle Type</label>
              {/* dropdown vehicle type dropdown */}
              <VehiclesType selected={selected} setSelected={setSelected} />

              <label>Vehicle Name</label>
              <input
                type="text"
                name="VehicleName"
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
                name="VehicleNumberPlate"
                placeholder="Enter Vehicle NumberPlate"
                style={{
                  marginTop: "5px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />

              <label>Price For 1Km</label>
              <input
                type="text"
                name="VehiclePrice"
                placeholder="Enter The Price"
                style={{
                  marginTop: "5px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />

              <label>Select Vehicle Branch</label>
              {/* dropdown driver branch dropdown */}
              <VehicleBranch selected={selected} setSelected={setSelected} />
            </div>

            <div className="VehicleBtn">Add Vehicle</div>
          </div>
        </form>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default AddVehicle;
