import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import IconAnchor from "../../shared/icon_links/IconAnchor";
import ListGroup from "../../shared/listGroup/ListGroup";
import ListLink from "../../shared/listGroup/ListLink";
import ListAnchor from "../../shared/listGroup/ListAnchor";

const Footer = () => {
  const history = useHistory();
  const backToTop = () => {
    history.push("/");
  };
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__columns">
            <div>
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
            <ListGroup title="Projects">
              <ListLink to="/project/1" name="Movies" />
              <ListLink to="/project/2" name="The Weather" />
              <ListLink to="/project/3" name="Star Wars" />
              <ListLink to="/project/4" name="Workwear" />
              <ListLink to="/project/5" name="Portfolio" />
            </ListGroup>

            <ListGroup title="Downloads">
              <ListAnchor href="/cv/cv.txt" name="Curriculum vitae" download />
            </ListGroup>

            <ListGroup title="Email">
              <ListAnchor
                href="mailto:craig_puxty@talktalk.net"
                name="Send Email"
              />
            </ListGroup>
          </div>

          <div className="footer__back-to-top">
            <button className="btn primary large icon" onClick={backToTop}>
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
