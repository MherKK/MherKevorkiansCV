import "./App.css";
import AboutMe from "./Components/About me/AboutMe";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./Components/Skills/Skills"
import Achievments from "./Components/Achievments/Achievments";
import Projects from "./Components/Projects/Projects";
function App() {
  console.log("Random");
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/achievments" element={<Achievments />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
