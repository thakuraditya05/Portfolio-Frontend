import React from 'react';
import styles from './ContactLinks.module.css';

const ContactLinks = () => {
  const linksData = [
    { icon: "✉", title: "Email", value: "aditya@example.com", href: "mailto:aditya@example.com" },
    { icon: "in", title: "LinkedIn", value: "linkedin.com/in/aditya-singh", href: "https://linkedin.com" },
    { icon: "🐙", title: "GitHub", value: "github.com/aditya-singh", href: "https://github.com" },
    { icon: "𝕏", title: "Twitter / X", value: "@aditya_dev", href: "https://twitter.com" }
  ];

  return (
    // {`${styles['hero-visual']} fade-up delay-2`}
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