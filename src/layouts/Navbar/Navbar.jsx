import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // ðŸŒŸ NavLink import kiya
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => setIsMenuOpen(false);

  // Ye ek helper function hai jo active state par class lagayega
  const navLinkClass = ({ isActive }) => 
    isActive ? styles.activeLink : '';

  return (
    <nav className={styles['nav-container']}>
      {/* Logo ke liye Link hi theek hai */}
      <Link to="/" className={styles['nav-logo']} onClick={handleLinkClick}>Aditya<span>.</span></Link>
      
      <button
        type="button"
        className={styles.hamburger}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      <ul className={`${styles['nav-links']} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        {/* ðŸŒŸ 'end' likhna zaroori hai Home ke liye, warna wo hamesha active rahega */}
        <li><NavLink to="/" end className={navLinkClass} onClick={handleLinkClick}>Home</NavLink></li>
        <li><NavLink to="/about" className={navLinkClass} onClick={handleLinkClick}>About</NavLink></li>
        <li><NavLink to="/skills" className={navLinkClass} onClick={handleLinkClick}>Skills</NavLink></li>
        <li><NavLink to="/projects" className={navLinkClass} onClick={handleLinkClick}>Projects</NavLink></li>
        <li><NavLink to="/achievements" className={navLinkClass} onClick={handleLinkClick}>Achievements</NavLink></li>
        <li><NavLink to="/coding" className={navLinkClass} onClick={handleLinkClick}>Coding</NavLink></li>
        
        {/* CTA button ko same rehne diya */}
        <li><Link to="/contact" className={styles['nav-cta']} onClick={handleLinkClick}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
