// import React from 'react';
// import styles from './AboutText.module.css';

// const AboutText = () => {
//   return (
//     // Animation add ki global classes se
//     <div className={`${styles.aboutText} fade-up`}>
//       <div className={styles.sectionLabel}>About Me</div>
//       <h2 className={styles.sectionTitle}>A developer who cares about craft</h2>
//       <p>
//         Hi! I'm Aditya, a Full Stack Developer based in Nit-Bhopal. I love turning complex problems into simple, beautiful, and intuitive digital experiences.
//       </p>
//       <blockquote className={styles.aboutQuote}>
//         "Code should be written to be read by humans and only incidentally for machines."
//       </blockquote>
//       <p>
//         I specialize in the MERN stack and love working across the entire product lifecycle — from designing system architecture to deploying production applications. I'm also an active competitive programmer and love solving algorithmic challenges.
//       </p>
//     </div>
//   );
// };

// export default AboutText;

import React from 'react';
import styles from './AboutText.module.css';

const AboutText = () => {
  return (
    <div className={`${styles.aboutText} fade-up`}>
      <div className={styles.sectionLabel}>About Me</div>
      <h2 className={styles.sectionTitle}>
        A developer driven by problem-solving and intelligent systems
      </h2>

      <p>
        Hi! I'm Aditya, a Full Stack Developer based in NIT Bhopal. I enjoy building scalable web applications and solving complex real-world problems through clean and efficient code.
      </p>

      <blockquote className={styles.aboutQuote}>
        "Code should be written to be read by humans and only incidentally for machines."
      </blockquote>

      <p>
        I specialize in the MERN stack and have a strong interest in Data Science and Machine Learning. Alongside development, I actively practice Competitive Programming, which helps me strengthen my problem-solving skills and algorithmic thinking.
      </p>

      <p>
        I love working across the full spectrum of technology — from designing backend systems and building intuitive UIs to exploring data-driven insights and intelligent models.
      </p>
    </div>
  );
};

export default AboutText;