import React, { useContext } from 'react';
import styles from './AboutInfo.module.css';
import { PortfolioContext } from '../../../context/PortfolioContext';

const AboutInfo = () => {
  const { portfolioData } = useContext(PortfolioContext);
  const profile = portfolioData?.profile;

  const name = profile?.name || 'Aditya Singh';
  const locationParts = [profile?.location?.city, profile?.location?.country].filter(Boolean);
  // const location = locationParts.length > 0 ? locationParts.join(', ') : 'NIT-Bhopal, Bhopal';
  const location = 'NIT-Bhopal, Madhya Pradesh';
  const education = profile?.education?.degree ||  'Electronics and Communication Engineering';
  const Tech_Stack = 'MERN Stack, Data Science & ML';
  const Current_Focus = 'AI Applications & DSA Problem Solving';
  const Highlights = '500+ DSA Problems & Multiple Projects';
  const What_I_Do = 'Build scalable web apps & intelligent systems';

// 2. Current Focus
  const buildDownloadUrl = (url) => {
    if (!url) return '';
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes('res.cloudinary.com') && parsed.pathname.includes('/raw/upload/')) {
        parsed.pathname = parsed.pathname.replace('/raw/upload/', '/raw/upload/fl_attachment/');
        return parsed.toString();
      }
      return url;
    } catch {
      return url;
    }
  };

  const resumeLink = portfolioData?.resume?.resumeUrl || profile?.resumeLink || '';
  const resumeDownloadLink = buildDownloadUrl(resumeLink);
  const hasResume = Boolean(resumeDownloadLink);


  const handleResumeDownload = async (e) => {
    if (!hasResume) return;
    e.preventDefault();
    try {
      const response = await fetch(resumeLink, { mode: 'cors' });
      if (!response.ok) throw new Error('Failed to download resume');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      window.open(resumeLink, '_blank', 'noreferrer',err);
    }
  };

  return (
    <div className={`${styles.aboutInfo} fade-up delay-1`}>
      <div className={styles.infoRow}>
        <span className={styles.infoKey}>Name</span>
        <span className={styles.infoVal}>{name}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.infoKey}>Location</span>
        <span className={styles.infoVal}>{location}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.infoKey}>Education</span>
        <span className={styles.infoVal}>{education}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.infoKey}>Tech Stack</span>
        <span className={styles.infoVal}>{Tech_Stack}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.infoKey}>Current Focus</span>
        <span className={styles.infoVal}>{Current_Focus}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.infoKey}>Highlights</span>
        <span className={styles.infoVal}>{Highlights}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.infoKey}>What I Do</span>
        <span className={`${styles.infoVal} `}>{What_I_Do}</span>
      </div>
      
      <div style={{ marginTop: '28px' }}>
        <a
          href={hasResume ? resumeDownloadLink : '#'}
          className={styles.btnPrimary}
          target={hasResume ? '_blank' : undefined}
          rel={hasResume ? 'noreferrer' : undefined}
          onClick={(e) => {
            if (!hasResume) {
              e.preventDefault();
              return;
            }
            handleResumeDownload(e);
          }}
          aria-disabled={!hasResume}
          style={!hasResume ? { opacity: 0.6, pointerEvents: 'none' } : undefined}
          title={hasResume ? 'Download Resume' : 'Resume not uploaded yet'}
        >
          Download Resume ↓ {hasResume ? '' : '(Coming Soon)'}
        </a>
      </div>
    </div>
  );
};

export default AboutInfo;
