import './App.css';
import Nav from './components/Header/Nav';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import WhoWeAre from './components/WhoWeAre/WhoWeAre';
import Events from './components/Events/Events';
import Gallery from './components/Events/Gallery';
import Clients from './components/Clients/Clients';
import Teams from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Nav />
      <div className='w-11/12 mx-auto justify-center items-center content-center'>
        <Header />
        <Services />
        <WhoWeAre />
        <Events />
        <Gallery />
        <Clients />
        <Teams />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
