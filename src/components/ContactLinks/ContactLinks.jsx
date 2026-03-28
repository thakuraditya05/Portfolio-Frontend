
import React from 'react';
import styles from './ContactLinks.module.css';

const ContactLinks = ({ profile }) => {
  
  const userEmail = profile?.email || "thakuradityasinghchauhan22@gmail.com";
  
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
      title: "GitHub (Project GitHub)", 
      value: "github.com/thakuraditya05", 
      href: "https://github.com/thakuraditya05" 
    },
    { 
      icon: "🐙", 
      title: "GitHub (Notes GitHub)", 
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