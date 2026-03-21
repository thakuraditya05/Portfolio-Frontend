import React from 'react';
import styles from './ContactHeader.module.css';

const ContactHeader = () => {
  return (
    <div className={` fade-up`}>

      <div className={`${styles.sectionLabel}`} >Contact</div>
      <h2 className={styles.sectionTitle}>Let's build something together</h2>
      <p className={styles.contactDesc}>
        Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open.
      </p>
    </div>
  );
};

export default ContactHeader;