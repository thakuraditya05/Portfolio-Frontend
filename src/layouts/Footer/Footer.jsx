import React from 'react';
import styles from './Footer.module.css'; // Module import kiya

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.footerLogo}>Aditya Singh</span>
      <span className={styles.footerCopy}>© 2024 · Built with passion in Indore</span>
    </footer>
  );
}