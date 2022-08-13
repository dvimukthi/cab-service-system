import React from "react";
import "./DriverTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, pickupLocation, dropLocation, kilometers, price) {
  return {
    name,
    pickupLocation,
    dropLocation,
    kilometers,
    price,
  };
}

const rows = [
  // createData("Roy Roy", colombo, wattala, 20, 300)
];

export default function BasicTable() {
  return (
    <div className="DriverTable__Container">
      <h3>Trips</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell align="right">pickupLocation</TableCell>
              <TableCell align="right">dropLocation</TableCell>
              <TableCell align="right">kilometers</TableCell>
              <TableCell align="right">price</TableCell>
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
