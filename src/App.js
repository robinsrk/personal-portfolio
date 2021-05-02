import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route to="/home" component={Home} />
        <Route to="/projects" component={Projects} />
        <Route to="/blogs" component={Blogs} />
        <Route to="/contactus" component={ContactMe} />
      </Router>
    </div>
  );
}

export default App;
