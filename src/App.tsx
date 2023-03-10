import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Skills from "./pages/Skills/Skills"
import AboutMe from "./pages/AboutMe/AboutMe"
import Contact from "./pages/Contact/Contact"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/about-me" element={<AboutMe/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
