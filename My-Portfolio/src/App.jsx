import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from '../src/Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Footer from './Components/Footer';
import { useGloablContext } from './Context';
import Error from './Components/Error';
import About from './Pages/About';
import Resume from './Pages/Resume';
import GoToTop from './Components/GoToTop';


function App() {
  const { DarkMode } = useGloablContext()



  return (
    <>
      <div className={DarkMode ? "dark" : ""}>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/About" element={<About />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <GoToTop />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
