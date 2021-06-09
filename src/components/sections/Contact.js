import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../shared/SectionTitle";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [company, setCompany] = useState("");
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...{ company, names, email, subject, message },
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
        <form className="form" name="contact" onSubmit={handleSubmit}>
          <div className="form__group line">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="form__group line">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={names}
              onChange={(e) => setNames(e.target.value)}
            />
          </div>
          <div className="form__group line">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form__group line">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="form__group line">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
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
