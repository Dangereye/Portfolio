import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImSpinner2 } from "react-icons/im";
import FormGroup from "../shared/forms/FormGroup";
import Button from "../shared/buttons/Button";
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
    gsap.from(".contact-item", {
      y: 100,
      opacity: 0,
      duration: 1,
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
        <div className="section-subtitle contact-item">Let's talk</div>
        <h2 className="section-title contact-item">Contact Me</h2>
        <form className="form" name="contact" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          {error.status && <div className="errors">{error.message}</div>}
          {success.status && <div className="success">{success.message}</div>}
          <FormGroup
            name="company"
            type="text"
            value={formData.company}
            fn={formatValue}
          />
          <FormGroup
            name="name"
            type="text"
            value={formData.name}
            fn={formatValue}
            required
          />
          <FormGroup
            name="email"
            type="email"
            value={formData.email}
            fn={formatValue}
            required
          />
          <FormGroup
            name="subject"
            type="subject"
            value={formData.subject}
            fn={formatValue}
            required
          />
          <div className="form__group contact-item">
            <label htmlFor="message">message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={formatValue}
              required
            ></textarea>
          </div>
          <Button
            type="submit"
            cn="btn primary large icon contact-item"
            icon={processing && <ImSpinner2 className="spinner" />}
            text="Submit"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
