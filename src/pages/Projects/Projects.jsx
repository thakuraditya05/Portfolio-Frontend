import React, { useState } from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectModal from '../../components/ProjectModal/ProjectModal';

const Projects = () => {
  // Modal state manage karne ke liye
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      num: "01 · Featured",
      title: "DevConnect Platform",
      shortDesc: "A developer networking platform with real-time chat, project collaboration, and GitHub integration.",
      fullDesc: "DevConnect is a highly scalable networking platform. It features real-time WebSocket communication, allowing developers to collaborate seamlessly. Handles over 1000+ concurrent users with zero downtime. Built entirely on the MERN stack.",
      stack: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800", // Sample Image
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      num: "02 · Featured",
      title: "ShopEase E-Commerce",
      shortDesc: "Full-featured e-commerce app with Stripe payments, admin dashboard, and real-time inventory.",
      fullDesc: "An end-to-end e-commerce solution. Provides a beautiful storefront for users and a robust admin dashboard for store owners. Integrated with Stripe for secure checkout and PostgreSQL for reliable data storage.",
      stack: ["Next.js", "PostgreSQL", "Stripe", "Redux"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      liveLink: "#",
      githubLink: "#"
    },

    {
      id: 1,
      num: "01 · Featured",
      title: "DevConnect Platform",
      shortDesc: "A developer networking platform with real-time chat, project collaboration, and GitHub integration.",
      fullDesc: "DevConnect is a highly scalable networking platform. It features real-time WebSocket communication, allowing developers to collaborate seamlessly. Handles over 1000+ concurrent users with zero downtime. Built entirely on the MERN stack.",
      stack: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800", // Sample Image
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      num: "02 · Featured",
      title: "ShopEase E-Commerce",
      shortDesc: "Full-featured e-commerce app with Stripe payments, admin dashboard, and real-time inventory.",
      fullDesc: "An end-to-end e-commerce solution. Provides a beautiful storefront for users and a robust admin dashboard for store owners. Integrated with Stripe for secure checkout and PostgreSQL for reliable data storage.",
      stack: ["Next.js", "PostgreSQL", "Stripe", "Redux"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      liveLink: "#",
      githubLink: "#"
    },
    
    // Aap baki projects bhi yahan add kar sakte hain
  ];

  return (
    <section className={`${styles.projectsSection} fade-up`}>
      <div className={styles.container}>
        <div className={styles.sectionLabel}>Projects</div>
        <h2 className={styles.sectionTitle}>Things I've built</h2>
        
        <div className={styles.projectsGrid}>
          {projectsData.map((proj) => (
            <ProjectCard 
              key={proj.id} 
              project={proj} 
              onClick={(clickedProject) => setSelectedProject(clickedProject)} 
            />
          ))}
        </div>
      </div>

      {/* Jab selectedProject null nahi hoga, tabhi ye Modal dikhega */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;