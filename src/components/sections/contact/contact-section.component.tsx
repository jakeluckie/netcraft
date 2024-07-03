import "../../sections/contact/contact-section.styles.scss";

const ContactSection = () => {
  return (
    <>
      <section className="contact-container content-padding">
        <div className="contact-section-callnow">
          <h2 className="contact-section-callnow-title">CALL NOW</h2>
          <button className="contact-section-callnow-btn">021 899 778</button>
        </div>
        <div className="contact-section-email">
          <h2 className="contact-section-email-title">OR</h2>
          <button className="contact-section-email-btn">EMAIL US</button>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
