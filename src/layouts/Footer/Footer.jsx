import React, { useEffect, useRef } from 'react'; 
import styles from './Footer.module.css';
import { SignedIn, SignedOut, SignInButton, useUser, useClerk } from '@clerk/clerk-react'; 
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'; 

export default function Footer() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate(); 
  
  
  const isLoggingOut = useRef(false); 

  const isAdmin = user?.primaryEmailAddress?.emailAddress === "thakuradityasinghchauhan22@gmail.com";

  useEffect(() => {
    
    if (user && !isAdmin && !isLoggingOut.current) {
      
      isLoggingOut.current = true; 

      
      toast.error("Unauthorized Access! Aap Admin nahi hain.", {
        duration: 3000,
        position: 'bottom-center',
      }); 
      
      
      setTimeout(() => {
        signOut().then(() => {
          navigate('/'); 
          isLoggingOut.current = false; 
        });
      }, 2000); 

    }
  }, [user, isAdmin, signOut, navigate]);

  return (
    <footer className={styles.footer}>
      <span className={styles.footerLogo}>Aditya Singh</span>
      
      <span className={styles.footerCopy}>
        © 2026 · Built with passion
        
        <SignedOut>
          <SignInButton mode="modal">
            <span className={styles.hiddenDot}>●</span>
          </SignInButton>
        </SignedOut>
      </span>

      <SignedIn>
        {isAdmin && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Link to="/admin" className={styles.adminBadge}>Edit ✏️</Link>
            
            <button 
              onClick={() => {
                toast.success("Logged out successfully!");
                signOut();
                navigate('/'); 
              }} 
              className={styles.adminBadge} 
              style={{ cursor: 'pointer', border: 'none', fontFamily: 'inherit' }}
              title="Logout"
            >
              🔴
            </button>
          </div>
        )}
      </SignedIn>
    </footer>
  );
}