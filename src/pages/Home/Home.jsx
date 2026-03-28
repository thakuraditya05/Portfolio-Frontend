
import React, { useContext } from 'react';
import HeroText from '../../components/HeroText/HeroText';
import HeroCard from '../../components/HeroCard/HeroCard';
import styles from './Home.module.css';


import { PortfolioContext } from '../../../context/PortfolioContext.jsx'; 

const Home = () => {
  
  const { portfolioData, loading } = useContext(PortfolioContext);

  if (loading) {
    return <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading  awesome profile... ⏳</div>;
  }

  
  const profile = portfolioData?.profile;

  return (
    <section className={styles.hero}>
      <div className={styles['bg-dots']}></div>
      <div className={`container ${styles['hero-grid']}`}>
        
        <HeroText profile={profile} />
        <HeroCard profile={profile} />
      </div>
    </section>
  );
};

export default Home;