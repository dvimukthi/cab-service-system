import React, { useEffect, useState } from "react";
import "./AddVehicle.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import VehicleBranch from "./VehicleBranch";
import VehiclesType from "./VehiclesType";
import axios from "axios";

const initialVals = {
  id:null,
  name:'',
  type:'',
  seats:0,
  price:0.00,
  numberPlate:'',
  branch:'',
};

function AddEditVehicle({open, id, status,setStatus,setId, setOpen, setReload}) {
  const [selected, setSelected] = React.useState("");

  const [vehicleId, setVehicleId] = React.useState(null);
  const [currStatus, setCurrStatus] = React.useState("Add");
  const [values, setValues] = useState(initialVals);


  useEffect(()=>{
    setCurrStatus(status);
    if(status != "edit" && status != "delete" )
      setValues(initialVals);
  },[status]);

  useEffect(()=>{
    setVehicleId(id);
    if(id){
      loadVehicle();
    }
  },[id]);

  const loadVehicle = async () => {
    const resp = await axios.get(`http://localhost:3001/vehicle/${id}`);
    if(resp.status == 200) {
      const vehicle = await resp.data.map((v)=>{
          return {
            id: v.id,
            name: v.name,
            type: v.type,
            seats: v.seats,
            price: v.price,
            numberPlate: v.numberPlate,
            branch: v.branch,
          }
      });
      console.log(vehicle[0])
      setValues(vehicle[0]);
    } 
  }

  const createVehicle = async () => {
    var data = {
      name: values.name,
      type: values.type,
      seats: values.seats,
      price: values.price,
      numberPlate: values.numberPlate,
      branch: values.branch,
    }
    const response = await axios.post("http://localhost:3001/vehicle",data);
    if(response.status == 201) {
      alert("Vehicle saved successfully !");
    } else {
      alert("Error saving vehicle !");
    }
    handleClose();
    setReload(true);
  }


  const updateVehicle = async () => {
    var data = {
      name: values.name,
      type: values.type,
      seats: values.seats,
      price: values.price,
      numberPlate: values.numberPlate,
      branch: values.branch,
    }
    const response = await axios.put(`http://localhost:3001/vehicle/${id}`,data);
    if(response.status == 200) {
      alert("Vehicle updated successfully !");
    } else {
      alert("Error saving vehicle !");
    }
    handleClose();
    setReload(true);
  }


  const deleteVehicle = async () => {
    const response = await axios.delete(`http://localhost:3001/vehicle/${id}`);
    if(response.status == 200) {
      alert("Vehicle deleted successfully !");
    } else {
      alert("Error saving vehicle !");
    }
    handleClose();
    setReload(true);
  }

  const saveVehicle = () =>{
    if(status == "edit") {
      updateVehicle();
    }else if (status == "delete"){
      deleteVehicle();
    } else {
      createVehicle();
    }
  }


  const handleCheck = (e) =>{
    var name = e.target.name;
    var val = e.target.checked;
    setValues({
      ...values,
      [name]:val
   });
  }

  const handleSelect = (name, val) =>{
    setValues({
      ...values,
      [name]:val
   });
  }

  const handleChange =(e) => {
    var name = e.target.name;
    var val = e.target.value;
    setValues({
      ...values,
      [name]:val
   });
  }

  const handleClickOpen = () => {
    setStatus("Add New");
    setId(null);
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
              <VehiclesType
                values={values} 
                handleSelect={handleSelect} 
                />

              <label>Vehicle Name</label>
              <input
                type="text"
                placeholder="Enter Vehicle Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                style={{
                  marginTop: "5px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />

            <label>Number of seats</label>
              <input
                type="number"
                name="seats"
                value={values.seats}
                min="2" 
                max="2"
                onChange={handleChange}
                style={{
                  width: "50px",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />

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

              <label>Price For 1Km</label>
              <input
                type="number"
                name="price"
                value={values.price}
                min="10" 
                max="10"
                onChange={handleChange}
                style={{
                  width: "100px",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />

              <label>Select Vehicle Branch</label>
              {/* dropdown driver branch dropdown */}
              <VehicleBranch 
                values={values} 
                handleSelect={handleSelect}  />
            </div>
            <div className="VehicleBtn"onClick={saveVehicle}>{currStatus}</div>
          </div>
        </form>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default AddEditVehicle;
