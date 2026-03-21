import React from 'react';
import styles from './ProjectModal.module.css';
import { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {

    // 🌟 JAISE HI MODAL KHULEGA, PEECHHE KA SCROLL BAND HO JAYEGA
    useEffect(() => {
      if (project) {
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
    }, [project]); // Jab bhi 'project' state change hogi, ye chalega
  


  if (!project) return null; // Agar koi project select nahi hua, toh kuch mat dikhao

return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button Scroll Area ke BAAHAR hai, taaki fixed rahe */}
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        
        {/* Yahan se Scroll Area shuru hota hai */}
        <div className={styles.modalScrollArea}>
          <img 
            src={project.image || "https://via.placeholder.com/800x400"} 
            alt={project.title} 
            className={styles.modalImage} 
          />
          
          <h2 className={styles.modalTitle}>{project.title}</h2>
          
          <p className={styles.modalDesc}>{project.fullDesc}</p>
          
          <div className={styles.modalStack}>
            {project.stack && project.stack.map((tech, index) => (
              <span key={index} className={styles.modalTag}>
                {tech}
              </span>
            ))}
          </div>
          
          <div className={styles.modalActions}>
            <a href={project.liveLink} target="_blank" rel="noreferrer" className={styles.btnPrimary}>Live Demo ↗</a>
            <a href={project.githubLink} target="_blank" rel="noreferrer" className={styles.btnOutline}>GitHub Repo ↗</a>
          </div>
        </div>
        {/* Scroll Area Khatam */}

      </div>
    </div>
  );
};

export default ProjectModal;