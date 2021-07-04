import React, { useState, useEffect } from "react";
import useAnimation from "../../../hooks/useAnimation";

const About = () => {
  const [animIsLoaded, setAnimIsLoaded] = useState(false);
  const animate = useAnimation();
  useEffect(() => {
    if (!animIsLoaded) {
      animate("#about", ".about-text", ".content__image");
      setAnimIsLoaded(true);
    }
  }, [animate, animIsLoaded]);
  return (
    <section id="about">
      <div className="container">
        <div className="content">
          <div className="content__image">
            <picture>
              <source
                srcSet="/img/portfolio/min/about/profile-image-desktop.jpg"
                width="1000px"
                height="1000px"
                media="(min-width:416px)"
              />
              <source
                srcSet="/img/portfolio/min/about/profile-image-tablet.jpg"
                width="500px"
                height="500px"
                media="(max-width:415px)"
              />
              <img
                src="/img/portfolio/min/about/profile-image-desktop.jpg"
                alt="Craig Puxty"
                width="1000px"
                height="1000px"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="content__text">
            <h2 className="section-title about-text">
              <span>Hello,</span> I am Craig.
            </h2>
            <div className="location about-text">
              Currently, I live in a small town in Flintshire, United Kingdom.
            </div>
            <p className="about-text">
              My experience thus far has primarily been front-end. However, I do
              have some basic knowledge of back-end technologies, such as Node,
              Express, Mongoose and Mongo DB.
            </p>
            <p className="about-text">
              Through passion, constant practice, and learning, I can produce
              performant, accessible, aesthetically pleasing software to a high
              standard, utilising development best practices.
            </p>
            <p className="about-text">
              React has predominantly been my focus during the last 12 months,
              with several small projects under my belt. I intend to explore
              Next.js to use in conjunction with React and take a deeper dive
              into back-end technologies over the coming months.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
