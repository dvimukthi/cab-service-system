import React, { useEffect, useState } from "react";
import "./VehicleRegisteredTables.css";
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


function VehicleRegisteredTables({setStatus, setId, setOpen, reload, setReload}) {

  const [rows, setRows] = useState([]);


  useEffect(()=>{
    if(reload) {
      getAllVehicles().then(vehicles =>{
        const _rows = vehicles.map(vh=>{
          return {
            id:vh.id,
            name : vh.name,
            type: vh.type,
            seats: vh.seats,
            price: vh.price,
            numberPlate: vh.numberPlate,
            branch:vh.branch,
          }
        })
        setRows(_rows);
    });
    setReload(false);
    }
  },[reload])
  const getAllVehicles = async () =>{
    const resp = await axios.get("http://localhost:3001/vehicles");
    if(resp.status == 200) {
      return await resp.data;
    }
  }

  const editVehicle = (e, id) =>{
    setId(id);
    setStatus("edit");
    setOpen(true);
  }

  const deleteVehicle = (e, id) =>{
    setId(id);
    setStatus("delete");
    setOpen(true);
  }

  return (
    // vehicle table
    <div className="VehicleRegisteredTables__Container">
      <h3>Vehicles</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Seats</TableCell>
              <TableCell align="center">Branch</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Number Plate</TableCell>
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
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.type}</TableCell>
                <TableCell align="center">{row.seats}</TableCell>
                <TableCell align="center">{row.branch}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.numberPlate}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={e=>{editVehicle(e, row.id)}}>
                    <CreateIcon/>
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                <IconButton onClick={e=>{deleteVehicle(e, row.id)}}>
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

export default VehicleRegisteredTables;
