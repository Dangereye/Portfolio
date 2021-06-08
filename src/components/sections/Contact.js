import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../shared/SectionTitle";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [company, setCompany] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [all, setAll] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setAll({ company, firstName, lastName, email, subject, message });
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeURI({
        "form-name": "Contact",
        ...all,
      }),
    })
      .then(() => {
        alert("Success!");
      })
      .catch((error) => alert(error));
  };
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
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="form"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="form__group line">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="form__groups line">
            <div className="form__group">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form__group">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="form__group line">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form__group line">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="form__group line">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
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
