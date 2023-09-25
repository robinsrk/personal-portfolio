import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import ParticlesBg from "particles-bg";
import PageScroll from "react-page-scroll";
import SimpleNestedExample from "./components/Pages/PageScroller";
import { CursorifyProvider } from "react-cursorify";
import { Cursor } from "react-custom-cursors";
function App() {
  return (
    // <div className="App">
    //   <ParticlesBg type="random" color="#06050a" bg={true} />
    //   <Router>
    //     <Navbar />
    //     <Route to="/home" component={Home} />
    //     <Route to="/projects" component={Projects} />
    //     {/* <Route to="/blogs" component={Blogs} /> */}
    //     <Route to="/about" component={About} />
    //     <Route to="/contact" component={ContactMe} />
    //   </Router>
    // </div>
    <div data-cursor-color="white" className="App">
      <ParticlesBg type="lines" color="#06050a" bg={true} />
      <Router>
        <SimpleNestedExample />
      </Router>
    </div>
  );
}

export default App;
