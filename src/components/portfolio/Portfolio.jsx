import React, { useEffect } from "react";
import IMG1 from "../../assets/alc.png";
import IMG2 from "../../assets/todo.png";
import IMG3 from "../../assets/shelter.png";
import IMG4 from "../../assets/fake.png";
import IMG5 from "../../assets/news.png";
import IMG6 from "../../assets/math.png";
import AOS from "aos";
import "aos/dist/aos.css";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "One to One Chat app",
      img: IMG1,
      description: `It's a one to one chat app where two users can chat together. They are authenticated users through signup and login functionality also it contains forget password functionality with the email otp verification mechanism`,
      technologies: "Socket | JavaScript | ExpressJs | MongoDB ",
      // link: "https://adventistlearningcenter-257375ab1970.herokuapp.com/",
      github: "https://github.com/Meri-MG/school",
    },
    {
      id: 2,
      title: "FakeStore",
      img: IMG4,
      description:
        "FakeStore app that provides information about available products and their details",
      technologies: "React | Redux",
      link: "https://fakestore-metrics.netlify.app/",
      github: "https://github.com/Meri-MG/Fakestore---react",
    },
    {
      id: 3,
      title: "To-Do App",
      img: IMG2,
      description: "User friendly app to plan your day and manage tasks",
      technologies: "JavaScript | NuxtJS | ExpressJs ",
      link: "https://meri-mg.github.io/To-Do-List/dist/",
      github: "https://github.com/Meri-MG/To-Do-List",
    },
    {
      id: 4,
      title: "Shelter",
      img: IMG3,
      description:
        "Fully responsive interactive website built based on Figma design",
      technologies: "JavaScript | CSS",
      link: "https://meri-mg.github.io/shelter/pages/main/index.html",
      // github: "https://github.com/Meri-MG/shelter",
    },
    {
      id: 5,
      title: "World News",
      img: IMG5,
      description:
        "Fully responsive interactive website built based on Adobe XD design",
      technologies: "JavaScript | CSS",
      // link: "https://meri-mg.github.io/Unilab-world-news/",
      github: "https://github.com/Meri-MG/Unilab-world-news",
    },
    {
      id: 6,
      title: "Math Resource",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "JavaScript | Scss | Python",
      link: "https://lukinoo.github.io/math-resource/",
      // github: "https://github.com/lukinoo/math-resource",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <div data-aos="zoom-in-up">
            <article className="portfolio__item" key={pro.id}>
              <div className="portfolio__item-image">
                <img src={pro.img} alt={pro.title} />
              </div>
              <div className="portfolio__item-content">
                <h3>{pro.title}</h3>
                <p>{pro.description}</p>
                <p>{pro.technologies}</p>
              </div>
              <div className="portfolio__item-cta">
                {pro.github && (
                  <a
                    href={pro.github}
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {pro.link && (
                  <a
                    href={pro.link}
                    target="_blank"
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
