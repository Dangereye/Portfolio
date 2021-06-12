import React, { useEffect } from "react";
import useScroll from "../hooks/useScroll";
import Header from "../components/sections/Header";
import Skills from "../components/sections/Skills";
import Portfolio from "../components/sections/Portfolio";
import Contact from "../components/sections/Contact";
import About from "../components/sections/About";

const Home = ({ history }) => {
  const [hash, startScroll] = useScroll();

  useEffect(() => {
    const target = document.getElementById(hash);
    startScroll(target);
  });

  return (
    <>
      <Header />
      <Skills />
      <Portfolio />
      <About />
      <Contact history={history} />
    </>
  );
};

export default Home;
