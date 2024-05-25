import React, { useEffect } from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      mirror: false
    });
  }, []);
  return (
    <header id="home">
      <div className="container header__container">
        <h5  data-aos="fade-right">Hello I'm</h5>
        <h1 data-aos="fade-left">Satya Prakash</h1>
        <h5 data-aos="fade-right" className="text-light">Full-stack Developer</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
