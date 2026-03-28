
























        

        



          


          


          







        



















import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './AchievementModal.module.css';

const AchievementModal = ({ data, onClose }) => {

  useEffect(() => {
    if (data) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [data]);

  if (!data) return null;

  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        
        <div className={styles.modalScrollArea}>
          
          
          <img 
            src={data.image || "https://placehold.co/800x400?text=No+Certificate+Preview"} 
            alt={data.title} 
            className={styles.modalImage} 
          />
          
          <h2 className={styles.modalTitle}>{data.title}</h2>
          
          
          <p className={styles.modalDesc}>{data.fullDesc || data.shortDesc}</p>
          
          
          {data.link && (
            <a href={data.link} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
              {data.linkText || "View Credential ↗"}
            </a>
          )}
        </div>
        
      </div>
    </div>,
    document.body
  );
};

export default AchievementModal;