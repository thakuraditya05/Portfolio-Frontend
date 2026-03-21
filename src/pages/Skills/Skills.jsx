import styles from './Skills.module.css';
import SkillCard from '../../components/SkillCard/SkillCard';


export default function Skills(){
    const skillsData = [
    {
      icon: '⚡', iconClass: 'iconFe', title: 'Frontend',
      tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'HTML5 / CSS3']
    },
    {
      icon: '🔧', iconClass: 'iconBe', title: 'Backend',
      tags: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'JWT Auth', 'Socket.io']
    },
    {
      icon: '🗄️', iconClass: 'iconDb', title: 'Databases',
      tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase']
    },
    {
      icon: '🛠️', iconClass: 'iconTools', title: 'Tools & DevOps',
      tags: ['Git / GitHub', 'Docker', 'Linux', 'Postman', 'VS Code']
    },
    {
      icon: '☁️', iconClass: 'iconCloud', title: 'Cloud & Deployment',
      tags: ['AWS EC2', 'Vercel', 'Netlify', 'Railway', 'Nginx']
    },
    {
      icon: '🧠', iconClass: 'iconSoft', title: 'CS Fundamentals',
      tags: ['DSA', 'OOP', 'DBMS', 'OS', 'System Design']
    }
  ];

return (
    <section className={`${styles.skillsSection}  fade-up`} >
      <div className={styles.container}>
        <div className={styles.sectionLabel}>Skills</div>
        <h2 className={styles.sectionTitle}>What I work with</h2>
        
        <div className={styles.skillsGrid}>
          {/* Data ko map karke SkillCard render kar rahe hain */}
          {skillsData.map((skill, index) => (
            <SkillCard 
              key={index}
              icon={skill.icon}
              iconClass={skill.iconClass}
              title={skill.title}
              tags={skill.tags}
            />
          ))}
        </div>
        
      </div>
    </section>
  );

}