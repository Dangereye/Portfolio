import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../shared/SectionTitle";
gsap.registerPlugin(ScrollTrigger);

const Contact = ({ history }) => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const formatValue = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.replace(/[=<>/()[\]{}]/g, "").trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...formData,
      }),
    })
      .then((res) => {
        if (!res.status.ok) {
          alert("Oops! Something went wrong. Please try again.");
          console.log(res);
          history.push("/#contact");
        } else {
          alert("Message Sent Successfully! ");
          setFormData({
            company: "",
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        }
      })
      .catch((error) => alert("error"));
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
          <input type="hidden" name="form-name" value="contact" />
          <div className="form__group line">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              onBlur={(e) => formatValue(e)}
            />
          </div>
          <div className="form__group line">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              onBlur={(e) => formatValue(e)}
              required
            />
          </div>
          <div className="form__group line">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              onBlur={(e) => formatValue(e)}
              required
            />
          </div>
          <div className="form__group line">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              onBlur={(e) => formatValue(e)}
              required
            />
          </div>
          <div className="form__group line">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              onBlur={(e) => formatValue(e)}
              required
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
