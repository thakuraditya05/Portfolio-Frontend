import React from 'react';
import styles from './CodingCard.module.css';

const CodingCard = ({ profile, onClick }) => {
  return (
    <div 
      className={`${styles.codingCard} ${styles[profile.hoverClass]}`}
      onClick={() => onClick(profile)}
    >
      <span className={styles.codingLogo}>{profile.logo}</span>
      <div className={styles.codingPlatform}>{profile.platform}</div>
      <div className={styles.codingHandle}>{profile.handle}</div>
      
      <div className={styles.codingStats}>
        {profile.stats.map((stat, index) => (
          <div key={index}>
            <div className={styles.cStatVal}>{stat.value}</div>
            <div className={styles.cStatLbl}>{stat.label}</div>
          </div>
        ))}
      </div>
      
      <span 
        className={styles.codingBadge} 
        style={{ background: profile.badgeBg, color: profile.badgeColor }}
      >
        {profile.badgeText}
      </span>
    </div>
  );
};

export default CodingCard;