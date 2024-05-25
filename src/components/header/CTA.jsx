import React, { useEffect } from "react";
import CV from "../../assets/cv_satya.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const CTA = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <div className="cta">
      <a data-aos="fade-left" href={CV} download className="btn">
        Download CV
      </a>
      <a data-aos="fade-right" href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
