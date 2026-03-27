import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // 🌟 NavLink import kiya
import styles from './Navbar.module.css';

const Sun = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M12 3.2v2.2M12 18.6v2.2M20.8 12h-2.2M5.4 12H3.2M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6M18.4 18.4l-1.6-1.6M7.2 7.2L5.6 5.6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const Moon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const handleLinkClick = () => setIsMenuOpen(false);

  // Ye ek helper function hai jo active state par class lagayega
  const navLinkClass = ({ isActive }) => 
    isActive ? styles.activeLink : '';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <nav className={styles['nav-container']}>
      {/* Logo ke liye Link hi theek hai */}
      <Link to="/" className={styles['nav-logo']} onClick={handleLinkClick}>Aditya<span>.</span></Link>

      <div className={styles['nav-right']}>
        <ul className={`${styles['nav-links']} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          {/* 🌟 'end' likhna zaroori hai Home ke liye, warna wo hamesha active rahega */}
          <li><NavLink to="/" end className={navLinkClass} onClick={handleLinkClick}>Home</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass} onClick={handleLinkClick}>About</NavLink></li>
          <li><NavLink to="/skills" className={navLinkClass} onClick={handleLinkClick}>Skills</NavLink></li>
          <li><NavLink to="/projects" className={navLinkClass} onClick={handleLinkClick}>Projects</NavLink></li>
          <li><NavLink to="/achievements" className={navLinkClass} onClick={handleLinkClick}>Achievements</NavLink></li>
          <li><NavLink to="/coding" className={navLinkClass} onClick={handleLinkClick}>Coding</NavLink></li>
          
          {/* CTA button ko same rehne diya */}
          <li><Link to="/contact" className={styles['nav-cta']} onClick={handleLinkClick}>Contact</Link></li>
        </ul>

        <div className={styles['nav-actions']}>
        <button
          type="button"
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          aria-pressed={theme === 'dark'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        <button
          type="button"
          className={styles.hamburger}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
