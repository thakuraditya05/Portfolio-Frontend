import React from 'react';
// import styles from '../../pages/Home/Home.module.css'; // ✅ CSS Module import
import styles from './HeroCard.module.css'; // ✅ CSS Module import

const HeroCard = () => {
  return (
    <div className={`${styles['hero-visual']} fade-up delay-2`}>
      <div className={styles['hero-card']}>
        <div className={styles['hero-avatar']}>A</div>
        <div className={styles['hero-card-name']}>Aditya Singh</div>
        <div className={styles['hero-card-role']}>Full Stack Developer · 3 yrs exp</div>
        
        <div className={styles['hero-card-stack']}>
          <span className={styles['stack-chip']}>React</span>
          <span className={styles['stack-chip']}>Node.js</span>
          <span className={styles['stack-chip']}>MongoDB</span>
          <span className={styles['stack-chip']}>TypeScript</span>
          <span className={styles['stack-chip']}>AWS</span>
        </div>
        
        <div className={styles['hero-card-stats']}>
          <div className={styles.stat}>
            <div className={styles['stat-num']}>20+</div>
            <div className={styles['stat-lbl']}>Projects</div>
          </div>
          <div className={styles.stat}>
            <div className={styles['stat-num']}>500+</div>
            <div className={styles['stat-lbl']}>DSA Solved</div>
          </div>
          <div className={styles.stat}>
            <div className={styles['stat-num']}>3★</div>
            <div className={styles['stat-lbl']}>CodeChef</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;