import Navigation from "../../../components/navigation/navigation.component";
import "../voip-systems/voip-systems.styles.scss";

const VOIPSystemsPage = () => {
  document.title = "Netcraft - VOIP Systems";

  return (
    <>
      <section className="voip-phone-container">
        <Navigation />
        <div className="content-padding">
          <div className="hero-container">
            <h1 className="hero-h1">VOIP Systems</h1>
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
    </>
  );
};

export default VOIPSystemsPage;
