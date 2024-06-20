import { Link } from "react-router-dom";
import netcraftLogo from "../../assets/nc-lg.webp";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <header className="navigation">
      <Link className="nc-logo" to={"/"}>
        <img src={netcraftLogo} />
      </Link>
      <div className="hamburger-menu">
        <svg viewBox="0 0 100 70" width="40" height="40">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </div>
      <ul className="nav-links-container">
        <li>Solutions</li>
        <li>About</li>
        <li>Testimonials</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};

export default Navigation;
