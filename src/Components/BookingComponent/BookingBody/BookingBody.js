import React, { useEffect, useState } from "react";
import "../BookingBody/BookingBody.css";
import BookingVehicles from "./BookingVehicles";
import DropdownBranches from "./DropdownBranches";
import PlaceBooking from "./PlaceBooking";
import BOOKINGPAGEIMG from "../../../Assets/BookingImg/bookingpage.png";
import axios from 'axios';
import { useNavigate } from "react-router";

let initialVals = {
  pickup_street:'',
  pickup_city:'',
  branch:'',
  drop_street:'',
  drop_city:'',
  distance:'',
  mini:false,
  car:false,
  van:false,
  customer_id:1,
};

function BookingBody({ customerId }) {
  const [selected, setSelected] = useState("");
  const [values, setValues] = useState(initialVals);


  useEffect(()=>{
    var name = 'customer_id';
    setValues({
      ...values,
      [name]: customerId
    })
  },[customerId])
  const navigate = useNavigate();

  function handleChange(e, targetName=null, targetVal=null) {
    var name = e.target.name;
    var val = e.target.value;
    if(targetName=='branch') {
      val = targetVal;
      name = targetName;
    } else if(targetName && targetVal) {
      val = e.target.checked;
      name = targetName;
    } 
    setValues({
      ...values,
      [name]:val
   });
   console.log(values);
  }

  async function placeBooking () {
    var res = await axios.post(
        'http://localhost:3001/trip',
        values,
        );
      console.log(res);
      if(res.status == 201) {
        alert("Trip Saved successfully with trip id "+res.data.trip_id.id+" !");
        navigate(`/customerprofile?cid=${res.data.trip_id.customerId}&bid=${res.data.trip_id.id}`)
      }
  }
  return (
    <div className="bookingBody__container">
      <div className="boookingparttwo__container">
        {/* from */}
        <form>
          <h1>Plan Your Trip</h1>
          <div className="Trip__container">
            <div className="BookingField">
              <label>Pickup Location</label>
              <input
                type="text"
                name="pickup_street"
                value={values.pickup_street}
                placeholder="Your Current Location"
                onChange={handleChange}
                style={{
                  marginTop: "10px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />
              <input
                type="text"
                name="pickup_city"
                placeholder="pickup_city"
                onChange={handleChange}
                style={{
                  marginTop: "10px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />
            </div>
            <label>Select your nearest branch</label>
            {/* dropdown branches box */}
            <DropdownBranches handleChange={handleChange} selected={selected} setSelected={setSelected} />
            <div className="BookingField">
              <label>Drop Location</label>
              <input
                type="text"
                name="drop_street"
                placeholder="Street Address"
                onChange={handleChange}
                style={{
                  marginTop: "10px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />
              <input
                type="text"
                name="drop_city"
                placeholder="drop_city"
                onChange={handleChange}
                style={{
                  marginTop: "10px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />
              <label
                style={{
                  marginTop: "15px",
                }}
              >
                Total Trip Distance
              </label>
              <input
                type="number"
                name="distance"
                placeholder="Total Kilometers"
                onChange={handleChange}
                style={{
                  marginTop: "10px",
                  marginRight: "38%",
                  height: "28px",
                  borderRadius: "4px",
                }}
              />
            </div>
          </div>
        </form>
        {/* booking vehicles part */}
        <BookingVehicles
        handleChange={handleChange} />
        {/* place booking part */}
        <PlaceBooking 
          placeBooking={placeBooking}/>
      </div>
      {/* booking img */}
      <img
        src={BOOKINGPAGEIMG}
        alt=""
        width="300"
        height="300"
        style={{
          marginTop: "80px",
          marginBottom: "5px",
          marginRight: "50%",
          borderRadius: "300px",
        }}
      />
    </div>
  );
}

export default BookingBody;
