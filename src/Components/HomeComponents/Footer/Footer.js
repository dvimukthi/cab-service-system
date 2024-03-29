import React from "react";
import "../Footer/Footer.css";
import FOOTERIMG from "../../../Assets/GoCheeta logo.png";
import FCEBOOKIMG from "../../../Assets/facebook.png";
import TWITTERIMG from "../../../Assets/twitter.png";
import INSTAGRAMIMG from "../../../Assets/instagram.png";
import LINKEDINIMG from "../../../Assets/linkedin.png";
import { useNavigate } from "react-router";

function Footer() {
  const navigate = useNavigate();

  // link about us page
  const loadAboutUs = () => {
    navigate("/About");
  };

  // link contact us page
  const loadContactUs = () => {
    navigate("/Contact");
  };

  // load privacy policy page
  const LoadPrivacyPolicy = () => {
    navigate("/Privacy");
  };

  // load home page
  const loadHome = () => {
    navigate("/");
  };

  return (
    <div className="footer__container">
      <div className="footeritems">
        {/* logo image */}
        <img
          src={FOOTERIMG}
          alt=""
          width="150"
          height="150"
          onClick={loadHome}
          style={{
            marginTop: "20px",
            marginLeft: "15px",
          }}
        />
        <p onClick={loadAboutUs}>About Us</p>
        <p onClick={loadContactUs}>Contact Us</p>
        <p onClick={LoadPrivacyPolicy}>Privacy & Terms</p>
        <div className="footer__socialmedia">
          <h3>Follow Us</h3>
          {/* social media icons */}
          <img
            src={FCEBOOKIMG}
            alt=""
            width="50"
            height="50"
            style={{
              marginRight: "4px",
              cursor: "pointer",
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
              cursor: "pointer",
            }}
          />
          <img
            src={LINKEDINIMG}
            alt=""
            width="50"
            height="50"
            style={{
              cursor: "pointer",
            }}
          />
        </div>
      </div>
      {/* footer copyright section */}
      <div className="footer__copyright">
        <p>Copyright 2022 GoCheeta All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
