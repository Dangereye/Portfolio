import React, { useEffect } from "react";
import useScroll from "../hooks/useScroll";
import Header from "../components/sections/Header";
import Skills from "../components/sections/skills/Skills";
import Portfolio from "../components/sections/portfolio/Portfolio";
import Contact from "../components/sections/Contact";
import About from "../components/sections/about/About";

const Home = ({ history }) => {
  const [hash, startScroll] = useScroll();

  useEffect(() => {
    const target = document.getElementById(hash);
    startScroll(target);
  });

  return (
    <>
      <Header />
      <Portfolio />
      <Skills />
      <About />
      <Contact history={history} />
    </>
  );
};

export default Home;
