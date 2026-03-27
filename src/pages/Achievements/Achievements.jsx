// import React, { useState } from 'react';
// import styles from './Achievements.module.css';
// import AchievementCard from '../../components/AchievementCard/AchievementCard';
// import AchievementModal from '../../components/AchievementModal/AchievementModal';

// const Achievements = () => {
//   const [selectedAchieve, setSelectedAchieve] = useState(null);
//   const [activeTab, setActiveTab] = useState('All');

//   const tabOptions = ['All', 'Hackathons', 'Code Ranks', 'Others'];
  
//   // (Aapka achievementsData array yahan same rahega)
//   const achievementsData = [
//     {
//       id: 1, category: 'Hackathons',
//       icon: "🏆", iconBg: "#FFF9C4", hoverClass: "hoverYellow",
//       title: "Smart India Hackathon — Finalist",
//       shortDesc: "Reached national finals among 10,000+ teams.",
//       year: "2024",
//       fullDesc: "We built a real-time disaster management platform in a continuous 36-hour coding sprint...",
//       image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
//       link: "#", linkText: "View Certificate ↗"
//     },
//     {
//       id: 2, category: 'Hackathons',
//       icon: "🏆", iconBg: "#FFF9C4", hoverClass: "hoverYellow",
//       title: "Smart India Hackathon — Finalist",
//       shortDesc: "Reached national finals among 10,000+ teams.",
//       year: "2024",
//       fullDesc: "We built a real-time disaster management platform in a continuous 36-hour coding sprint...",
//       image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
//       link: "#", linkText: "View Certificate ↗"
//     },
//     {
//       id: 3, category: 'Hackathons',
//       icon: "🏆", iconBg: "#FFF9C4", hoverClass: "hoverYellow",
//       title: "Smart India Hackathon — Finalist",
//       shortDesc: "Reached national finals among 10,000+ teams.",
//       year: "2024",
//       fullDesc: "We built a real-time disaster management platform in a continuous 36-hour coding sprint...",
//       image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
//       link: "#", linkText: "View Certificate ↗"
//     },
//     {
//       id: 4, category: 'Hackathons',
//       icon: "🏆", iconBg: "#FFF9C4", hoverClass: "hoverYellow",
//       title: "Smart India Hackathon — Finalist",
//       shortDesc: "Reached national finals among 10,000+ teams.",
//       year: "2024",
//       fullDesc: "We built a real-time disaster management platform in a continuous 36-hour coding sprint...",
//       image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
//       link: "#", linkText: "View Certificate ↗"
//     },
//     {
//       id: 5, category: 'Hackathons',
//       icon: "🏆", iconBg: "#FFF9C4", hoverClass: "hoverYellow",
//       title: "Smart India Hackathon — Finalist",
//       shortDesc: "Reached national finals among 10,000+ teams.",
//       year: "2024",
//       fullDesc: "We built a real-time disaster management platform in a continuous 36-hour coding sprint...",
//       image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
//       link: "#", linkText: "View Certificate ↗"
//     },
//     {
//       id: 6, category: 'Hackathons',
//       icon: "🏆", iconBg: "#FFF9C4", hoverClass: "hoverYellow",
//       title: "Smart India Hackathon — Finalist",
//       shortDesc: "Reached national finals among 10,000+ teams.",
//       year: "2024",
//       fullDesc: "We built a real-time disaster management platform in a continuous 36-hour coding sprint...",
//       image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
//       link: "#", linkText: "View Certificate ↗"
//     },
//     {
//       id: 7, category: 'Hackathons',
//       icon: "🏆", iconBg: "#FFF9C4", hoverClass: "hoverYellow",
//       title: "Smart India Hackathon — Finalist",
//       shortDesc: "Reached national finals among 10,000+ teams.",
//       year: "2024",
//       fullDesc: "We built a real-time disaster management platform in a continuous 36-hour coding sprint...",
//       image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
//       link: "#", linkText: "View Certificate ↗"
//     },
//     {
//       id: 8, category: 'Hackathons',
//       icon: "🏆", iconBg: "#FFF9C4", hoverClass: "hoverYellow",
//       title: "Smart India Hackathon — Finalist",
//       shortDesc: "Reached national finals among 10,000+ teams.",
//       year: "2024",
//       fullDesc: "We built a real-time disaster management platform in a continuous 36-hour coding sprint...",
//       image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
//       link: "#", linkText: "View Certificate ↗"
//     },
//     {
//       id: 9, category: 'Hackathons',
//       icon: "🏆", iconBg: "#FFF9C4", hoverClass: "hoverYellow",
//       title: "Smart India Hackathon — Finalist",
//       shortDesc: "Reached national finals among 10,000+ teams.",
//       year: "2024",
//       fullDesc: "We built a real-time disaster management platform in a continuous 36-hour coding sprint...",
//       image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
//       link: "#", linkText: "View Certificate ↗"
//     },
//     // ... baki items ...
//   ];

