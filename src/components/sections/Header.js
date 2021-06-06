import React, { useEffect } from "react";
import gsap from "gsap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Pux from "./Pux";

const Header = () => {
  const history = useHistory();

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 1,
      duration: 1,
    });
    tl.from(".caption", { scale: 0, opacity: 0, ease: "power1" });
    tl.from(".title", {
      y: -100,
      delay: 1,
      opacity: 0,
      stagger: 0.3,
      ease: "ease-in",
    });
    tl.from(".btn", { y: 100, opacity: 0, ease: "back.out(2.5)" });
  }, []);

  return (
    <header className="header">
      <Pux />
      <div className="container">
        <div className="header__typography">
          <div className="header__typography__subtitle title">
            Front-end Developer.
          </div>
          <h1 className="header__typography__title title">Craig Puxty</h1>
          <p className="caption">
            Projects created with <span>p</span>assion, producing great{" "}
            <span>u</span>
            ser e<span>x</span>
            periences!
          </p>
        </div>
        <button
          className="btn secondary large"
          onClick={() => history.push("/#portfolio")}
        >
          Recent Projects
        </button>
      </div>
    </header>
  );
};

export default Header;
