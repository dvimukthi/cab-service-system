import React from "react";
import "./ContactUsBody.css";

function ContactUsBody() {
  return (
    <div className="ContactUs__Container">
      <div className="ContactUs__partOne">
        {/* hotlines section */}
        <div className="PartOne__text">
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
        {/* branches section */}
        <div className="PartTwo__text">
          <h2>Branches</h2>
          <p>
            <h3>Galle Branch</h3>
            +94 0666666666
            <br />
            galle@gocheeta.com
          </p>
          <p>
            <h3>Kandy Branch</h3>
            +94 0777777777
            <br />
            Kandy@gocheeta.com
          </p>
          <p>
            <h3>Nugegoda Branch</h3>
            +94 0888888888
            <br />
            Nugegoda@gocheeta.com
          </p>
          <p>
            <h3>Gampaha Branch</h3>
            +94 0999999999
            <br />
            Gampaha@gocheeta.com
          </p>
          <p>
            <h3>Kurunegala Branch</h3>
            +94 0011111111
            <br />
            Kurunegala@gocheeta.com
          </p>
          <p>
            <h3>jaffna Branch</h3>
            +94 0022222222
            <br />
            jaffna@gocheeta.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUsBody;
