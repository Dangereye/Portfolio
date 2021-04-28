import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import MobileNav from "./components/layout/MobileNav";
import Header from "./components/layout/Header";
import Skills from "./components/sections/Skills";

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <div className="app">
      <Navbar navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      <MobileNav navIsOpen={navIsOpen} />
      <Header />
      <Skills />
    </div>
  );
}

export default App;
