// src/components/ContactForm/ContactForm.jsx
import React from 'react';
import styles from './ContactForm.module.css';
import toast, { Toaster } from 'react-hot-toast'; // 🌟 Toast library import ki

const ContactForm = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    
    // 🌟 1. Loading Toast dikhao aur uski ID save kar lo
    const toastId = toast.loading("Sending message... ⏳");

    const formData = new FormData(event.target);
    formData.append("access_key", "87e71597-c42b-431b-9980-f92adf5b9178"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        // 🌟 2. Loading wale toast ko Success me badal do
        toast.success("Message Sent Successfully! I'll get back to you soon.", {
          id: toastId, // Ye ID batati hai ki purane wale ko hi update karna hai
          duration: 4000,
        });
        event.target.reset(); // Form clear kar do
      } else {
        // 🌟 3. Agar error aaye toh Error toast dikhao
        console.log("Error", data);
        toast.error("Something went wrong. Please try again.", { id: toastId });
      }
    } catch (error) {
      toast.error("Network error! Please try again.", { id: toastId });
    }
  };

  return (
    <>
      {/* 🌟 NAYA: Toaster component yahan rakhna zaroori hai tabhi popup dikhega */}
      <Toaster position="bottom-right" reverseOrder={false} />

      <form className={`${styles.contactFormBox} fade-up delay-2`} onSubmit={onSubmit}>
        
        <div className={styles.formGroup}>
          <label>Name</label>
          <input type="text" name="name" className={styles.formInput} placeholder="Your full name" required />
        </div>
        
        <div className={styles.formGroup}>
          <label>Email</label>
          <input type="email" name="email" className={styles.formInput} placeholder="your@email.com" required />
        </div>
        
        <div className={styles.formGroup}>
          <label>Message</label>
          <textarea name="message" rows="5" className={styles.formInput} placeholder="Tell me about your project..." required></textarea>
        </div>
        
        <button type="submit" className={styles.btnSend}>Send Message →</button>
        
      </form>
    </>
  );
};

export default ContactForm;