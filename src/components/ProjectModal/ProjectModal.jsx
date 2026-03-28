






















        

        






          

          

          







          























import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './ProjectModal.module.css';

const ProjectModal = ({ project, onClose }) => {

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  if (!project) return null;

  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        
        <div className={styles.modalScrollArea}>
          
          <img 
            src={project.image || "https://placehold.co/800x400?text=No+Image+Available"} 
            alt={project.title} 
            className={styles.modalImage} 
          />
          
          <h2 className={styles.modalTitle}>{project.title}</h2>
          
          <p className={styles.modalDesc}>{project.fullDesc || project.shortDesc}</p>
          
          <div className={styles.modalStack}>
            {project.stack && project.stack.map((tech, index) => (
              <span key={index} className={styles.modalTag}>
                {tech}
              </span>
            ))}
          </div>
          
          <div className={styles.modalActions}>
            
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer" className={styles.btnPrimary}>Live Demo ↗</a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer" className={styles.btnOutline}>GitHub Repo ↗</a>
            )}
          </div>
        </div>

      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;