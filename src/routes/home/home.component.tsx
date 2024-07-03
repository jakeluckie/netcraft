import Navigation from "../../components/navigation/navigation.component";
import ContactSection from "../../components/sections/contact/contact-section.component";
import SolutionsSection from "../../components/sections/solutions/solutions-section.component";
import "./home.styles.scss";

const Home = () => {
  document.title = "Netcraft - Bleeble";
  return (
    <>
      <section className="home-container">
        <Navigation />
        <div className="home-hero content-padding">
          <div className="hero-container">
            <h1 className="hero-h1">VOIP Phone Systems</h1>
            <p className="hero-text">
              Looking for a smooth transition to clear communication and
              reliable technology? Netcraft can help. We specialise in VoIP
              systems, internet installation, and user-friendly training.
            </p>
            <div className="hero-cta">
              <h2 className="hero-cta-call-text">CALL NOW</h2>
              <button className="hero-cta-btn">021 899 778</button>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <SolutionsSection />
      <ContactSection />
    </>
  );
};

export default Home;
