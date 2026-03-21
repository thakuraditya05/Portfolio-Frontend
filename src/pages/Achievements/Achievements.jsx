import React, { useState } from 'react';
import styles from './Achievements.module.css';
import AchievementCard from '../../components/AchievementCard/AchievementCard';
import AchievementModal from '../../components/AchievementModal/AchievementModal';

const Achievements = () => {
  const [selectedAchieve, setSelectedAchieve] = useState(null);

  const achievementsData = [
    {
      id: 1,
      icon: "🏆", iconBg: "#FFF9C4", hoverClass: "hoverYellow",
      title: "Smart India Hackathon — Finalist",
      shortDesc: "Reached national finals among 10,000+ teams.",
      year: "2024",
      fullDesc: "We built a real-time disaster management platform in a continuous 36-hour coding sprint. The platform integrated satellite data to predict flood zones and alert local authorities. Recognized by the Ministry of Education for innovative use of AI.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
      link: "#",
      linkText: "View Certificate ↗"
    },
    {
      id: 2,
      icon: "🎯", iconBg: "#E8F5E9", hoverClass: "hoverGreen",
      title: "LeetCode — Top 5% Global",
      shortDesc: "Solved 500+ problems with a max rating of 1900+.",
      year: "2023–24",
      fullDesc: "Consistently participated in weekly contests. Specialized in Dynamic Programming and Graph algorithms. Ranked in the top 5% globally out of millions of active competitive programmers.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
      link: "#",
      linkText: "View LeetCode Profile ↗"
    },
    {
      id: 3,
      icon: "🌟", iconBg: "#E3F2FD", hoverClass: "hoverBlue",
      title: "Google Developer Student Club — Tech Lead",
      shortDesc: "Led a team of 15 developers & mentored 100+ students.",
      year: "2023",
      fullDesc: "Organized over 10 workshops on modern web development (MERN stack, Next.js). Managed club projects and helped junior students land their first tech internships.",
      image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&q=80&w=800",
      link: "#",
      linkText: "View Event Highlights ↗"
    }
  ];

  return (
    <section className={`${styles.achieveSection} fade-up`}>
      <div className={styles.container}>
        <div className={styles.sectionLabel}>Achievements</div>
        <h2 className={styles.sectionTitle}>Milestones & recognition</h2>
        
        <div className={styles.achievementsList}>
          {achievementsData.map((item) => (
            <AchievementCard 
              key={item.id} 
              achievement={item} 
              onClick={(clickedItem) => setSelectedAchieve(clickedItem)} 
            />
          ))}
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