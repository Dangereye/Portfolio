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
      ease: "ease-in-out",
    });
    tl.from(".one", { scale: 0, opacity: 0 });
    tl.from(".two", { y: -100, delay: 1, opacity: 0 });
    tl.from(".three", { y: -100, opacity: 0 }, "<.3");
    tl.from(".four", { y: 100, opacity: 0, ease: "back.out(2.7)" }, "<.6");
  }, []);

  return (
    <header className="header">
      <Pux />
      <div className="container">
        <div className="header__typography">
          <div className="header__typography__subtitle three">
            Front-end Developer.
          </div>
          <h1 className="header__typography__title two">Craig Puxty</h1>
          <p className="one">
            Projects created with <span>p</span>assion, producing great{" "}
            <span>u</span>
            ser e<span>x</span>
            periences!
          </p>
        </div>
        <button
          className="btn secondary large four"
          onClick={() => history.push("/#portfolio")}
        >
          Recent Projects
        </button>
      </div>
    </header>
  );
};

export default Header;
