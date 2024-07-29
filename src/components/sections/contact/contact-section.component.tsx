import { Link } from "react-router-dom";
import "../../sections/contact/contact-section.styles.scss";

const ContactSection = () => {
  return (
    <>
      <section className="contact-section">
        <div className="contact-container content-padding">
        <div className="contact-section-callnow">
          <h2 className="contact-section-callnow-title">Call Now</h2>
          <Link to={'tel:+6421899778'}>
          <button className="contact-section-callnow-btn">021 899 778</button>
          </Link>
        </div>
        <div className="contact-section-email">
          <h2 className="contact-section-email-title">Or Email</h2>
          <Link to={'mailto:service@netcraft.co.nz'}>
          <button className="contact-section-email-btn">service@netcraft.co.nz</button>
          </Link>
        </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
