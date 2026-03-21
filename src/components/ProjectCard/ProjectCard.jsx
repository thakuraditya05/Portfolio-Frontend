import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    // Click karne par parent component ko batayega ki kaunsa project click hua
    <div className={styles.projectCard} onClick={() => onClick(project)}>
      <div className={styles.cardContent}>
        <div className={styles.projectNum}>{project.num}</div>
        <div className={styles.projectTitle}>{project.title}</div>
        <div className={styles.projectDesc}>{project.shortDesc}</div>
        
        <div className={styles.projectStack}>
          {project.stack.map((tech, i) => (
            <span key={i} className={styles.projectTag}>{tech}</span>
          ))}
        </div>
        
        <div className={styles.projectLinks}>
          <span className={styles.projLink}>View Details →</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;