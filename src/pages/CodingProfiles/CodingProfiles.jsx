// import React, { useContext, useState } from 'react';
// import styles from './CodingProfiles.module.css';
// import CodingCard from '../../components/CodingCard/CodingCard';
// import CodingModal from '../../components/CodingModal/CodingModal';
// import { PortfolioContext } from '../../../context/PortfolioContext';

// const CodingProfiles = () => {
//   const { portfolioData, loading } = useContext(PortfolioContext);
//   const [selectedProfile, setSelectedProfile] = useState(null);

//   if (loading) {
//     return <div style={{ textAlign: 'center', padding: '100px 0' }}>Loading coding profiles... â³</div>;
//   }

//   const rawProfiles = portfolioData?.codingProfiles || portfolioData?.profile?.codingProfiles || [];
//   const profilesData = rawProfiles.map((profile) => ({
//     ...profile,
//     stats: Array.isArray(profile?.stats) ? profile.stats : []
//   }));

//   return (
//     <section className={`${styles.codingSection} fade-up`}>
//       <div className={styles.container}>
//         <div className={styles.sectionLabel}>Coding Profiles</div>
//         <h2 className={styles.sectionTitle}>Where I compete & learn</h2>
        
//         <div className={styles.codingGrid}>
//           {profilesData.map((profile, index) => (
//             <CodingCard 
//               key={profile._id || profile.id || profile.platform || index}
//               profile={profile} 
//               onClick={(clickedProfile) => setSelectedProfile(clickedProfile)} 
//             />
//           ))}
//         </div>
//       </div>

//       <CodingModal 
//         profile={selectedProfile} 
//         onClose={() => setSelectedProfile(null)} 
//       />
//     </section>
//   );
// };

// export default CodingProfiles;

import React, { useState } from 'react';
import styles from './CodingProfiles.module.css';
import CodingCard from '../../components/CodingCard/CodingCard';
import CodingModal from '../../components/CodingModal/CodingModal';

const CodingProfiles = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  // 🌟 Pura data hardcoded hai yahan
  const profilesData = [
    {
      id: 1, platform: "LeetCode", logo: "🟨", handle: "@thakur-aditya05",
      hoverClass: "hoverLeetcode",
      badgeText: "Top 20% Global", badgeBg: "#FFF9C4", badgeColor: "#B7791F",
      stats: [ { value: "400+", label: "Solved" }, { value: "1560+", label: "Rating" } ],
      fullDesc: "Consistent problem solver with a focus on Dynamic Programming and Graphs. Participated in 10+ weekly contests, maintaining a continuous coding streak.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      link: "https://leetcode.com/u/thakur-aditya05/"
    }, 
    {
      id: 2, platform: "CodeChef", logo: "🍴", handle: "@thakuraditya05",
      hoverClass: "hoverCodechef",
      badgeText: "2 Star", badgeBg: "#E8F5E9", badgeColor: "#276749",
      stats: [ { value: "1420+", label: "Rating" }, { value: "2★", label: "Rank" } ],
      fullDesc: "Active participant in Starters and Long Challenges. Strong grasp of mathematical algorithms and greedy approaches.",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
      link: "https://www.codechef.com/users/thakuraditya05"
    },
    { // https://codeforces.com/profile/
      id: 3, platform: "Codeforces", logo: "💻", handle: "@thakur.aditya05",
      hoverClass: "hoverCodeforces",
      badgeText: "newbie", badgeBg: "#E8EAF6", badgeColor: "#3730A3",
      stats: [ { value: "700+", label: "Rating" }, { value: "15+", label: "Solved" } ],
      fullDesc: "Regularly competing in Div.2, Div.3 and Div.4 rounds. Focused on improving speed and accuracy under pressure.",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?auto=format&fit=crop&q=80&w=800",
      link: "https://codeforces.com/profile/thakur.aditya05"
    },
    {  // https://github.com/thakuraditya05
      id: 4, platform: "GitHub", logo: "🐙", handle: "@thakuraditya05",
      hoverClass: "hoverGithub",
      badgeText: "Open Source", badgeBg: "#F1F0EC", badgeColor: "#5A574F",
      stats: [ { value: "25+", label: "Repos" }, { value: "120+", label: "Commits" } ],
      fullDesc: "Passionate about open-source contributions. Building scalable web apps and sharing modular UI components with the community.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/thakuraditya05"
    },
    // {
    //   id: 5, platform: "HackerRank", logo: "💚", handle: "@aditya_s",
    //   hoverClass: "hoverHackerrank",
    //   badgeText: "5 Star", badgeBg: "#E8F5E9", badgeColor: "#276749",
    //   stats: [ { value: "5★", label: "Problem Solving" } ],
    //   fullDesc: "Achieved maximum stars in Problem Solving and SQL modules. Strong fundamentals in basic data structures.",
    //   image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800",
    //   link: "https://hackerrank.com"
    // },
    {
      id: 6, platform: "GeeksforGeeks", logo: "🟩", handle: "@thakuradityasiff6h",
      hoverClass: "hoverGfg",
      badgeText: "Working Hard", badgeBg: "#E8F5E9", badgeColor: "#276749",
      stats: [ { value: "50+", label: "Problems" } ],
      fullDesc: "Topped the institute leaderboard by consistently solving the 'Problem of the Day' and participating in job-a-thons.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
      link: "https://www.geeksforgeeks.org/profile/thakuradityasiff6h"
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