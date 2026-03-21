import styles from './About.module.css'
import AboutText from '../../components/AboutText/AboutText.jsx'  
import AboutInfo from '../../components/AboutInfo/AboutInfo.jsx'



export default function About(){
    return (
// mainStyles ko as is use karenge
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          <AboutText />
          <AboutInfo />
        </div>
      </div>
    </section>
    );
}