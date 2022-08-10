import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Admin from "./Components/Admin";
import Booking from "./Components/Booking";
import ContactUs from "./Components/ContactUs";
import Home from "./Components/Home";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

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
        {/* <Route path="/" exact element={<Admin />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
