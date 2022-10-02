import React, { useEffect, useState } from "react";
import "./DriverRegisteredTables.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import axios from "axios";
import { IconButton } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';



function DriverRegisteredTables({setStatus, setId, setOpen, reload, setReload}) {
  
  const [rows, setRows] = useState([]);


  useEffect(()=>{
    if(reload) {
      getAllDrivers().then(drivers =>{
        const _rows = drivers.map(dr=>{
          return {
            id:dr.id,
            name : dr.firstName+" "+dr.lastName,
            email: dr.email,
            phoneNumber: dr.phoneNumber,
            vehicleType: dr.vehicle.type,
            vehicleName: dr.vehicle.name,
            numberPlate: dr.vehicle.numberPlate,
            status:dr.status,
            branch:dr.branch,
          }
        })
        setRows(_rows);
    });
    setReload(false);
    }
  },[reload])
  const getAllDrivers = async () =>{
    const resp = await axios.get("http://localhost:3001/drivers");
    if(resp.status == 200) {
      return await resp.data;
    }
  }

  const editDriver = (e, id) =>{
    setId(id);
    setStatus("edit");
    setOpen(true);
  }

  const deleteDriver = (e, id) =>{
    setId(id);
    setStatus("delete");
    setOpen(true);
  }

  return (
    // driver table
    <div className="DriverRegisteredTables__Container">
      <h3>Drivers</h3>
      <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Number Plate</TableCell>
              <TableCell align="right">Vehicle Type</TableCell>
              <TableCell align="right">Branch</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phoneNumber}</TableCell>
                <TableCell align="right">{row.numberPlate}</TableCell>
                <TableCell align="right">{row.vehicleType}</TableCell>
                <TableCell align="right">{row.branch}</TableCell>
                <TableCell align="right">{row.status==1?"active":"disabled"}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={e=>{editDriver(e, row.id)}}>
                    <CreateIcon/>
                  </IconButton>
                </TableCell>
                <TableCell align="right">
                <IconButton onClick={e=>{deleteDriver(e, row.id)}}>
                    <DeleteIcon/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DriverRegisteredTables;
