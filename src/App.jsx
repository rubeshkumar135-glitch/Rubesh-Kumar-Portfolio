import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Project from "./components/Project"
import Skills from "./components/Skills"


function App() {
  
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/project" element={<Project/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
