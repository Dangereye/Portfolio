import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import IconAnchor from "../../shared/icon_links/IconAnchor";
import ListGroup from "../../shared/listGroup/ListGroup";
import ListLink from "../../shared/listGroup/ListLink";
import ListAnchor from "../../shared/listGroup/ListAnchor";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../../shared/buttons/Button";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const history = useHistory();
  const backToTop = () => {
    history.push("/");
  };

  useEffect(() => {
    const footer = gsap.timeline({
      scrollTrigger: {
        trigger: "#footer",
        start: "top 300",
        toggleActions: "play none none none",
        markers: false,
      },
    });
    footer.from(".footer-item", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "back.out(2.5)",
    });
    footer.from(".footer-btn", {
      scale: 0,
      duration: 1,
      ease: "back.out(2.5)",
    });
  }, []);
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
            <ListGroup title="Projects" cn="footer-item">
              <ListLink to="/project/1" name="Movies" />
              <ListLink to="/project/2" name="The Weather" />
              <ListLink to="/project/3" name="Star Wars" />
              <ListLink to="/project/4" name="Workwear" />
              <ListLink to="/project/5" name="Portfolio" />
            </ListGroup>

            <ListGroup title="Downloads" cn="footer-item">
              <ListAnchor href="/cv/cv.txt" name="Curriculum vitae" download />
            </ListGroup>

            <ListGroup title="Email" cn="footer-item">
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
