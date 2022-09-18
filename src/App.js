import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Admin from "./Components/Admin";
import Booking from "./Components/Booking";
import ContactUs from "./Components/ContactUs";
import CustomerProfile from "./Components/CustomerProfile";
import Driver from "./Components/Driver";
import Home from "./Components/Home";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import AdminBody from "./Components/Admin/AdminBody";
import DriverList from "./Components/Admin/Components/DriverList";
import AddVehicles from "./Components/Admin/Components/AddVehicles";
import AddVehicleCategories from "./Components/Admin/Components/AddVehicleCategories";
import Branch from "./Components/Admin/Components/Branch";
import AvailableVehicles from "./Components/BookingComponent/BookingPopupComponents/AvailableVehicles";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/About" exact element={<AboutUs />} />
        <Route path="/Contact" exact element={<ContactUs />} />
        <Route path="/Privacy" exact element={<PrivacyPolicy />} />
        <Route path="/admin" exact element={<Admin />} />
        <Route path="/customerprofile" exact element={<CustomerProfile />} />
        <Route path="/driver" exact element={<Driver />} />
        <Route
          path="/availablevehicles"
          exact
          element={<AvailableVehicles />}
        />

        <Route path="/driverlist" exact element={<DriverList />} />
        <Route path="/addvehicles" exact element={<AddVehicles />} />
        <Route
          path="/addvehiclecategories"
          exact
          element={<AddVehicleCategories />}
        />
        <Route path="/branches" exact element={<Branch />} />
      </Routes>
    </Router>
  );
}

export default App;
