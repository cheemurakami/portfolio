import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import NavBar from './NavBar'
import Skills from './Skills'
import About from './About'
// import Projects from './Projects'
// import Contact from './Contact'


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        {/* <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
