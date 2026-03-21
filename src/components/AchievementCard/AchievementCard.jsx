import React from 'react';
import styles from './AchievementCard.module.css';

const AchievementCard = ({ achievement, onClick }) => {
  return (
    <div 
      className={`${styles.achieveCard} ${styles[achievement.hoverClass]}`} 
      onClick={() => onClick(achievement)}
    >
      {/* Dynamic background color from data */}
      <div className={styles.achieveIcon} style={{ background: achievement.iconBg }}>
        {achievement.icon}
      </div>
      
      <div className={styles.achieveBody}>
        <div className={styles.achieveTitle}>{achievement.title}</div>
        <div className={styles.achieveDesc}>{achievement.shortDesc}</div>
      </div>
      
      <div className={styles.achieveYear}>{achievement.year}</div>
    </div>
  );
};

export default AchievementCard;