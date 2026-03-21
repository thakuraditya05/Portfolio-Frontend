import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <form className={`${styles.contactFormBox}  fade-up delay-2`} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.formGroup}>
        <label>Name</label>
        <input type="text" className={styles.formInput} placeholder="Your full name" required />
      </div>
      
      <div className={styles.formGroup}>
        <label>Email</label>
        <input type="email" className={styles.formInput} placeholder="your@email.com" required />
      </div>
      
      <div className={styles.formGroup}>
        <label>Message</label>
        <textarea rows="5" className={styles.formInput} placeholder="Tell me about your project..." required></textarea>
      </div>
      
      <button type="submit" className={styles.btnSend}>Send Message →</button>
    </form>
  );
};

export default ContactForm;