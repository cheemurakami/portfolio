import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Contact from "./Contact";
import Hobbies from "./Hobbies";
import Home from "./Home";
import NavBar from "./NavBar";
import Projects from "./Projects";
import React from "react";
import Skills from "./Skills";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/aboutme">
          <Hobbies />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
