import React from "react";
import "./VehicleRegisteredTables.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  VehicleType,
  VehicleName,
  VehicleNumberPlate,
  Price,
  Status,
  Edit,
  Delete
) {
  return {
    VehicleType,
    VehicleName,
    VehicleNumberPlate,
    Price,
    Status,
    Edit,
    Delete,
  };
}

const rows = [];

function VehicleRegisteredTables() {
  return (
    // vehicle table
    <div className="VehicleRegisteredTables__Container">
      <h3>Branches</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>VehicleName</TableCell>
              <TableCell align="right">VehicleType</TableCell>
              <TableCell align="right">VehicleNumberPlate</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
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
    </div>
  );
}

export default VehicleRegisteredTables;
