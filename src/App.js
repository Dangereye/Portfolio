import React, { useState } from "react";
import MobileNav from "./components/layout/MobileNav";
import Navbar from "./components/layout/Navbar";

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <div className="app">
      <Navbar navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      <MobileNav navIsOpen={navIsOpen} />
    </div>
  );
}

export default App;
