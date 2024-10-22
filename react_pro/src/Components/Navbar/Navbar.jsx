import  { useEffect, useState } from 'react';
import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src="../../public/images/LOGO-ESAG.png" alt="" className="logo" />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><ScrollLink to="hero" smooth={true} offset={0} duration={500}>Accueil</ScrollLink></li>
        <li><ScrollLink to="program" smooth={true} offset={0} duration={500}>Programme</ScrollLink></li>
        <li><ScrollLink to="about" smooth={true} offset={0} duration={500}>À propos</ScrollLink></li>
        <li><ScrollLink to="campus" smooth={true} offset={0} duration={500}>Campus</ScrollLink></li>
        <li><ScrollLink to="temoignage" smooth={true} offset={0} duration={500}>Témoignages</ScrollLink></li>
        <li><RouterLink to="/config" className="btn">Login</RouterLink></li>
      </ul>
      <img src="/images/menu-icon.png" alt="" className="menu_icon" width="40" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
