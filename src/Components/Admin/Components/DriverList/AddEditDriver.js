import React, { useEffect, useState } from "react";
import "./AddDriver.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DriverBranch from "./DriverBranch";
import axios from "axios";

const initialVals = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  numberPlate: "",
  branch: "",
};

function AddEditDriver({
  open,
  id,
  status,
  setStatus,
  setId,
  setOpen,
  setReload,
}) {
  const [driveId, setDriverId] = React.useState(null);
  const [currStatus, setCurrStatus] = React.useState("Add");
  const [values, setValues] = useState(initialVals);

  useEffect(() => {
    setCurrStatus(status);
    if (status != "edit" && status != "delete") setValues(initialVals);
  }, [status]);

  useEffect(() => {
    setDriverId(id);
    if (id) {
      loadDriver();
    }
  }, [id]);

  const handleClickOpen = () => {
    setStatus("Add New");
    setId(null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveDriver = () => {
    if (status == "edit") {
      updateDriver();
    } else if (status == "delete") {
      deleteDriver();
    } else {
      createDriver();
    }
  };

  const handleSelect = (name, val) => {
    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleChange = (e) => {
    var name = e.target.name;
    var val = e.target.value;
    setValues({
      ...values,
      [name]: val,
    });
  };
  const loadDriver = async () => {
    const resp = await axios.get(`http://localhost:3001/driver/${id}`);
    if (resp.status == 200) {
      const driver = await resp.data.map((d) => {
        return {
          firstName: d.firstName,
          lastName: d.lastName,
          email: d.email,
          phone: d.phoneNumber,
          password: d.password,
          numberPlate: d.vehicle.numberPlate,
          branch: d.branch,
        };
      });
      setValues(driver[0]);
    }
  };

  const createDriver = async () => {
    var data = {
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address,
      email: values.email,
      phoneNumber: values.phone,
      status: true,
      branch: values.branch,
      numberPlate: values.numberPlate,
      password: values.password,
    };
    const response = await axios.post("http://localhost:3001/driver", data);
    if (response.status == 201) {
      alert("Driver saved successfully !");
    } else {
      alert("Error saving driver !");
    }
    handleClose();
    setReload(true);
  };

  const updateDriver = async () => {
    var data = {
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address,
      email: values.email,
      phoneNumber: values.phone,
      status: true,
      branch: values.branch,
      numberPlate: values.numberPlate,
      password: values.password,
    };
    const response = await axios.put(
      `http://localhost:3001/driver/${id}`,
      data
    );
    if (response.status == 200) {
      alert("Driver updated successfully !");
    } else {
      alert("Error saving driver !");
    }
    handleClose();
    setReload(true);
  };

  const deleteDriver = async () => {
    const response = await axios.delete(`http://localhost:3001/driver/${id}`);
    if (response.status == 200) {
      alert("Driver deleted successfully !");
    } else {
      alert("Error saving driver !");
    }
    handleClose();
    setReload(true);
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
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                placeholder="Enter Driver First Name"
                style={{
                  marginTop: "5px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                placeholder="Enter Driver Last Name"
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
                name="email"
                value={values.email}
                onChange={handleChange}
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
                name="phone"
                value={values.phone}
                onChange={handleChange}
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
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Enter Password"
                style={{
                  marginTop: "5px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />

              {/* <label>Select Driver's Vehicle Type</label>
              {/* dropdown vehicle type dropdown */}
              {/* <DriverVehicleType
                values={values} 
                handleSelect={handleSelect}
              /> */}

              {/* <label>Vehicle Name</label>
              <input
                type="text"
                name="vehicleName"
                value={values.vehicleName}
                onChange={handleChange}
                placeholder="Enter Vehicle Name"
                style={{
                  marginTop: "5px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              /> */}

              <label>Vehicle NumberPlate</label>
              <input
                type="text"
                name="numberPlate"
                value={values.numberPlate}
                onChange={handleChange}
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
              <DriverBranch values={values} handleSelect={handleSelect} />
            </div>

            <div className="DriverBtn" onClick={saveDriver}>
              {currStatus}
            </div>
          </div>
        </form>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default AddEditDriver;
