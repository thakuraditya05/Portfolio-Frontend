
import React, { useEffect } from 'react'; // 👈 useEffect import karein
import styles from './CodingModal.module.css';

const CodingModal = ({ profile, onClose }) => {

  // 🌟 JAISE HI MODAL KHULEGA, PEECHHE KA SCROLL BAND HO JAYEGA
  useEffect(() => {
    if (profile) {
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
  }, [profile]); // Jab bhi 'profile' state change hogi, ye chalega


  if (!profile) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        
        <div className={styles.modalScrollArea}>
          <img src={profile.image} alt={profile.platform} className={styles.modalImage} />
          
          <h2 className={styles.modalTitle}>
            {profile.logo} {profile.platform}
          </h2>
          <div className={styles.modalId}>ID: <a href='https://leetcode.com/u/thakur-aditya05/' >{profile.handle}</a></div>
          
          <p className={styles.modalDesc}>{profile.fullDesc}</p>
          
          <div className={styles.modalStatsGrid}>
             {/* Card wale stats ko thoda bada aur detail me dikhayenge */}
             {profile.stats.map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Fraunces', fontSize: '24px', color: 'var(--ink)' }}>{stat.value}</div>
                  <div style={{ fontSize: '11px', color: 'var(--ink3)', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
                </div>
             ))}
             <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Fraunces', fontSize: '24px', color: 'var(--accent)' }}>{profile.badgeText}</div>
                <div style={{ fontSize: '11px', color: 'var(--ink3)', textTransform: 'uppercase', letterSpacing: '1px' }}>Current Status</div>
             </div>
          </div>
          
          <a href={profile.link} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
            View Full Profile ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default CodingModal;