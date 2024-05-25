import React, { useEffect } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./experience.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div data-aos="fade-up-right">
          <div className="experience__frontend">
            <h3>Front-end Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>HTML</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>CSS</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>JavaScript</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>React</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>Redux</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>VueJs</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>NuxtJs</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>Tailwind</h4>
              </article>
            </div>
          </div>
        </div>
        <div data-aos="fade-up-left" className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Node Js</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Express.js</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>MongoDb</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Socket.io</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Json Web Token</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Git/GitHub</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
