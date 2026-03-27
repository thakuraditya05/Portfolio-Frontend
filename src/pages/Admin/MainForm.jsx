import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Navigate, Link } from 'react-router-dom'; 
import ProfileForm from './ProfileForm';
import ProjectForm from './ProjectForm';
import SkillForm from './SkillForm';
import ResumeForm from './ResumeForm';
import AchievementForm from './AchievementForm';
import styles from './Admin.module.css';

const MainForm = () => {
  const { user, isLoaded } = useUser();
  const [activeTab, setActiveTab] = useState('profile');

  // 1. Loading State
  if (!isLoaded) return <div style={{ textAlign: 'center', marginTop: '100px', fontSize: '18px' }}>Loading Admin Panel... â³</div>;

  // 2. Security Check (Aapka naya Gmail)
  const currentEmail = user?.primaryEmailAddress?.emailAddress;
  const isAdmin = currentEmail === "thakuradityasinghchauhan22@gmail.com";

  if (!isAdmin) {
    return <Navigate to="/" />; // Agar koi aur ghusne ki koshish kare, toh Home par fek do
  }

  return (
    <div className={styles.adminContainer}>
      
      {/* ðŸŒŸ SIDEBAR */}
      <aside className={styles.sidebar}>
        <h2>Admin Panel</h2>
        <nav>
          <button 
            className={activeTab === 'profile' ? styles.active : ''} 
            onClick={() => setActiveTab('profile')}
          >
            ðŸ‘¤ Profile Info
          </button>
          <button 
            className={activeTab === 'projects' ? styles.active : ''} 
            onClick={() => setActiveTab('projects')}
          >
            ðŸš€ Add Project
          </button>
          <button 
            className={activeTab === 'skills' ? styles.active : ''} 
            onClick={() => setActiveTab('skills')}
          >
            ðŸ’» Manage Skills
          </button>
          <button 
            className={activeTab === 'achievements' ? styles.active : ''} 
            onClick={() => setActiveTab('achievements')}
          >
            ðŸ† Add Achievement
          </button>
          <button 
            className={activeTab === 'resume' ? styles.active : ''} 
            onClick={() => setActiveTab('resume')}
          >
            ðŸ“„ Upload Resume
          </button>
        </nav>

        {/* ðŸŒŸ BACK TO WEBSITE BUTTON */}
        <div style={{ marginTop: 'auto', paddingTop: '40px' }}>
          <Link 
            to="/" 
            style={{ 
              color: '#888', textDecoration: 'none', display: 'flex', 
              alignItems: 'center', gap: '10px', fontSize: '15px', transition: '0.3s' 
            }} 
            onMouseOver={(e) => e.target.style.color = 'white'} 
            onMouseOut={(e) => e.target.style.color = '#888'}
          >
            â¬…ï¸ Back to Website
          </Link>
        </div>
      </aside>

      {/* ðŸŒŸ MAIN FORM AREA */}
      <main className={styles.formContent}>
        
        {/* Forms hamesha render honge, par CSS (display: none) se hide/show honge taaki data gayab na ho */}
        <div style={{ display: activeTab === 'profile' ? 'block' : 'none' }}>
          <ProfileForm />
        </div>
        
        <div style={{ display: activeTab === 'projects' ? 'block' : 'none' }}>
          <ProjectForm />
        </div>
        
        <div style={{ display: activeTab === 'skills' ? 'block' : 'none' }}>
          <SkillForm />
        </div>

        <div style={{ display: activeTab === 'achievements' ? 'block' : 'none' }}>
          <AchievementForm />
        </div>

        <div style={{ display: activeTab === 'resume' ? 'block' : 'none' }}>
          <ResumeForm />
        </div>

      </main>
    </div>
  );
};

export default MainForm;
