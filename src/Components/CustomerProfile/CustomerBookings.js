import React, { useEffect, useState } from "react";
import "./CustomerBookings.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";




export default function BasicTable({customerId}) {
  const [rows, setRows] = useState([]);
  const [customer, setCustomer] = useState(null);
  useEffect(()=>{
    // setRows([{
    //       name:"Roy Roy", 
    //       pickupLocation:"gampaha",
    //       dropLocation: "colombo", 
    //       kilometers:"30", 
    //       branch:"gampaha", 
    //       driverName:"peris", 
    //       vehicleType:"car", 
    //       vehicleName:"bmw", 
    //       vehicleNumber:"pw5678",
    //       price:1000
    // }]);
    loadBookings();
  },[customerId]);

  async function loadBookings() {
    var resp = await axios.get(`http://localhost:3001/customer/${customerId}/trips`);
    console.log(resp);
    if(resp.status == 200) {
      var _customer =await resp.data;

      console.log(_customer);
      setCustomer(_customer);
    }
  }
  return (
    <div className="BookingTable__Container">
      <h3>Your Bookings</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right" style={{fontWeight:"bold"}}>pickupLocation</TableCell>
              <TableCell align="right" style={{fontWeight:"bold"}}>dropLocation</TableCell>
              <TableCell align="right" style={{fontWeight:"bold"}}>kilometers</TableCell>
              <TableCell align="right" style={{fontWeight:"bold"}}>branch</TableCell>
              <TableCell align="right" style={{fontWeight:"bold"}}>driverName</TableCell>
              <TableCell align="right" style={{fontWeight:"bold"}}>vehicleType</TableCell>
              <TableCell align="right" style={{fontWeight:"bold"}}>vehicleName</TableCell>
              <TableCell align="right" style={{fontWeight:"bold"}}>vehicleNumber</TableCell>
              <TableCell align="right" style={{fontWeight:"bold"}}>price</TableCell>
              <TableCell align="right" style={{fontWeight:"bold"}}>status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
            {customer? customer.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.pickupStreet} , {row.pickupCity}</TableCell>
                <TableCell align="right">{row.dropStreet} , {row.dropCity}</TableCell>
                <TableCell align="right">{row.distance}</TableCell>
                <TableCell align="right">{row.branch}</TableCell>
                <TableCell align="right">{row.driver? row.driver.firstName: ""} {row.driver? row.driver.lastName : ""}</TableCell>
                <TableCell align="right">{row.vehicle.type}</TableCell>
                <TableCell align="right">{row.vehicle.name}</TableCell>
                <TableCell align="right">{row.vehicle.numberPlate}</TableCell>
                <TableCell align="right">{row.cost}</TableCell>
                <TableCell align="right">{row.confirmed == 1?"Confirmed":"Pending"}</TableCell>
              </TableRow>
            )):
            null}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
