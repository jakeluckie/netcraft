import Navigation from "../../components/navigation/navigation.component";
import "./home.styles.scss";

const Home = () => {
  document.title = "Netcraft - Bleeble";
  return (
    <>
      <section className="home-container">
        <Navigation />
        <div className="content-padding">
          <div>
          <h1 className="hero-h1">VOIP Phone Systems</h1>
          <p className="hero-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            eligendi minima deleniti in ea dolores laudantium dolorum, assumenda
            perspiciatis dolore vero fugit recusandae?
          </p>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Home;
