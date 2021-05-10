import React, { useEffect } from "react";
import useScroll from "../hooks/useScroll";
import Header from "../components/sections/home/Header";
import Skills from "../components/sections/Skills";
import Portfolio from "../components/sections/Portfolio";

const Home = () => {
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
    </>
  );
};

export default Home;
