import React, { useState, useEffect } from "react";
import useScroll from "../hooks/useScroll";
import Header from "../components/sections/header/Header";
import Portfolio from "../components/sections/portfolio/Portfolio";
import Skills from "../components/sections/skills/Skills";
import Photoshop from "../components/sections/photoshop/Photoshop";
import About from "../components/sections/about/About";
import Contact from "../components/sections/Contact";
import Slideshow from "../components/sections/slideshow/Slideshow";

const Home = ({ history }) => {
  const [hash, startScroll] = useScroll();
  const [slideshowIsOpen, setSlideshowIsOpen] = useState(false);
  const [slideshowIndex, setSlideshowIndex] = useState(0);

  const openSlideshow = (index) => {
    setSlideshowIndex(index);
    setSlideshowIsOpen(true);
  };

  useEffect(() => {
    const target = document.getElementById(hash);
    startScroll(target);
  });

  return (
    <>
      <Header />
      <Portfolio />
      <Skills />
      <Photoshop openSlideshow={openSlideshow} />
      <About />
      <Contact history={history} />
      {slideshowIsOpen && (
        <Slideshow
          slideshowIndex={slideshowIndex}
          slideshowIsOpen={slideshowIsOpen}
          setSlideshowIsOpen={setSlideshowIsOpen}
        />
      )}
    </>
  );
};

export default Home;
