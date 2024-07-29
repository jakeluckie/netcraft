import Navigation from "../../components/navigation/navigation.component";
import AboutSection from "../../components/sections/about/about-section.component";
import ContactSection from "../../components/sections/contact/contact-section.component";
import Footer from "../../components/sections/footer/footer.component";
import { Link } from "react-router-dom";
import SolutionsSection from "../../components/sections/solutions/solutions-section.component";
import { Phone } from "@phosphor-icons/react";
import "./home.styles.scss";

const Home = () => {
  document.title = "VOIP Phone Systems - Netcraft";
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
              <Link className="hero-cta-link" to="tel:+6421899778">
                <Phone
                  className="hero-ph-icon"
                  size={24}
                  weight="duotone"
                ></Phone>
                <h2 className="hero-cta-call-text">Call Now</h2>
                <button className="hero-cta-btn">
                  <span className="hero-ph-txt">021 899 778</span>
                </button>
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <SolutionsSection />
      <ContactSection />
      <AboutSection />
      <Footer />
    </>
  );
};

export default Home;
