import React from "react";
import ListGroup from "../../shared/listGroup/ListGroup";
import ListLink from "../../shared/listGroup/ListLink";
import ListAnchor from "../../shared/listGroup/ListAnchor";

const MobileNav = ({ navIsOpen, setNavIsOpen }) => {
  const closeNav = () => {
    setNavIsOpen(false);
  };

  return (
    <nav className={navIsOpen ? "mobile-nav open" : "mobile-nav"}>
      <ListGroup title="Navigation" cn="light">
        <ListLink to="/#portfolio" name="Portfolio" fn={closeNav} />
        <ListLink to="/#skills" name="Skills" fn={closeNav} />
        <ListLink to="/#about" name="About" fn={closeNav} />
        <ListLink to="/#contact" name="Contact" fn={closeNav} />
      </ListGroup>

      <ListGroup title="Downloads" cn="light">
        <ListAnchor href="/cv/cv.txt" name="Curriculum vitae" download />
      </ListGroup>

      <ListGroup title="Email" cn="light">
        <ListAnchor href="mailto:craig_puxty@talktalk.net" name="Send Email" />
      </ListGroup>
    </nav>
  );
};

export default MobileNav;
