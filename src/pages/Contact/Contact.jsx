import React from 'react';
import styles from './Contact.module.css';
import ContactHeader from '../../components/ContactHeader/ContactHeader';
import ContactLinks from '../../components/ContactLinks/ContactLinks';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../layouts/Footer/Footer';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactGrid}>
          
          <div>
            <ContactHeader />
            <ContactLinks />
          </div>
          
   
          <div>
            <ContactForm />
          </div>
          
        </div>
      </div>

      <Footer/>
    </section>
  );
};

export default Contact;