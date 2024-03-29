import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";
import Navigation from "./components/Navigation/Navigation";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/expertise" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
