import React from 'react';
import styles from './AboutText.module.css';

const AboutText = () => {
  return (
    // Animation add ki global classes se
    <div className={`${styles.aboutText} fade-up`}>
      <div className={styles.sectionLabel}>About Me</div>
      <h2 className={styles.sectionTitle}>A developer who cares about craft</h2>
      <p>
        Hi! I'm Aditya, a Full Stack Developer based in Indore. I love turning complex problems into simple, beautiful, and intuitive digital experiences.
      </p>
      <blockquote className={styles.aboutQuote}>
        "Code should be written to be read by humans and only incidentally for machines."
      </blockquote>
      <p>
        I specialize in the MERN stack and love working across the entire product lifecycle — from designing system architecture to deploying production applications. I'm also an active competitive programmer and love solving algorithmic challenges.
      </p>
    </div>
  );
};

export default AboutText;