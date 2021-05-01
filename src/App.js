import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import MobileNav from "./components/layout/MobileNav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Projects from "./pages/Projects";
import Error404 from "./pages/Error404";

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <div className="app">
      <Router>
        <Navbar navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
        <MobileNav navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/project/:id" component={Project} />
          <Route path="/projects" component={Projects} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
