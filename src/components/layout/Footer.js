import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__columns">
            <div className="column">
              <Link to="/" className="logo">
                Pux.
              </Link>
              <p>
                Projects created with <span>p</span>assion, producing great{" "}
                <span>u</span>ser e<span>x</span>periences!
              </p>
              <div className="links">
                <a href="/">
                  <FaGithub />
                </a>
                <a href="/">
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className="column">
              <h4>Projects</h4>
              <ul>
                <li>
                  <Link to="/project/1">Movies</Link>
                </li>
                <li>
                  <Link to="/project/2">The Weather</Link>
                </li>
                <li>
                  <Link to="/project/3">Star Wars</Link>
                </li>
                <li>
                  <Link to="/project/4/workwearclothingdirect">Workwear</Link>
                </li>
                <li>
                  <Link to="/project/5">Portfolio</Link>
                </li>
              </ul>
            </div>
            <div className="column">
              <h4>Downloads</h4>
              <ul>
                <li>
                  <a href="/cv/cv.txt" download>
                    Curriculum vitae
                  </a>
                </li>
              </ul>
            </div>
            <div className="column">
              <h4>Email</h4>
              <ul>
                <li>
                  <a href="mailto:craig_puxty@talktalk.net">
                    craig_puxty@talktalk.net
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__back-to-top">
            <button
              className="btn primary large icon"
              onClick={() => history.push("/")}
            >
              <FaArrowUp />
              <span>To Top</span>
            </button>
          </div>
        </div>
      </footer>
      <div className="footer__bottom">
        <div className="container">
          <p>&copy; Craig Puxty, 2021</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
