import React from "react";
import { Wrapper } from "./Login.styles";
import bg from "../../Assets/login_bg.png";
import qr from "../../Assets/qr.png";
import LogoSvg from "../../Components/SVG/LogoSVG";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <img src={bg} alt="bg" />
      <div className="main-container">
        <div className="logo">
          <LogoSvg withText={true} color="white" />
        </div>
        <div className="left-container">
          <div className="heading">
            <h2>Welcome back!</h2>
            <p>We're excited to see you again!</p>
          </div>
          <div className="form">
            <div className="field">
              <label htmlFor="email">EMAIL OR PHONE NUMBER</label>
              <input type="text" name="email" />
            </div>
            <div className="field">
              <label htmlFor="email">PASSWORD</label>
              <input type="text" name="password" />
            </div>
            <p>Forgot your password?</p>
            <button className="login" onClick={() => navigate("/dashboard")}>
              Login
            </button>
            <br />
            <span>
              Need an account?{" "}
              <p onClick={() => navigate("/register")}>Register</p>
            </span>{" "}
          </div>
        </div>
        <div className="right-container">
          <div className="top-container">
            <img src={qr} alt="qr" />
          </div>
          <div className="bottom-container">
            <div className="heading">
              <p>Log in with QR code</p>
              Scan this with the <strong>Discord mobile app</strong> to log in
              instantly.
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
