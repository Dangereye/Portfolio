import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImSpinner2 } from "react-icons/im";
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
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: "",
  });

  const [success, setSuccess] = useState({
    status: false,
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
    setError({
      status: false,
      message: "",
    });
    setSuccess({
      status: false,
      message: "",
    });
    setProcessing(true);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...formData,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          setError({
            status: true,
            message: "Error! Something went wrong? Please try again.",
          });
          setProcessing(false);
          history.push("/#contact");
        } else {
          setSuccess({
            status: true,
            message: "Success! Please allow up to 48hrs for a response. ",
          });
          setProcessing(false);
          setFormData({
            company: "",
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          history.push("/#contact");
        }
      })
      .catch((error) => {
        setError({
          status: true,
          message: "Error! Something went wrong? Please try again.",
        });
        setProcessing(false);
      });
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
          {error.status && <div className="errors">{error.message}</div>}
          {success.status && <div className="success">{success.message}</div>}
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
          <button type="submit" className="btn primary large icon">
            {processing && <ImSpinner2 className="spinner" />}
            <span>Submit</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
