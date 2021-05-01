import React from "react";
import Header from "../components/layout/Header";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";

const Home = () => {
  return (
    <>
      <Header />
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
