import React from "react";
import "./CustomerBookings.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function CustomerBookings(
  name,
  pickupLocation,
  dropLocation,
  kilometers,
  branch,
  driverName,
  vehicleType,
  vehicleName,
  vehicleNumber,
  price
) {
  return {
    name,
    pickupLocation,
    dropLocation,
    kilometers,
    branch,
    driverName,
    vehicleType,
    vehicleName,
    vehicleNumber,
    price,
  };
}

const rows = [
  CustomerBookings(
    "roy roy",
    rfg,
    wesdcsdvdslisara,
    10,
    gampaha,
    dsvsdvdsvsdvsdvsdv,
    mini,
    nano,
    wd1234,
    500
  ),
  CustomerBookings(
    "Rgfb grgrey",
    kafdvfdvdfdana,
    wefdfvdfvdfvfdlisara,
    50,
    gampaha,
    diutkyikyukkkaz,
    mini,
    wagonr,
    wp1234,
    200
  ),
  CustomerBookings(
    "hhh Rtrhtyjoy",
    kaewefwefdana,
    welisara,
    5,
    gampaha,
    diaz,
    mini,
    nano,
    wp1234,
    500
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>customer name</TableCell>
            <TableCell align="right">pickupLocation</TableCell>
            <TableCell align="right">dropLocation</TableCell>
            <TableCell align="right">kilometers</TableCell>
            <TableCell align="right">branch</TableCell>
            <TableCell align="right">driverName</TableCell>
            <TableCell align="right">vehicleType</TableCell>
            <TableCell align="right">vehicleName</TableCell>
            <TableCell align="right">vehicleNumber</TableCell>
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
              <TableCell align="right">{row.branch}</TableCell>
              <TableCell align="right">{row.driverName}</TableCell>
              <TableCell align="right">{row.vehicleType}</TableCell>
              <TableCell align="right">{row.vehicleName}</TableCell>
              <TableCell align="right">{row.vehicleNumber}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
