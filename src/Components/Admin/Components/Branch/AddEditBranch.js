import React, { useEffect, useState } from "react";
import "./AddBranch.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

const initialVals = {
  location:'',
  address:'',
  email:'',
  phone:'',
};

function AddEditBranch({open, id, status,setStatus,setId, setOpen, setReload}) {
  const [branchId, setBranchId] = React.useState(null);
  const [currStatus, setCurrStatus] = React.useState("Add");
  const [values, setValues] = useState(initialVals);

  useEffect(()=>{
    setCurrStatus(status);
    if(status != "edit" && status != "delete" )
      setValues(initialVals);
  },[status]);

  useEffect(()=>{
    setBranchId(id);
    if(id){
      loadBranch();
    }
  },[id]);

  
  const handleClickOpen = () => {
    setStatus("Add New");
    setId(null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveBranch = () =>{
    if(status == "edit") {
      updateBranch();
    }else if (status == "delete"){
      deleteBranch();
    } else {
      createBranch();
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
  const loadBranch = async () => {
    const resp = await axios.get(`http://localhost:3001/branch/${id}`);
    if(resp.status == 200) {
      const Branch = await resp.data;
      console.log(Branch)
      setValues(Branch);
    } 
  }

  const createBranch = async () => {
    var data = {
      location:values.location,
      address:values.address,
      email:values.email,
      phone:values.phone,
    }
    const response = await axios.post("http://localhost:3001/branch",data);
    if(response.status == 201) {
      alert("Branch saved successfully !");
    } else {
      alert("Error saving Branch !");
    }
    handleClose();
    setReload(true);
  }

  const updateBranch = async () => {
    var data = {
      location:values.location,
      address:values.address,
      email:values.email,
      phone:values.phone,
    }
    const response = await axios.put(`http://localhost:3001/branch/${id}`,data);
    if(response.status == 200) {
      alert("Branch updated successfully !");
    } else {
      alert("Error saving Branch !");
    }
    handleClose();
    setReload(true);
  }

  const deleteBranch = async () => {
    const response = await axios.delete(`http://localhost:3001/branch/${id}`);
    if(response.status == 200) {
      alert("Branch deleted successfully !");
    } else {
      alert("Error saving Branch !");
    }
    handleClose();
    setReload(true);
  }


  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Branch
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="BranchRegister__container">
          Branch Registration
        </DialogTitle>
        <form className="BranchForm__Container">
          <div className="Register__Form">
            <div className="BranchRegisterField">
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={values.location}
                onChange={handleChange}
                placeholder="Enter Location"

                style={{
                  marginTop: "5px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={values.address}
                onChange={handleChange}
                placeholder="Enter Address"

                style={{
                  marginTop: "5px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder="Enter Phone"

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
                placeholder="Enter Email"
                style={{
                  marginTop: "5px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />
            </div>  
            <div className="BranchBtn" onClick={saveBranch}>{currStatus}</div>
          </div>
        </form>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default AddEditBranch;
