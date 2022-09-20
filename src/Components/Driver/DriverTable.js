import React, { useState, useEffect } from "react";
import "./DriverTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import StartIcon from '@mui/icons-material/Start';

import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";

import axios from 'axios';

let initialVals  = {

}

export default function BasicTable({userId}) {

  const [rows, setRows] = useState([]);
  const [reload, setReload] = useState(false);
  const [values, setValues] = useState(initialVals);

  useEffect(()=>{
    console.log('Calling EFFECT')
    loadData();
  },[reload]);

  const label = { inputProps: { "aria-label": "Accept" } };

  async function handleChange(e, id){
    var name = e.target.name;
    var checked = e.target.checked;
    axios.put(`http://localhost:3001/trip/accept/`,
    {
      id:id,
      checked:checked
    }).then((resp) =>{
      loadData();
     })
     .catch(err=>console.log(err));
    
  }

  function loadData() {
    axios.get(`http://localhost:3001/trip/${userId}/driver`).then((resp) =>{
      if(resp.status == 200) {
        console.log(resp.data);
        setRows(resp.data);
        resp.data.map((r)=>{
          var name = `accept_`+r.id;
          var checked = r.confirmed == 1? true:false;
          setValues({
            ...values,
            [name]:checked
          })
        })
      }
    }).catch((err) =>{
      console.log(err);
    })

  
  }
  return (
    // driver table
    <div className="DriverTable__Container">
      <h3>Trips</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell ><b>Customer Name</b></TableCell>
              <TableCell align="center"><b>Pickup Location</b></TableCell>
              <TableCell align="center"><b>Dropoff Location</b></TableCell>
              <TableCell align="center"><b>Distance (Km)</b></TableCell>
              <TableCell align="center"><b>Price (Rs.)</b></TableCell>
              <TableCell align="center"><b>Accept</b></TableCell>
              <TableCell align="center"><b>Start</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.customerName}
                </TableCell>
                <TableCell align="center">{row.pickupStreet} , {row.pickupCity}</TableCell>
                <TableCell align="center">{row.dropStreet} , {row.dropStreet}</TableCell>
                <TableCell align="center">{row.distance}</TableCell>
                <TableCell align="center">{row.cost}</TableCell>
                <TableCell align="center">
                <Checkbox
                  name={`accept_${row.id}`}
                  onChange={(e)=>{handleChange(e,row.id )}}
                  {...label}
                  value={values[`accept_${row.id}`]}
                  checked={row.confirmed==1?true:false}
                />
                </TableCell>
                <TableCell align="center">
                  <IconButton color="primary" aria-label="upload picture" component="label">
                    {row.confirmed==1?
                      <StartIcon />
                     : 
                      <StartIcon disabled color={"secondary"}/>
                    }
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
