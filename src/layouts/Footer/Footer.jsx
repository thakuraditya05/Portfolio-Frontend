import React, { useEffect, useRef } from 'react'; // 🌟 1. useRef import kiya
import styles from './Footer.module.css';
import { SignedIn, SignedOut, SignInButton, useUser, useClerk } from '@clerk/clerk-react'; 
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'; 

export default function Footer() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate(); 
  
  // 🌟 2. Ek 'Lock' banaya taaki effect baar-baar na chale
  const isLoggingOut = useRef(false); 

  const isAdmin = user?.primaryEmailAddress?.emailAddress === "thakuradityasinghchauhan22@gmail.com";

  useEffect(() => {
    // Agar galat user hai AUR pehle se logout process shuru nahi hua hai
    if (user && !isAdmin && !isLoggingOut.current) {
      
      isLoggingOut.current = true; // 🌟 Lock laga diya (taaki 3 baar reload na ho)

      // 1. Shanti se Toast dikhao
      toast.error("Unauthorized Access! Aap Admin nahi hain.", {
        duration: 3000,
        position: 'bottom-center',
      }); 
      
      // 2. 2 Second (2000ms) ka wait karo, uske baad signout karo
      setTimeout(() => {
        signOut().then(() => {
          navigate('/'); // Home par bhejo
          isLoggingOut.current = false; // Lock wapas khol do
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