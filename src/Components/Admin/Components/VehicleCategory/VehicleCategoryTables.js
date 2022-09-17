import React from "react";
import "./VehicleCategoryTables.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  Name,
  Email,
  PhoneNumber,
  Password,
  VehicleType,
  VehicleName,
  VehicleNumberPlate,
  Edit,
  Delete
) {
  return {
    Name,
    Email,
    PhoneNumber,
    Password,
    VehicleType,
    VehicleName,
    VehicleNumberPlate,
    Edit,
    Delete,
  };
}

const rows = [];

function VehicleCategoryTables() {
  return (
    // vehicle category table
    <div className="VehicleCategoryTables__Container">
      <h3>Categories</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Category Name</TableCell>
              <TableCell align="right">Price</TableCell>
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

export default VehicleCategoryTables;
