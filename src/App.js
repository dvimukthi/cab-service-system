import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Booking from "./Components/Booking";
import Home from "./Components/Home";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import SignIn from "./Components/SignIn";

function App() {
  return (
    //<Home />
    //<SignIn />
    //<PrivacyPolicy />
    //<AboutUs />
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/signin" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
