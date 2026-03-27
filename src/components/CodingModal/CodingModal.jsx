import React, { useEffect } from 'react';
import ReactDOM from 'react-dom'; // 🌟 createPortal yahan se aayega
import styles from './CodingModal.module.css';

const CodingModal = ({ profile, onClose }) => {
  // Jab modal khule toh pichhe ki screen scroll na ho
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

  // 🌟 createPortal ka jadu: Ye modal ko normal DOM tree se bahar nikal kar <body> ke end me daal dega
  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      {/* e.stopPropagation() ensures ki modal ke andar click karne par wo band na ho */}
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

        {/* 🌟 Naya page safely kholne wala button */}
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
    document.body // 🌟 Modal ko seedha document.body me inject kar rahe hain
  );
};

export default CodingModal;