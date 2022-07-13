import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "./pages/Home1";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
