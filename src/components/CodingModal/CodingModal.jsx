import React, { useEffect } from 'react';
import ReactDOM from 'react-dom'; 
import styles from './CodingModal.module.css';

const CodingModal = ({ profile, onClose }) => {
  
  useEffect(() => {
    if (profile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [profile]);

  if (!profile) return null;

  
  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>

        <div className={styles.modalHeader}>
          <span className={styles.modalLogo}>{profile.logo}</span>
          <div className={styles.modalTitleArea}>
            <h3 className={styles.modalPlatform}>{profile.platform}</h3>
            <span className={styles.modalHandle}>{profile.handle}</span>
          </div>
        </div>

        <p className={styles.modalDesc}>{profile.fullDesc}</p>

        <div className={styles.modalStats}>
          {profile.stats.map((stat, index) => (
            <div key={index} className={styles.statBox}>
              <div className={styles.statVal}>{stat.value}</div>
              <div className={styles.statLbl}>{stat.label}</div>
            </div>
          ))}
        </div>

        
        <a 
          href={profile.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.visitBtn}
        >
          Visit Profile 🚀
        </a>

      </div>
    </div>,
    document.body 
  );
};

export default CodingModal;