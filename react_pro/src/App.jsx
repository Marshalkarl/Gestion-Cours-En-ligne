
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Navbar/Hero/Hero';
import Programs from './Components/Navbar/Programs/Programs';
import Title from './Components/Navbar/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Temoignage from './Components/Temoignage/Temoignage';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Config from './Components/Config/Config';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Professeur from './Components/Professeur/Professeur';
import Etudiant from './Components/Etudiant/Etudiant';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <div className="container">
              <Title subTitle='NOS PROGRAMMES' title='Ce que nous proposons' />
              <Programs />
              <About />
              <Title subTitle='Galerie' title='Photos du Campus' />
              <Campus />
              <Title subTitle='TEMOIGNAGES' title='Ce que disent les étudiants' />
              <Temoignage />
              <Title subTitle='Contactez nous' title='Prendre contact avec nous' />
              <Contact />
              <Footer />
            </div>
          </>
        } />
        
        <Route path="/config" element={<Config />} />
        <Route path="/Professeur" element={<Professeur/>} /> 
        <Route path="/Etudiant" element={<Etudiant/>} /> 

      </Routes>
    </Router>
  );
};

export default App;
