import React, { useEffect } from "react";
import gsap from "gsap";
import { useHistory } from "react-router-dom";
import Pux from "./Pux";
import Button from "../shared/buttons/Button";

const Header = () => {
  const history = useHistory();
  const goToPortfolio = () => {
    history.push("/#portfolio");
  };

  useEffect(() => {
    const header = gsap.timeline({
      delay: 1,
      duration: 1,
    });
    header.from(".caption", { scale: 0, opacity: 0, ease: "power1" });
    header.from(".header-title", {
      y: -100,
      delay: 1,
      opacity: 0,
      stagger: 0.3,
      ease: "ease-in",
    });
    header.from(".header-btn", { y: 100, opacity: 0, ease: "back.out(2.5)" });
  }, []);

  return (
    <header className="header">
      <Pux />
      <div className="container">
        <div className="header__typography">
          <div className="header__typography__subtitle header-title">
            Front-end Developer.
          </div>
          <h1 className="header__typography__title header-title">
            Craig Puxty
          </h1>
          <p className="caption">
            Projects created with <span>p</span>assion, producing great{" "}
            <span>u</span>
            ser e<span>x</span>
            periences!
          </p>
        </div>
        <Button
          cn="secondary large header-btn"
          fn={goToPortfolio}
          text="Recent Projects"
        />
      </div>
    </header>
  );
};

export default Header;
