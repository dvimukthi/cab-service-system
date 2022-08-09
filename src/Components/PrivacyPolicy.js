import React from "react";
import Navbar from "../Components/HomeComponents/Navbar/Navbar";
import PrivacyPolicyBody from "./PrivacyPolicyComponent/PrivacyPolicyBody/PrivacyPolicyBody";
import Footer from "../Components/HomeComponents/Footer/Footer";

function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <PrivacyPolicyBody />
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
