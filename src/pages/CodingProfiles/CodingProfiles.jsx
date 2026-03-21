import React, { useState } from 'react';
import styles from './CodingProfiles.module.css';
import CodingCard from '../../components/CodingCard/CodingCard';
import CodingModal from '../../components/CodingModal/CodingModal';

const CodingProfiles = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const profilesData = [
    {
      id: 1, platform: "LeetCode", logo: "🟨", handle: "@aditya_singh",
      hoverClass: "hoverLeetcode",
      badgeText: "Top 5% Global", badgeBg: "#FFF9C4", badgeColor: "#B7791F",
      stats: [ { value: "500+", label: "Solved" }, { value: "1900", label: "Rating" } ],
      fullDesc: "Consistent problem solver with a focus on Dynamic Programming and Graphs. Participated in 50+ weekly contests, maintaining a steady rating increase.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      link: "https://leetcode.com"
    },
    {
      id: 2, platform: "CodeChef", logo: "🍴", handle: "@aditya_dev",
      hoverClass: "hoverCodechef",
      badgeText: "3 Star", badgeBg: "#E8F5E9", badgeColor: "#276749",
      stats: [ { value: "1750", label: "Rating" }, { value: "3★", label: "Rank" } ],
      fullDesc: "Active participant in Starters and Long Challenges. Strong grasp of mathematical algorithms and greedy approaches.",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
      link: "https://codechef.com"
    },
    {
      id: 3, platform: "Codeforces", logo: "💻", handle: "@aditya_cf",
      hoverClass: "hoverCodeforces",
      badgeText: "Specialist", badgeBg: "#E8EAF6", badgeColor: "#3730A3",
      stats: [ { value: "1550", label: "Rating" }, { value: "300+", label: "Solved" } ],
      fullDesc: "Regularly competing in Div.2 and Div.3 rounds. Focused on improving speed and accuracy under pressure.",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?auto=format&fit=crop&q=80&w=800",
      link: "https://codeforces.com"
    },
    {
      id: 4, platform: "GitHub", logo: "🐙", handle: "@aditya-singh",
      hoverClass: "hoverGithub",
      badgeText: "Open Source", badgeBg: "#F1F0EC", badgeColor: "#5A574F",
      stats: [ { value: "40+", label: "Repos" }, { value: "1.2k", label: "Commits" } ],
      fullDesc: "Passionate about open-source contributions. Building scalable web apps and sharing modular UI components with the community.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com"
    },
    {
      id: 5, platform: "HackerRank", logo: "💚", handle: "@aditya_s",
      hoverClass: "hoverHackerrank",
      badgeText: "5 Star", badgeBg: "#E8F5E9", badgeColor: "#276749",
      stats: [ { value: "5★", label: "Problem Solving" } ],
      fullDesc: "Achieved maximum stars in Problem Solving and SQL modules. Strong fundamentals in basic data structures.",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800",
      link: "https://hackerrank.com"
    },
    {
      id: 6, platform: "GeeksforGeeks", logo: "🟩", handle: "@aditya_singh",
      hoverClass: "hoverGfg",
      badgeText: "Institute Rank 1", badgeBg: "#E8F5E9", badgeColor: "#276749",
      stats: [ { value: "350+", label: "Problems" } ],
      fullDesc: "Topped the institute leaderboard by consistently solving the 'Problem of the Day' and participating in job-a-thons.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
      link: "https://gfg.com"
    }
  ];

  return (
    <section className={`${styles.codingSection} fade-up`}>
      <div className={styles.container}>
        <div className={styles.sectionLabel}>Coding Profiles</div>
        <h2 className={styles.sectionTitle}>Where I compete & learn</h2>
        
        <div className={styles.codingGrid}>
          {profilesData.map((profile) => (
            <CodingCard 
              key={profile.id} 
              profile={profile} 
              onClick={(clickedProfile) => setSelectedProfile(clickedProfile)} 
            />
          ))}
        </div>
      </div>

      <CodingModal 
        profile={selectedProfile} 
        onClose={() => setSelectedProfile(null)} 
      />
    </section>
  );
};

export default CodingProfiles;