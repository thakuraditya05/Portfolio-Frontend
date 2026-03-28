









  





































































































      






























          


























import React, { useState, useContext } from 'react';
import styles from './Achievements.module.css';
import AchievementCard from '../../components/AchievementCard/AchievementCard';
import AchievementModal from '../../components/AchievementModal/AchievementModal';
import { PortfolioContext } from '../../../context/PortfolioContext'; 

const Achievements = () => {
  const { portfolioData, loading } = useContext(PortfolioContext);
  const [selectedAchieve, setSelectedAchieve] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '100px 0' }}>Loading milestones... ⏳</div>;
  }

  
  
  const dbAchievements = portfolioData?.achievements || []; 

  
  const getIconData = (category) => {
    const cat = category?.toLowerCase() || '';
    if (cat.includes('hackathon')) return { icon: "🏆", iconBg: "#FFF9C4", hoverClass: "hoverYellow" };
    if (cat.includes('rank') || cat.includes('code')) return { icon: "⭐", iconBg: "#E3F2FD", hoverClass: "hoverBlue" };
    if (cat.includes('course') || cat.includes('cert')) return { icon: "📜", iconBg: "#E8F5E9", hoverClass: "hoverGreen" };
    return { icon: "🎯", iconBg: "#FCE4EC", hoverClass: "hoverPink" }; 
  };

  
  const formattedAchievements = dbAchievements.map((ach) => {
    const { icon, iconBg, hoverClass } = getIconData(ach.category);
    return {
      _id: ach._id,
      title: ach.title,
      category: ach.category,
      shortDesc: ach.shortDesc,
      link: ach.link,
      image: ach.image,
      fullDesc: ach.fullDesc,
      icon,
      iconBg,
      hoverClass
    };
  });

  
  const tabOptions = ['All', ...new Set(formattedAchievements.map(a => a.category))];

  
  const filteredData = formattedAchievements.filter(item => 
    activeTab === 'All' || item.category === activeTab
  );

  return (
    <section className={`${styles.achieveSection} fade-up`}>
      
      
      <div className={styles.stickyHeader}>
        <div className={styles.stickyInner}>
          <div className={styles.sectionLabel}>Achievements</div>
          <h2 className={styles.sectionTitle}>Milestones & recognition</h2>

          <div className={styles.filterTabs}>
            {tabOptions.map((tab) => (
              <button
                key={tab}
                className={`${styles.tabBtn} ${activeTab === tab ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      
      <div className={styles.container}>
        <div className={styles.achievementsList}>
          
          
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <AchievementCard 
                key={item._id} 
                achievement={item} 
                onClick={(clickedItem) => setSelectedAchieve(clickedItem)} 
              />
            ))
          ) : (
            
            <p style={{ color: "var(--ink3)", textAlign: "center", padding: "40px 0", width: '100%' }}>
              More achievements coming soon in this category!
            </p>
          )}
          
        </div>
      </div>

      <AchievementModal 
        data={selectedAchieve} 
        onClose={() => setSelectedAchieve(null)} 
      />
    </section>
  );
};

export default Achievements;