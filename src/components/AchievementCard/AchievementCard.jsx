// import React from 'react';
// import styles from './AchievementCard.module.css';

// const AchievementCard = ({ achievement, onClick }) => {
//   return (
//     <div 
//       className={`${styles.achieveCard} ${styles[achievement.hoverClass]}`} 
//       onClick={() => onClick(achievement)}
//     >
//       {/* Dynamic background color from data */}
//       <div className={styles.achieveIcon} style={{ background: achievement.iconBg }}>
//         {achievement.icon}
//       </div>
      
//       <div className={styles.achieveBody}>
//         <div className={styles.achieveTitle}>{achievement.title}</div>
//         <div className={styles.achieveDesc}>{achievement.shortDesc}</div>
//       </div>
      
//       <div className={styles.achieveYear}>{achievement.year}</div>
//     </div>
//   );
// };

// export default AchievementCard;



import React from 'react';
import styles from './AchievementCard.module.css';

const AchievementCard = ({ achievement, onClick }) => {
  return (
    <div 
      // Fallback class agar hoverClass miss ho jaye
      className={`${styles.achieveCard} ${styles[achievement?.hoverClass || 'hoverYellow']}`} 
      onClick={() => onClick(achievement)}
    >
      <div className={styles.achieveIcon} style={{ background: achievement?.iconBg || "#FFF9C4" }}>
        {achievement?.icon || "🏆"}
      </div>
      
      <div className={styles.achieveBody}>
        <div className={styles.achieveTitle}>{achievement?.title}</div>
        <div className={styles.achieveDesc}>{achievement?.shortDesc}</div>
      </div>
      
      <div className={styles.achieveYear}>{achievement?.year}</div>
    </div>
  );
};

export default AchievementCard;