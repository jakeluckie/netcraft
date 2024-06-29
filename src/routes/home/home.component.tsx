import Navigation from "../../components/navigation/navigation.component";
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
            <button>CALL US NOW</button>
          </div>
          <div></div>
        </div>
      </section>
      <SolutionsSection />
    </>
  );
};

export default Home;
