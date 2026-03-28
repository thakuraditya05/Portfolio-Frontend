import React from 'react';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {Toaster} from 'react-hot-toast'; 


import Navbar from './layouts/Navbar/Navbar'; 
import Home from './pages/Home/Home'; 
import About from './pages/About/About'; 
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Achievements from './pages/Achievements/Achievements';
import CodingProfiles from './pages/CodingProfiles/CodingProfiles';
import Contact from './pages/Contact/Contact';
import './index.css'; 
import MainForm from './pages/Admin/MainForm.jsx';


const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith('/admin');

  return (
    <>

      <Toaster position="bottom-right" />
      
      {!hideNavbar && <Navbar />} 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/coding" element={<CodingProfiles />} />
        <Route path="/contact" element={<Contact />} />

        
        <Route path="/admin" element={<MainForm/>} />
      </Routes>
    </>
  );
};


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;