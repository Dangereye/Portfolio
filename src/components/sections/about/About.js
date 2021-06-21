import React, { useState, useEffect } from "react";
import useAnimation from "../../../hooks/useAnimation";

const About = () => {
  const [complete, setComplete] = useState(false);
  const animate = useAnimation();
  useEffect(() => {
    if (!complete) {
      animate("#about", ".about-text", ".content__image");
      setComplete(true);
    }
  }, [animate, complete]);
  return (
    <section id="about">
      <div className="container">
        <div className="content">
          <div className="content__image">
            <img
              src="/img/portfolio/min/header/profile-image-min.jpg"
              alt="Craig Puxty"
            />
          </div>
          <div className="content__text">
            <h2 className="section-title about-text">
              <span>Hello,</span> I am Craig.
            </h2>
            <div className="location about-text">
              Currently living in a small town in Flintshire, United Kingdom.
            </div>
            <p className="about-text">
              My experience thus far has primarily been front-end. However, I do
              have basic knowledge of backend technologies such as Node,
              Express, Mongoose and Mongo DB.
            </p>
            <p className="about-text">
              Through passion, constant practice, learning and attention to
              detail, I can produce aesthetically pleasing software to a high
              standard, considering performance, accessibility, SEO and
              utilising best practices.
            </p>
            <p className="about-text">
              React has predominantly been my focus during the last 12 months,
              with several small projects under my belt. I intend to explore
              Next.js to use in conjunction with React and take a deeper dive
              into backend technologies over the coming months.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
