import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
          toggleActions: "play none none none",
          markers: false,
        },
      })
      .from(".text", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(2.5)",
      })
      .from(".content__image", {
        scale: 0,
        ease: "back.out(2.5)",
      });
  }, []);
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
            <h2 className="section-title text">Hello, I am Craig.</h2>
            <div className="location text">
              Currently living in a small town in Flintshire, United Kingdom.
            </div>
            <p className="text">
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
