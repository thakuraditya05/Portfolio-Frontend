import styles from './SkillCard.module.css'


export default function SkillCard({icon, iconClass, title, tags}){
    
   const hoverClass = iconClass.replace('icon', 'hover');
    return (
    <div className={`${styles.skillCat} ${styles[hoverClass]}`}>
      
      <div className={`${styles.skillCatIcon} ${styles[iconClass]}`}>
        {icon}
      </div>
      <div className={styles.skillCatTitle}>{title}</div>
      <div className={styles.skillTags}>
        
        {tags.map((tag, index) => (
          <span key={index} className={styles.skillTag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}