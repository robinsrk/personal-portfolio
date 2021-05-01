import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MDBContainer } from "mdbreact";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Route to="/home" component={Home} />
      <Route to="/projects" component={Projects} />
    </Router>
  );
}

export default App;
