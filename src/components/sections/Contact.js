import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../shared/SectionTitle";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    gsap.from(".line", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      ease: "back.out(2.5)",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 300",
        toggleActions: "play none none none",
        markers: false,
      },
    });
  }, []);
  return (
    <section id="contact">
      <div className="container">
        <SectionTitle sub="Let's talk" title="Contact Me" />
        <form name="contact" method="POST" data-netlify="true" className="form">
          <div className="form__group line">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" />
          </div>
          <div className="form__groups line">
            <div className="form__group">
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" name="first-name" />
            </div>
            <div className="form__group">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" name="last-name" />
            </div>
          </div>
          <div className="form__group line">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form__group line">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" />
          </div>
          <div className="form__group line">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit" className="btn primary large">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
