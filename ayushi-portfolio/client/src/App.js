import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "./pages/Home1";
import Card from "./card.js";
import Contact from "./Contact.js";

import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <div id="navbar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>
      <Router basename="/portfolio">
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/projects" component={Card} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
      <Card />
      <Card />
      <Card />
      <Card />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
