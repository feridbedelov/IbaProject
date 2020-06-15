import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/HomePage/Homepage';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import ProjectDetails from './components/Projects/ProjectDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/about" >
            <About />
          </Route>
          <Route path="/contact" >
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/project/:id" component={ProjectDetails} />
           
          
        </Switch>
        <Footer />
      
      </div>
    </Router>
  );
}

export default App;
