import React from 'react';
import styles from './AboutInfo.module.css'; // Parent styles

const AboutInfo = () => {
  return (
    // Animation add ki aur thoda delay diya
    <div className={`${styles.aboutInfo} fade-up delay-1`}>
      <div className={styles.infoRow}>
        <span className={styles.infoKey}>Name</span>
        <span className={styles.infoVal}>Aditya Singh</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.infoKey}>Location</span>
        <span className={styles.infoVal}>Indore, M.P., India</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.infoKey}>Education</span>
        <span className={styles.infoVal}>B.Tech, Computer Science</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.infoKey}>Experience</span>
        <span className={styles.infoVal}>3+ Years</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.infoKey}>Email</span>
        <span className={styles.infoVal}>
          <a href="mailto:aditya@example.com">aditya@example.com</a>
        </span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.infoKey}>Languages</span>
        <span className={styles.infoVal}>Hindi, English</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.infoKey}>Status</span>
        <span className={`${styles.infoVal} ${styles.statusText}`}>Open to Opportunities</span>
      </div>
      
      <div style={{ marginTop: '28px' }}>
        <a href="#" className={styles.btnPrimary}>Download Resume ↓</a>
      </div>
    </div>
  );
};

export default AboutInfo;