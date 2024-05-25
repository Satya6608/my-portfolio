import React, { useEffect } from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me.png";
import "./intro.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Intro = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div data-aos="zoom-in-right" className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <div data-aos="zoom-out-left">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>2+ year</small>
              </article>
            </div>
            <div data-aos="zoom-out-right">
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>5+ Completed Projects</small>
              </article>
            </div>
          </div>
          <p data-aos="zoom-in">
            Passionate web developer skilled in Vue.js, Nuxt.js, React.js, HTML,
            CSS, and JavaScript, with a proven history of crafting exceptional
            e-commerce platforms like Ed-A-Mamma and DecoFetch. With a year of
            experience at GreenHonchos Solution Pvt. Ltd. and currently honing
            my expertise at Incipient Info Tech, I specialize in developing
            robust, custom high-quality web applications and am always eager to
            expand my programming knowledge.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
