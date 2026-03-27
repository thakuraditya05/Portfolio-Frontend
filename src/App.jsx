import React from 'react';
// 🌟 FIX 1: useLocation ko import kiya
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {Toaster} from 'react-hot-toast'; // 🌟 1. Toast import kiya


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

// 🌟 FIX 2: Router ke andar kaam karne ke liye ek alag Component banaya
const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith('/admin');

  return (
    <>

      <Toaster position="bottom-right" />
      {/* 🌟 FIX 3: Sirf ek hi Navbar rakha jo condition pe chalega */}
      {!hideNavbar && <Navbar />} 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/coding" element={<CodingProfiles />} />
        <Route path="/contact" element={<Contact />} />

        {/* Hidden Admin Route */}
        <Route path="/admin" element={<MainForm/>} />
      </Routes>
    </>
  );
};

// 🌟 Main App ab bas Router ko wrap karega
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;