import React, { useState } from "react";
import "./AddCetegory.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

function AddCategory() {
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
        <DialogTitle className="AddVehicleCategory__container">
          Add Vehicle Category
        </DialogTitle>

        <form className="CategoryForm__Container">
          <div className="Category__Form">
            <div className="AddVehicleCategoryField">
              <label>Category Name</label>
              <input
                type="text"
                name="CategoryName"
                placeholder="Enter Category Name"
                style={{
                  marginTop: "5px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />

              <label>Price For 1km</label>
              <input
                type="text"
                name="VehicleCategoryPrice"
                placeholder="Enter The Price"
                style={{
                  marginTop: "5px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />
            </div>

            <div className="VehicleCategoryBtn">Add Category</div>
          </div>
        </form>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default AddCategory;
