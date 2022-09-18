import React from "react";
import "./AvailableVehicles.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

function createData(
  DriverName,
  PhoneNumber,
  VehicleName,
  VehicleNumberPlate,
  Status
) {
  return {
    DriverName,
    PhoneNumber,
    VehicleName,
    VehicleNumberPlate,
    Status,
  };
}

const rows = [];

function AvailableVehicles() {
  return (
    // Available vehicles table
    <div className="AvailableVehicles__Container">
      <h3>Available Vehicles List</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Driver Name</TableCell>
              <TableCell align="right">PhoneNumber</TableCell>
              <TableCell align="right">VehicleName</TableCell>
              <TableCell align="right">VehicleNumberPlate</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.pickupLocation}</TableCell>
                <TableCell align="right">{row.dropLocation}</TableCell>
                <TableCell align="right">{row.kilometers}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="Confirm__Booking__btn">Confirm</div>
    </div>
  );
}

export default AvailableVehicles;
