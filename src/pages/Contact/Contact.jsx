import React from 'react';
import styles from './Contact.module.css';
import ContactHeader from '../../components/ContactHeader/ContactHeader';
import ContactLinks from '../../components/ContactLinks/ContactLinks';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../layouts/Footer/Footer';


import  { useContext } from 'react';
import { PortfolioContext } from '../../../context/PortfolioContext.jsx'; // Path apne hisaab se adjust karein


const Contact = () => {

  const { portfolioData, loading } = useContext(PortfolioContext);

if (loading) {
    return <div style={{ padding: '100px 5vw', textAlign: 'center' }}>Loading your awesome portfolio...</div>;
  }

const profile = portfolioData?.profile;

  return (


    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactGrid}>
          
          <div>
            <ContactHeader />
            <ContactLinks profile={profile} />
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