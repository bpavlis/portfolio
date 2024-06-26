// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import ContactMe from './components/ContactMe'
import Resume from './components/Resume'
import Footer from './components/Footer'
import Education from './components/Education'
import Experience from './components/Experience'



function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
