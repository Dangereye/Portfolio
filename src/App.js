import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import MobileNav from "./components/layout/MobileNav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import WorkwearClothingDirect from "./pages/WorkwearClothingDirect";
import Error404 from "./pages/Error404";
import Footer from "./components/layout/Footer";

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <div className="app">
      <Router>
        <Navbar navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
        <MobileNav navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/project/:id" exact component={Project} />
            <Route
              path="/project/:id/workwearclothingdirect"
              exact
              component={WorkwearClothingDirect}
            />
            <Route path="*" component={Error404} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
