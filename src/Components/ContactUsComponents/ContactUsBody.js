import React from "react";
import "./ContactUsBody.css";

function ContactUsBody() {
  return (
    <div className="ContactUs__Container">
      <div className="ContactUs__partOne">
        <div className="ContactUs__text">
          <h2>Hotlines</h2>
          <p>
            <h3>General Inquiries</h3>
            +94 0111111111
            <br />
            +94 0222222222
          </p>
          <p>
            <h3>Business Inquiries</h3>
            +94 0333333333
            <br />
            +94 0444444444
          </p>
          <p>
            <h3>Official Email</h3>
            official@gocheeta.com
          </p>
          <p>
            <h3>Careers</h3>
            +94 0555555555
            <br />
            careers@gocheeta.com
          </p>
        </div>
      </div>
      <div className="ContactUs__partTwo">
        <h2>Branches</h2>
      </div>
    </div>
  );
}

export default ContactUsBody;
