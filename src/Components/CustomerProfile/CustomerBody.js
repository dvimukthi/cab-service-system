import React, { useEffect, useState } from "react";
import "./CustomerBody.css";
import UserProfile from "../../Assets/user-profile-img.png";
import CustomerBookings from "./CustomerBookings";
import axios from "axios";

function CustomerBody({customerId , bookingId}) {
  const [customer, setCustomer] = useState(null);

  useEffect(()=>{
    getCustomerDetails();
  },[customerId])

  async function getCustomerDetails() {
    var resp = await axios.get(`http://localhost:3001/customer/${customerId}`);
    if(resp.status == 200) {
      var _customer =await resp.data;

      console.log(_customer);
      setCustomer(_customer);
    }
  }

  return (
    <div className="CustomerBody__Container">
      {/* Add Customer Details */}
      <div className="ProfileDetails__Container">
        <h2>Your Profile</h2>
        <div className="Details__Container">
          {/* customer image part */}
          <img
            src={UserProfile}
            alt=""
            width="90"
            height="90"
            style={{
              marginRight: "10px",
              borderRadius: "10px",
              border: "3px solid  black",
              background: "white",
            }}
          />
          {/* customer details part */}
          <div className="Details">
            <h3>Name: {customer? customer.firstName: null } {customer? customer.lastName: null}</h3>
            <h3>Email: {customer? customer.email: null} </h3>
          </div>
        </div>
      </div>
      {/* customer previous bookings table */}
      <CustomerBookings 
      customerId = {customerId}/>
    </div>
  );
}

export default CustomerBody;
