// import 

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar/Navbar'; // Navbar component
import Home from './pages/Home/Home'; // Home page component
import About from './pages/About/About'; // Home page component
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Achievements from './pages/Achievements/Achievements';
import CodingProfiles from './pages/CodingProfiles/CodingProfiles';
import Contact from './pages/Contact/Contact';
import Footer from './layouts/Footer/Footer';
import './index.css'; // Aapki styling file






// Abhi ke liye temporary/dummy pages bana rahe hain
// const Home = () => <section><h2>Home Page</h2></section>;
// const About = () => <section><h2>About Page</h2></section>;
// const Skills = () => <section><h2>Skills Page</h2></section>;
// const Projects = () => <section><h2>Projects Page</h2></section>;
// const Achievements = () => <section><h2>Achievements Page</h2></section>;
// const Coding = () => <section><h2>Coding Page</h2></section>;
// const Contact = () => <section><h2>Contact Page</h2></section>;





function App() {
  return (
    <Router>
      {/* Navbar hamesha top par rahega */}
      <Navbar />
      
      {/* Yahan par pages change honge */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/coding" element={<CodingProfiles />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    {/* <Footer/> */}

    </Router>


  
  );
}
export default App
