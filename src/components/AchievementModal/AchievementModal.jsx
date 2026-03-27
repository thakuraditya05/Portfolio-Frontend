// import React, { useEffect } from 'react';
// import { createPortal } from 'react-dom'; // 🌟 FIX 1: createPortal import kiya
// import styles from './AchievementModal.module.css';

// const AchievementModal = ({ data, onClose }) => {

//   // 🌟 JAISE HI MODAL KHULEGA, PEECHHE KA SCROLL BAND HO JAYEGA
//   useEffect(() => {
//     if (data) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }

//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [data]);

//   if (!data) return null;

//   // 🌟 FIX 2: return ko createPortal me wrap kiya gaya hai
//   return createPortal(
//     <div className={styles.modalOverlay} onClick={onClose}>
//       <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        
//         <button className={styles.closeBtn} onClick={onClose}>✕</button>
        
//         <div className={styles.modalScrollArea}>
//           {/* 1. Thumbnail / Screenshot */}
//           <img src={data.image} alt={data.title} className={styles.modalImage} />
          
//           {/* 2. Title */}
//           <h2 className={styles.modalTitle}>{data.title}</h2>
          
//           {/* 3. Description */}
//           <p className={styles.modalDesc}>{data.fullDesc}</p>
          
//           {/* 4. Link */}
//           {data.link && (
//             <a href={data.link} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
//               {data.linkText || "View Credential ↗"}
//             </a>
//           )}
//         </div>
        
//       </div>
//     </div>,
//     document.body // 🌟 FIX 3: HTML ki main <body> mein render hoga
//   );
// };

// export default AchievementModal;












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
          
          {/* Thumbnail: Fallback url added */}
          <img 
            src={data.image || "https://placehold.co/800x400?text=No+Certificate+Preview"} 
            alt={data.title} 
            className={styles.modalImage} 
          />
          
          <h2 className={styles.modalTitle}>{data.title}</h2>
          
          {/* Full description ya fallback */}
          <p className={styles.modalDesc}>{data.fullDesc || data.shortDesc}</p>
          
          {/* Link button (Tabhi aayega jab data mein link ho) */}
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