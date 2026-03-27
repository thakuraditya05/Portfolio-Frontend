// import React from 'react';
// // import styles from '../../pages/Home/Home.module.css'; // ✅ CSS Module import
// import styles from './HeroText.module.css'; // ✅ CSS Module import

// const HeroText = () => {
//   return (
//     <div>
//       <div className={`${styles['hero-tag']} fade-up`}>Available for work</div>
//       <h1 className={`${styles['hero-name']} fade-up delay-1`}>Aditya<br/><em>Singh</em></h1>
//       <p className={`${styles['hero-role']} fade-up delay-2`}>Full Stack Developer · Indore, India</p>
//       <p className={`${styles['hero-desc']} fade-up delay-3`}>
//         I build clean, fast, and scalable web applications — from pixel-perfect UIs to robust backend systems. Passionate about great developer experience and elegant code.
//       </p>
//       <div className={`${styles['hero-actions']} fade-up delay-4`}>
//         <a href="#projects" className={styles['btn-primary']}>View My Work</a>
//         <a href="#contact" className={styles['btn-outline']}>Let's Talk</a>
//       </div>
//     </div>
//   );
// };

// export default HeroText;


import React from 'react';
import styles from './HeroText.module.css';

// 🌟 Prop catch kiya
const HeroText = ({ profile }) => {
  // Name ko 2 hisso mein todna (e.g., "Thakur Aditya" aur "Singh Chauhan")
  const fullName = profile?.name || "Aditya Singh";
  const nameParts = fullName.split(" ");
  const firstName = nameParts[0]; 
  const lastName = nameParts.slice(1).join(" "); // Baaki ka bacha hua naam

  return (
    <div>
      <div className={`${styles['hero-tag']} fade-up`}>Available for work</div>
      
      {/* 🌟 Dynamic Name */}
      <h1 className={`${styles['hero-name']} fade-up delay-1`}>
        {firstName}<br/><em>{lastName}</em>
      </h1>
      
      {/* 🌟 Dynamic Location */}
      <p className={`${styles['hero-role']} fade-up delay-2`}>
        Full Stack Developer· {profile?.location?.city || "Bhopal"}, {profile?.location?.country || "India"}
      </p>
      
      {/* 🌟 Dynamic Bio */}
      <p className={`${styles['hero-desc']} fade-up delay-3`}>
        {profile?.bio || "I build clean, fast, and scalable web applications — from pixel-perfect UIs to robust backend systems."}
      </p>
      
      <div className={`${styles['hero-actions']} fade-up delay-4`}>
        <a href="/projects" className={styles['btn-primary']}>View My Work</a>
        <a href="/contact" className={styles['btn-outline']}>Let's Talk</a>
      </div>
    </div>
  );
};

export default HeroText;