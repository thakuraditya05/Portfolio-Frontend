






































      



          












              





































import React, { useState, useContext } from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import { PortfolioContext } from '../../../context/PortfolioContext'; 

const Projects = () => {
  const { portfolioData, loading } = useContext(PortfolioContext);
  
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '100px 0' }}>Loading awesome projects... ⏳</div>;
  }

  
  const dbProjects = portfolioData?.projects || [];

  
  const formattedProjects = dbProjects.map((proj, index) => ({
    ...proj,
    num: (index + 1).toString().padStart(2, '0') 
  }));

  
  
  const filterOptions = ['All', ...new Set(formattedProjects.map(p => p.category))];

  
  const filteredProjects = formattedProjects.filter(project => 
    activeFilter === 'All' || project.category === activeFilter
  );

  const handleFilterSelect = (filter) => {
    setActiveFilter(filter);
    setIsDropdownOpen(false);
  };

  return (
    <section className={`${styles.projectsSection} fade-up`}>
      
      
      <div className={styles.stickyHeader}>
        <div className={styles.stickyInner}>
          
          <div className={styles.sectionHeaderTop}>
            <div className={styles.sectionLabel}>Projects</div>

            
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