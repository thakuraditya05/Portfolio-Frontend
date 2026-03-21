import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles['nav-container']}>
      <Link to="/" className={styles['nav-logo']}>Aditya<span>.</span></Link>
      
      <ul className={styles['nav-links']}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
        <li><Link to="/coding">Coding</Link></li>
        <li><Link to="/contact" className={styles['nav-cta']}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;