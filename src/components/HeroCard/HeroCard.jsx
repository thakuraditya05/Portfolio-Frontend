import React from 'react';
import styles from './HeroCard.module.css';

// 🌟 Prop catch kiya
const HeroCard = ({ profile }) => {
  const name = profile?.name || "Aditya Singh";
  const initial = name.charAt(0).toUpperCase(); // Naam ka pehla letter nikal liya

  return (
    <div className={`${styles['hero-visual']} fade-up delay-2`}>
      <div className={styles['hero-card']}>
        
        {/* 🌟 Dynamic Avatar (Image ya Letter) */}
        <div className={styles['hero-avatar']} style={{ overflow: 'hidden' }}>
          {profile?.image ? (
            <img src={profile.image} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            initial
          )}
        </div>
        
        <div className={styles['hero-card-name']}>{name}</div>
        
        {/* 🌟 Dynamic Status / Role */}
        <div className={styles['hero-card-role']}>
          {"Student B.Tech NIT-Bhopal ECE "}
        </div>
        
        {/* Tech Stack (Aap chaho toh isko bhi DB se dynamic bana sakte ho baad me) */}
        <div className={styles['hero-card-stack']}>
          <span className={styles['stack-chip']}>MERN Full Stack Developer </span>
          <span className={styles['stack-chip']}>Data Science</span>
          <span className={styles['stack-chip']}>Machine Learning  </span>
          <span className={styles['stack-chip']}>CP & DSA </span>
        </div>
        
        {/* 🌟 Dynamic Stats */}
        <div className={styles['hero-card-stats']}>
          <div className={styles.stat}>
            <div className={styles['stat-num']}>{profile?.stats?.projectCount || "0+"}+</div>
            <div className={styles['stat-lbl']}>Projects</div>
          </div>
          <div className={styles.stat}>
            <div className={styles['stat-num']}>{profile?.stats?.dsaSolved || "00+"}</div>
            <div className={styles['stat-lbl']}>DSA Solved</div>
          </div>
          <div className={styles.stat}>
            <div className={styles['stat-num']}>{profile?.stats?.codeChefRating || "0★"}</div>
            <div className={styles['stat-lbl']}>CodeChef</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HeroCard;