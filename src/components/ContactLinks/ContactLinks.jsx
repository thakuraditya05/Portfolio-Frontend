// import React from 'react';
// import styles from './ContactLinks.module.css';

// const ContactLinks = ({ profile }) => {
//   // 🌟 Backend se aaya hua email, agar loading me time lage toh default value dikhegi
//   const userEmail = profile?.email || "aditya@example.com";

//   // Array ke andar humne apna dynamic 'userEmail' variable pass kar diya hai
//   const linksData = [
//     { 
//       icon: "✉", 
//       title: "Email", 
//       value: userEmail, // 🌟 Dynamic Value
//       href: `mailto:${userEmail}` // 🌟 Click karne par asli email par mail compose hoga
//     },
//     { 
//       icon: "in", 
//       title: "LinkedIn", 
//       value: "linkedin.com/in/aditya-singh", 
//       href: "https://linkedin.com" 
//     },
//     { 
//       icon: "🐙", 
//       title: "GitHub", 
//       value: "github.com/aditya-singh", 
//       href: "https://github.com/aditya-singh" 
//     },
//     { 
//       icon: "𝕏", 
//       title: "Twitter / X", 
//       value: "@aditya_dev", 
//       href: "https://twitter.com/aditya_dev" 
//     }
//   ];

//   return (
//     <div className={`${styles.contactLinks} fade-up`} >
//       {linksData.map((link, index) => (
//         <a key={index} href={link.href} target="_blank" rel="noreferrer" className={styles.contactLink}>
//           <div className={styles.contactLinkIcon}>{link.icon}</div>
//           <div>
//             <div className={styles.linkTitle}>{link.title}</div>
//             <div className={styles.linkValue}>{link.value}</div>
//           </div>
//         </a>
//       ))}
//     </div>
//   );
// };

// export default ContactLinks;

// src/components/ContactLinks/ContactLinks.jsx
import React from 'react';
import styles from './ContactLinks.module.css';

const ContactLinks = ({ profile }) => {
  // Aapka naya primary email
  const userEmail = profile?.email || "thakuradityasinghchauhan22@gmail.com";
  // WhatsApp number (country code +91 lagana zaroori hai)
  const whatsappNumber = "919569350311"; 

  const linksData = [
    { 
      icon: "✉", 
      title: "Gmail", 
      value: userEmail, 
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}`
    },
    { 
      icon: "in", 
      title: "LinkedIn", 
      value: "linkedin.com/in/thakuraditya05", 
      href: "https://www.linkedin.com/in/thakuraditya05/" 
    },
    { 
      icon: "🐙", 
      title: "GitHub (Primary)", 
      value: "github.com/thakuraditya05", 
      href: "https://github.com/thakuraditya05" 
    },
    { 
      icon: "🐙", 
      title: "GitHub (Secondary)", 
      value: "github.com/thakur-aditya05", 
      href: "https://github.com/thakur-aditya05" 
    },
    { 
      icon: "💬", 
      title: "WhatsApp", 
      value: "Chat with me",
      href: `https://wa.me/${whatsappNumber}` 
    }
  ];

  return (
    <div className={`${styles.contactLinks} fade-up`} >
      {linksData.map((link, index) => (
        <a key={index} href={link.href} target="_blank" rel="noreferrer" className={styles.contactLink}>
          <div className={styles.contactLinkIcon}>{link.icon}</div>
          <div>
            <div className={styles.linkTitle}>{link.title}</div>
            <div className={styles.linkValue}>{link.value}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContactLinks;