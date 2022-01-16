import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoComponent from "../SVG/LogoSVG";
import { Navbar } from "./Header.styles";

const Header = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  return (
    <Navbar>
      <div className="logo-container">
        <LogoComponent withText={true} color="white" />
      </div>
      <div className="menu">
        <div className="nav-links">
          <div className="hamburger" onClick={() => setActive(true)}>
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
          </div>
          <ul className="nav-menu">
            <li>Downloads</li>
            <li>Nitro</li>
            <li>Safety</li>
            <li>Support</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
          <div className={`sidebar ${!active && "hide"}`}>
            <div className="wrapper">
              <LogoComponent withText={true} color="black" />
              <div className="close" onClick={() => setActive(false)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <ul>
              <li>Home</li>
              <li>Download</li>
              <li>Nitro</li>
              <li>Safety</li>
              <li>Support</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <div className="login-container">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
