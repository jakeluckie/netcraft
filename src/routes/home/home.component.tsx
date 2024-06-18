import Navigation from "../../components/navigation/navigation.component"
import './home.styles.scss';

const Home = () => {
  document.title = 'Netcraft - Bleeble'
  return (
    <>
    <section className='home-container'>
    <Navigation />
      <h1>Netcraft - Homepage</h1>
    </section>

    </>
  );
};

export default Home;
