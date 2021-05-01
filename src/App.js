import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <div className="App">
      <ParticlesBg type="lines" bg={true} />
      <Router>
        <Navbar />
        <Route to="/home" component={Home} />
        <Route to="/projects" component={Projects} />
      </Router>
    </div>
  );
}

export default App;
