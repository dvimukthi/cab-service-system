import React, { useEffect, useState } from "react";
import "./BranchRegisteredTables.css";
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



function BranchRegisteredTables({setStatus, setId, setOpen, reload, setReload}) {
  
  const [rows, setRows] = useState([]);


  useEffect(()=>{
    if(reload) {
      getAllBranchs().then(Branchs =>{
        const _rows = Branchs.map(b=>{
          return {
            id:b.id,
            location : b.location,
            address : b.address,
            email: b.email,
            phoneNumber: b.phone,
            numberofVehicle: b.vehicleCount,
            numberOfDrivers: b.driversCount,
          }
        })
        setRows(_rows);
    });
    setReload(false);
    }
  },[reload])
  const getAllBranchs = async () =>{
    const resp = await axios.get("http://localhost:3001/branch");
    if(resp.status == 200) {
      return await resp.data;
    }
  }

  const editBranch = (e, id) =>{
    setId(id);
    setStatus("edit");
    setOpen(true);
  }

  const deleteBranch = (e, id) =>{
    setId(id);
    setStatus("delete");
    setOpen(true);
  }

  return (
    // Branch table
    <div className="BranchRegisteredTables__Container">
      <h3>Branchs</h3>
      <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Drivers</TableCell>
              <TableCell align="center">vehicles</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.location}</TableCell>
                <TableCell align="center">{row.address}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.phoneNumber}</TableCell>
                <TableCell align="center">{row.numberOfDrivers}</TableCell>
                <TableCell align="center">{row.numberofVehicle}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={e=>{editBranch(e, row.id)}}>
                    <CreateIcon/>
                  </IconButton>
                </TableCell>
                <TableCell align="right">
                <IconButton onClick={e=>{deleteBranch(e, row.id)}}>
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

export default BranchRegisteredTables;
