import { Link } from "react-router-dom";
import { useState } from "react";
import netcraftLogo from "../../assets/nc-lg.webp";
import closeButton from "../../assets/netcraft-close.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  const [menuOpenStyle, setMenuOpenStyle] = useState("closed");

  const openCloseMenu = () => {
    if (menuOpenStyle === "closed") {
      console.log("open");
      setMenuOpenStyle("open");
    } else {
      console.log("closed");
      setMenuOpenStyle("closed");
    }
  };

  return (
    <header className="navigation">
      <Link className="nc-logo" to={"/"}>
        <img src={netcraftLogo} />
      </Link>
      <div onClick={openCloseMenu} className="hamburger-menu">
        <svg viewBox="0 0 100 70" width="40" height="40">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </div>
      <div onClick={openCloseMenu} className={`mobile-bg-clickable ${menuOpenStyle}`}></div>
      <div className={`nav-links-container ${menuOpenStyle}`}>
        
        <div onClick={openCloseMenu} className="nav-close-mobile">
          <img src={closeButton} />
        </div>
        <div className="solutions-dropdown">
          <button className="solutions-dropdown-button">Solutions</button>
          <div className="solutions-dropdown-content">
            <Link className="nav-sub-link" to={"/voip-systems"}>
              VOIP Systems
            </Link>
            <Link className="nav-sub-link" to={"/internet-connections"}>
              Internet Connections
            </Link>
            <Link className="nav-sub-link" to={"/training"}>
              Training
            </Link>
            <Link className="nav-sub-link" to={"/consultancy"}>
              Consultancy
            </Link>
          </div>
        </div>
        <Link className="nav-link" to={"/about"}>
          About
        </Link>
        <Link className="nav-link" to={"/testimonials"}>
          Testimonials
        </Link>
        <Link className="nav-link" to={"/contact"}>
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navigation;
