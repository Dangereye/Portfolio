import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <div className="app">
      <Navbar navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
    </div>
  );
}

export default App;
