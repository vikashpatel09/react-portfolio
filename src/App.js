import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <SocialLinks />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
};

export default App;