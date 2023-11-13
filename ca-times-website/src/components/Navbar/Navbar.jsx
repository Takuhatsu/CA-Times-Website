import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import tcat_logo from "./Assets/TCAT-Logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/");
  };

  return (
    <div className="navWrapper">
      <div className="nav-container">
        <div className="leftSideNav">
          <NavLink to="/" className="navlink">
            HOME
          </NavLink>
          <div className="navlink">ARTICLES</div>
        </div>
        <img
          id="tcat"
          draggable="false"
          src={tcat_logo}
          alt=""
          onClick={handleImageClick}
        />
        <div className="rightSideNav">
          <div className="navlink">REGISTER</div>
          <NavLink to="/login" className="navlink">
            LOGIN
          </NavLink>
        </div>
      </div>
      <div className="nav-mobile">
        <div className="userManager">
          <svg
            id="userIcon"
            height="25"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            width="25"
          >
            <path
              d="M21,25c-0.2,0-8.7,0-8.7,0s-8.5,0-8.7,0c-0.2,0-3.1,0.2-2.9-2c0.2-2.2,3.2-8.4,11.6-8.4s11.4,6.2,11.6,8.4
	C24.1,25.2,21.3,25,21,25z M12.3,12.1c3.1,0,5.6-2.7,5.6-6.1S15.4,0,12.3,0S6.7,2.7,6.7,6.1S9.2,12.1,12.3,12.1z"
            />
          </svg>
        </div>

        <img id="tcat" src={tcat_logo} alt="" onClick={handleImageClick} />

        <div
          className={`button ${isMenuOpen ? "-menu-open" : ""}`}
          onClick={handleMenuClick}
        >
          <svg
            draggable="false"
            width="20px"
            height="48px"
            viewBox="0 0 48 48"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <line x1="0" y1="17" x2="48" y2="17" strokeWidth="6" />
              <line x1="0" y1="31" x2="48" y2="31" strokeWidth="6" />
            </g>
            <g>
              <line x1="0" y1="24" x2="48" y2="24" strokeWidth="6" />
              <line x1="0" y1="24" x2="48" y2="24" strokeWidth="6" />
            </g>
          </svg>
        </div>
      </div>
      {isMenuOpen && (
        <div className="popupMenu">
          <div className="mobileMenuLinksContainer">
            <NavLink to="/" className="navlink" onClick={closeMenu}>
              HOME
            </NavLink>
            <NavLink to="/articles" className="navlink" onClick={closeMenu}>
              ARTICLES
            </NavLink>
            <NavLink to="/register" className="navlink" onClick={closeMenu}>
              REGISTER
            </NavLink>
            <NavLink to="/login" className="navlink" onClick={closeMenu}>
              LOGIN
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