//   const filteredData = achievementsData.filter(item => 
//     activeTab === 'All' || item.category === activeTab
//   );

//   return (
//     <section className={`${styles.achieveSection} fade-up`}>
      
//       {/* 🌟 STICKY HEADER ab container ke bahar hai taki 100% width le sake */}
//       <div className={styles.stickyHeader}>
//         <div className={styles.stickyInner}> {/* Text ko center rakhne ke liye */}
//           <div className={styles.sectionLabel}>Achievements</div>
//           <h2 className={styles.sectionTitle}>Milestones & recognition</h2>

//           <div className={styles.filterTabs}>
//             {tabOptions.map((tab) => (
//               <button
//                 key={tab}
//                 className={`${styles.tabBtn} ${activeTab === tab ? styles.activeTab : ''}`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* 🌟 LIST wala part normal container me rahega */}
//       <div className={styles.container}>
//         <div className={styles.achievementsList}>
//           {filteredData.map((item) => (
//             <AchievementCard 
//               key={item.id} 
//               achievement={item} 
//               onClick={(clickedItem) => setSelectedAchieve(clickedItem)} 
//             />
//           ))}
          
//           {filteredData.length === 0 && (
//             <p style={{ color: "var(--ink3)", textAlign: "center", padding: "40px 0" }}>
//               More achievements coming soon!
//             </p>
//           )}
//         </div>
//       </div>

//       <AchievementModal 
//         data={selectedAchieve} 
//         onClose={() => setSelectedAchieve(null)} 
//       />
//     </section>
//   );
// };

// export default Achievements;








// src/pages/Achievements/Achievements.jsx
import React, { useState, useContext } from 'react';
import styles from './Achievements.module.css';
import AchievementCard from '../../components/AchievementCard/AchievementCard';
import AchievementModal from '../../components/AchievementModal/AchievementModal';
import { PortfolioContext } from '../../../context/PortfolioContext'; // 🌟 Context Import kiya

const Achievements = () => {
  const { portfolioData, loading } = useContext(PortfolioContext);
  const [selectedAchieve, setSelectedAchieve] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '100px 0' }}>Loading milestones... ⏳</div>;
  }

  // 🌟 1. Database se achievements nikalo (Agar khali ho toh empty array)
  // (Assuming aapke db mein 'achievements' array hoga)
  const dbAchievements = portfolioData?.achievements || []; 

  // 🌟 2. Smart Logic: Category ke hisaab se Icon aur Color set karna
  const getIconData = (category) => {
    const cat = category?.toLowerCase() || '';
    if (cat.includes('hackathon')) return { icon: "🏆", iconBg: "#FFF9C4", hoverClass: "hoverYellow" };
    if (cat.includes('rank') || cat.includes('code')) return { icon: "⭐", iconBg: "#E3F2FD", hoverClass: "hoverBlue" };
    if (cat.includes('course') || cat.includes('cert')) return { icon: "📜", iconBg: "#E8F5E9", hoverClass: "hoverGreen" };
    return { icon: "🎯", iconBg: "#FCE4EC", hoverClass: "hoverPink" }; // Default
  };

  // 🌟 3. Data Formatting
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

  // 🌟 4. Dynamic Tabs generate karna based on Database Categories
  const tabOptions = ['All', ...new Set(formattedAchievements.map(a => a.category))];

  // 🌟 5. Filtering
  const filteredData = formattedAchievements.filter(item => 
    activeTab === 'All' || item.category === activeTab
  );

  return (
    <section className={`${styles.achieveSection} fade-up`}>
      
      {/* 🌟 STICKY HEADER */}
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

      {/* 🌟 LIST CONTAINER */}
      <div className={styles.container}>
        <div className={styles.achievementsList}>
          
          {/* List Rendering */}
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <AchievementCard 
                key={item._id} 
                achievement={item} 
                onClick={(clickedItem) => setSelectedAchieve(clickedItem)} 
              />
            ))
          ) : (
            /* 🌟 NAYA: Empty State Message (Jo aapne manga tha) */
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