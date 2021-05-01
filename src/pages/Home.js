import React from "react";
import Header from "../components/layout/Header";
import Portfolio from "../components/sections/Portfolio";
import Skills from "../components/sections/Skills";

const Home = () => {
  return (
    <>
      <Header />
      <Skills />
      <Portfolio />
    </>
  );
};

export default Home;
