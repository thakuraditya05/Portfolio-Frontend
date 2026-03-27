// // src/pages/Projects/Projects.jsx
// import React, { useState } from 'react';
// import styles from './Projects.module.css';
// import ProjectCard from '../../components/ProjectCard/ProjectCard';
// import ProjectModal from '../../components/ProjectModal/ProjectModal';

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [activeFilter, setActiveFilter] = useState('All');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const filterOptions = ['All', 'Web Development', 'Data Science'];

//   const projectsData = [
//     { id: 1, category: 'Web Development', num: "01", title: "Web Platform A", shortDesc: "Project desc here...", stack: ["React"], image: "#", liveLink: "#", githubLink: "#" },
//     { id: 2, category: 'Data Science', num: "02", title: "ML Model B", shortDesc: "Analysis tool...", stack: ["Python"], image: "#", liveLink: "#", githubLink: "#" },
//     { id: 3, category: 'Web Development', num: "03", title: "Web Platform C", shortDesc: "Project desc here...", stack: ["React"], image: "#", liveLink: "#", githubLink: "#" },
//     { id: 4, category: 'Data Science', num: "04", title: "ML Model D", shortDesc: "Analysis tool...", stack: ["Python"], image: "#", liveLink: "#", githubLink: "#" },
//     { id: 5, category: 'Web Development', num: "01", title: "Web Platform A", shortDesc: "Project desc here...", stack: ["React"], image: "#", liveLink: "#", githubLink: "#" },
//     { id: 6, category: 'Data Science', num: "02", title: "ML Model B", shortDesc: "Analysis tool...", stack: ["Python"], image: "#", liveLink: "#", githubLink: "#" },
//     { id: 7, category: 'Web Development', num: "03", title: "Web Platform C", shortDesc: "Project desc here...", stack: ["React"], image: "#", liveLink: "#", githubLink: "#" },
//     { id: 8, category: 'Data Science', num: "04", title: "ML Model D", shortDesc: "Analysis tool...", stack: ["Python"], image: "#", liveLink: "#", githubLink: "#" },
//     { id: 9, category: 'Web Development', num: "01", title: "Web Platform A", shortDesc: "Project desc here...", stack: ["React"], image: "#", liveLink: "#", githubLink: "#" },
//     { id: 10, category: 'Data Science', num: "02", title: "ML Model B", shortDesc: "Analysis tool...", stack: ["Python"], image: "#", liveLink: "#", githubLink: "#" },
//     { id: 11, category: 'Web Development', num: "03", title: "Web Platform C", shortDesc: "Project desc here...", stack: ["React"], image: "#", liveLink: "#", githubLink: "#" },
//     { id: 12, category: 'Data Science', num: "04", title: "ML Model D", shortDesc: "Analysis tool...", stack: ["Python"], image: "#", liveLink: "#", githubLink: "#" },
//   ];

//   const filteredProjects = projectsData.filter(project => 
//     activeFilter === 'All' || project.category === activeFilter
//   );

//   const handleFilterSelect = (filter) => {
//     setActiveFilter(filter);
//     setIsDropdownOpen(false);
//   };

//   return (
//     <section className={`${styles.projectsSection} fade-up`}>
      
//       {/* 🌟 STICKY HEADER WRAPPER (100% Width) */}
//       <div className={styles.stickyHeader}>
//         <div className={styles.stickyInner}> {/* Text Center karne ke liye */}
          
//           <div className={styles.sectionHeaderTop}>
//             <div className={styles.sectionLabel}>Projects</div>

//             {/* CUSTOM DROPDOWN UI */}
//             <div className={styles.dropdownContainer}>
//               <button 
//                 className={styles.dropdownTrigger}
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
//               >
//                 {activeFilter === 'All' ? 'Filter: All' : activeFilter}
//                 <span className={`${styles.caret} ${isDropdownOpen ? styles.caretRotate : ''}`}>▼</span>
//               </button>
              
//               <div className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.showMenu : ''}`}>
//                 {filterOptions.map((filter) => (
//                   <button
//                     key={filter}
//                     className={`${styles.dropdownItem} ${activeFilter === filter ? styles.selectedItem : ''}`}
//                     onClick={() => handleFilterSelect(filter)}
//                   >
//                     {filter}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <h2 className={styles.sectionTitle}>Things I've built</h2>
//         </div>
//       </div>

//       {/* 🌟 GRID CONTAINER (Centered content) */}
//       <div className={styles.container}>
//         <div className={styles.projectsGrid}>
//           {filteredProjects.map((proj) => (
//             <ProjectCard key={proj.id} project={proj} onClick={(p) => setSelectedProject(p)} />
//           ))}
//         </div>
//       </div>

//       <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
//     </section>
//   );
// };

// export default Projects;



// src/pages/Projects/Projects.jsx
import React, { useState, useContext } from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import { PortfolioContext } from '../../../context/PortfolioContext'; // 🌟 Context Import kiya

const Projects = () => {
  const { portfolioData, loading } = useContext(PortfolioContext);
  
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '100px 0' }}>Loading awesome projects... ⏳</div>;
  }

  // 🌟 1. Database se projects nikalo (Agar khali ho toh empty array)
  const dbProjects = portfolioData?.projects || [];

  // 🌟 2. Projects me automatic "01", "02" number add karo
  const formattedProjects = dbProjects.map((proj, index) => ({
    ...proj,
    num: (index + 1).toString().padStart(2, '0') // 1 ko "01" bana dega
  }));

  // 🌟 3. Filter Categories automatically generate karo (No Hardcoding)
  // Set() use kiya taaki duplicate categories (e.g., 2 Web Dev projects) ek hi baar dikhe
  const filterOptions = ['All', ...new Set(formattedProjects.map(p => p.category))];

  // 🌟 4. Filter logic
  const filteredProjects = formattedProjects.filter(project => 
    activeFilter === 'All' || project.category === activeFilter
  );

  const handleFilterSelect = (filter) => {
    setActiveFilter(filter);
    setIsDropdownOpen(false);
  };

  return (
    <section className={`${styles.projectsSection} fade-up`}>
      
      {/* 🌟 STICKY HEADER WRAPPER */}
      <div className={styles.stickyHeader}>
        <div className={styles.stickyInner}>
          
          <div className={styles.sectionHeaderTop}>
            <div className={styles.sectionLabel}>Projects</div>

            {/* CUSTOM DROPDOWN UI */}
            <div className={styles.dropdownContainer}>
              <button 
                className={styles.dropdownTrigger}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
              >
                {activeFilter === 'All' ? 'Filter: All' : activeFilter}
                <span className={`${styles.caret} ${isDropdownOpen ? styles.caretRotate : ''}`}>▼</span>
              </button>
              
              <div className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.showMenu : ''}`}>
                {filterOptions.map((filter) => (
                  <button
                    key={filter}
                    className={`${styles.dropdownItem} ${activeFilter === filter ? styles.selectedItem : ''}`}
                    onClick={() => handleFilterSelect(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <h2 className={styles.sectionTitle}>Things I've built</h2>
        </div>
      </div>

      {/* 🌟 GRID CONTAINER */}
      <div className={styles.container}>
        <div className={styles.projectsGrid}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((proj) => (
              <ProjectCard key={proj._id || proj.id} project={proj} onClick={(p) => setSelectedProject(p)} />
            ))
          ) : (
            <p style={{ textAlign: 'center', color: 'var(--ink2)', gridColumn: '1 / -1' }}>No projects found in this category.</p>
          )}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;