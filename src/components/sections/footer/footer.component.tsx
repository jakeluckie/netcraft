import { Link } from "react-router-dom";
import netcraftLogo from "../../../assets/nc-lg.webp";
import "../footer/footer.styles.scss";

const Footer = () => {
  const thisDay = new Date();

  return (
    <>
      <footer className="footer-section">
        <div className="footer-contents-container content-padding">
          <div className="footer-logo">
            <img src={netcraftLogo} />
            <p>&#169; {thisDay.getFullYear().toString()} Netcraft Limited.</p>
          </div>
          <div className="footer-solutions">
            <h4>Solutions</h4>
            <Link className="footer-link" to={"/voip-systems"}>
              <p>― VOIP Systems</p>
            </Link>
            <Link className="footer-link" to={"/business-broadband"}>
              <p>― Internet Connections</p>
            </Link>
            <Link className="footer-link" to={"/training"}>
              <p>― Training</p>
            </Link>
            <Link className="footer-link" to={"/consultancy"}>
              <p>― Consultancy</p>
            </Link>
          </div>
          <div className="footer-about">
            <Link className="footer-link" to={"/about"}>
              <h4>About</h4>
            </Link>
            <Link className="footer-link" to={"/testimonials"}>
              <h4>Testimonials</h4>
            </Link>
            <Link className="footer-link" to={"/contact"}>
              <h4>Contact</h4>
            </Link>
          </div>
          <div className="footer-contact">
            <Link className="footer-link" to={"tel:+6421899778"}>
              <p>
                Phone <br />
                <strong>021 899 778</strong>
              </p>
            </Link>
            <Link className="footer-link" to={"mailto:service@netcraft.co.nz"}>
            <p>
              Email <br />
              <strong>service@netcraft.co.nz</strong>
            </p>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
