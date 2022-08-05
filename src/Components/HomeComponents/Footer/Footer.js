import React from "react";
import "../Footer/Footer.css";
import FOOTERIMG from "../../../Assets/GoCheeta logo.png";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footeritems">
        <img src={FOOTERIMG} alt="" width="150" height="150" style={{}} />
        <h2>About Us</h2>
        <h2>Contact Us</h2>
        <h2>Privacy & Tearms</h2>
        <div className="footer__socialmedia">
          <h2>Follow Us</h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
