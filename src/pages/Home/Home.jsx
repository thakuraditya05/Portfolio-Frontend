import React from 'react';
import HeroText from '../../components/HeroText/HeroText';
import HeroCard from '../../components/HeroCard/HeroCard';
import styles from './Home.module.css';



const Home = () => {
  return (
    <section className={styles.hero}>
      <div className={styles['bg-dots']}></div>
      <div className={`container ${styles['hero-grid']}`}>
        <HeroText />
        <HeroCard />
      </div>
    </section>
  );
};

export default Home;