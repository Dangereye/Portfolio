import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import IconAnchor from "../../shared/icon_links/IconAnchor";
import ListGroup from "../../shared/listGroup/ListGroup";
import ListLink from "../../shared/listGroup/ListLink";
import ListAnchor from "../../shared/listGroup/ListAnchor";
import Button from "../../shared/buttons/Button";
import useAnimation from "../../../hooks/useAnimation";

const Footer = () => {
  const history = useHistory();
  const animate = useAnimation();
  const [complete, setComplete] = useState(false);

  const backToTop = () => {
    history.push("/");
  };

  useEffect(() => {
    if (!complete) {
      animate("#footer", ".footer-item", ".footer-btn");
      setComplete(true);
    }
  }, [animate, complete]);
  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="footer__columns">
            <div className="footer-item">
              <Link to="/" className="logo">
                Pux.
              </Link>
              <p>
                Projects created with <span>p</span>assion, producing great{" "}
                <span>u</span>ser e<span>x</span>periences!
              </p>
              <div className="icon-links">
                <IconAnchor href="/" name="Github" icon={<FaGithub />} />
                <IconAnchor href="/" name="Linkedin" icon={<FaLinkedin />} />
              </div>
            </div>
            <ListGroup title="Projects" cn="footer-item light">
              <ListLink to="/project/1" name="Movies" />
              <ListLink to="/project/2" name="The Weather" />
              <ListLink to="/project/3" name="Star Wars" />
              <ListLink to="/project/4" name="Workwear" />
              <ListLink to="/project/5" name="Portfolio" />
            </ListGroup>

            <ListGroup title="Downloads" cn="footer-item light">
              <ListAnchor href="/cv/cv.txt" name="Curriculum vitae" download />
            </ListGroup>

            <ListGroup title="Email" cn="footer-item light">
              <ListAnchor
                href="mailto:craig_puxty@talktalk.net"
                name="Send Email"
              />
            </ListGroup>
          </div>

          <div className="footer__back-to-top">
            <Button
              cn="primary large icon footer-btn"
              icon={<FaArrowUp />}
              fn={backToTop}
              text="To Top"
            />
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
