import React, { useContext } from 'react';
import styles from './Skills.module.css';
import SkillCard from '../../components/SkillCard/SkillCard';
import { PortfolioContext } from '../../../context/PortfolioContext'; 

export default function Skills() {
  const { portfolioData, loading } = useContext(PortfolioContext);

  
  const getSkillUI = (categoryName) => {
    const name = categoryName.toLowerCase();
    if (name.includes('front')) return { icon: '⚡', iconClass: 'iconFe' };
    if (name.includes('back')) return { icon: '🔧', iconClass: 'iconBe' };
    if (name.includes('data')) return { icon: '🗄️', iconClass: 'iconDb' };
    if (name.includes('tool')) return { icon: '🛠️', iconClass: 'iconTools' };
    if (name.includes('cloud') || name.includes('deploy')) return { icon: '☁️', iconClass: 'iconCloud' };
    
    
    return { icon: '🧠', iconClass: 'iconSoft' }; 
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '100px 0' }}>Loading technical arsenal... ⏳</div>;
  }

  
  const dbSkills = portfolioData?.skills || [];
  
  
  const finalSkillsToRender = dbSkills.map(skill => {
    const uiElements = getSkillUI(skill.category || '');
    return {
      _id: skill._id,
      icon: uiElements.icon,
      iconClass: uiElements.iconClass,
      title: skill.category || '',
      tags: Array.isArray(skill.technologies) ? skill.technologies : []
    };
  });

  return (
    <section className={`${styles.skillsSection} fade-up`}>
      <div className={styles.container}>
        <div className={styles.sectionLabel}>Skills</div>
        <h2 className={styles.sectionTitle}>What I work with</h2>
        
        <div className={styles.skillsGrid}>
          
          {finalSkillsToRender.map((skill, index) => (
            <SkillCard 
              key={skill._id || index}
              icon={skill.icon}
              iconClass={skill.iconClass}
              title={skill.title}
              tags={skill.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}