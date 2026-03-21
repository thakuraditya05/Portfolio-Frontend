import React from 'react';
import styles from './AchievementModal.module.css';
import { useEffect } from 'react';

const AchievementModal = ({ data, onClose }) => {

    // 🌟 JAISE HI MODAL KHULEGA, PEECHHE KA SCROLL BAND HO JAYEGA
    useEffect(() => {
      if (data) {
        // Modal open hua: Body ka scroll hide kar do
        document.body.style.overflow = 'hidden';
      } else {
        // Modal close hua: Body ka scroll wapas chalu kar do
        document.body.style.overflow = 'auto';
      }
  
      // Clean up function: Agar component achanak hata, toh scroll chalu rahe
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [data]); // Jab bhi 'data' state change hogi, ye chalega
  


  if (!data) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        
        <div className={styles.modalScrollArea}>
          {/* 1. Thumbnail / Screenshot */}
          <img src={data.image} alt={data.title} className={styles.modalImage} />
          
          {/* 2. Title */}
          <h2 className={styles.modalTitle}>{data.title}</h2>
          
          {/* 3. Description */}
          <p className={styles.modalDesc}>{data.fullDesc}</p>
          
          {/* 4. Link */}
          {data.link && (
            <a href={data.link} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
              {data.linkText || "View Credential ↗"}
            </a>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default AchievementModal;