import React from "react";
import "../Footer/Footer.css";
import FOOTERIMG from "../../../Assets/GoCheeta logo.png";
import FCEBOOKIMG from "../../../Assets/facebook.png";
import TWITTERIMG from "../../../Assets/twitter.png";
import INSTAGRAMIMG from "../../../Assets/instagram.png";
import LINKEDINIMG from "../../../Assets/linkedin.png";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footeritems">
        <img
          src={FOOTERIMG}
          alt=""
          width="150"
          height="150"
          style={{
            marginTop: "20px",
            marginLeft: "15px",
          }}
        />
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Privacy & Tearms</p>
        <div className="footer__socialmedia">
          <h3>Follow Us</h3>
          <img
            src={FCEBOOKIMG}
            alt=""
            width="50"
            height="50"
            style={{
              marginRight: "4px",
            }}
          />
          <img
            src={TWITTERIMG}
            alt=""
            width="50"
            height="50"
            style={{
              marginRight: "4px",
              cursor: "pointer",
            }}
          />
          <img
            src={INSTAGRAMIMG}
            alt=""
            width="50"
            height="50"
            style={{
              marginRight: "4px",
            }}
          />
          <img src={LINKEDINIMG} alt="" width="50" height="50" style={{}} />
        </div>
      </div>
      <div className="footer__copyright">
        <p>Copyright 2022 GoCheeta All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
