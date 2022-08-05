import React from "react";
import "../SigninBody/SigninBody.css";
import SIGNINIMG from "../../../Assets/signinwallpaper.jpg";

function SigninBody() {
  return (
    <div className="signinbody__container">
      <div className="signinbody">
        <img src={SIGNINIMG} alt="" width="1000" height="700" style={{}} />
        <div className="signin__form">
          <h3>Login</h3>
        </div>
      </div>
    </div>
  );
}

export default SigninBody;
