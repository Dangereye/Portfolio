import React from "react";
import { ImLocation } from "react-icons/im";
import SectionTitle from "../shared/SectionTitle";

const About = () => {
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
            <h2 className="section-title">Hello, I am Craig.</h2>
            <div className="location">
              Currently living in a small town in Flintshire, United Kingdom.
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi
              assumenda, perspiciatis id ad doloremque quibusdam. Fugiat
              excepturi, corrupti adipisci quas hic autem expedita fuga vel rem
              esse assumenda dolorum!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
