import React from 'react';
import styles from './ContactForm.module.css';
import toast, { Toaster } from 'react-hot-toast'; 

const ContactForm = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    
    
    const formData = new FormData(event.target);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    
    if (!name || !email || !message) {
      toast.error("Please fill in all the fields! ✍️");
      return; 
    }

    
    
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
    
    if (!gmailPattern.test(email)) {
      toast.error("Please enter a valid @gmail.com address! 📧");
      return; 
    }

    
    const toastId = toast.loading("Sending message... ⏳");

    formData.append("access_key", "87e71597-c42b-431b-9980-f92adf5b9178"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message Sent Successfully! I'll get back to you soon.", {
          id: toastId, 
          duration: 4000,
        });
        event.target.reset(); 
      } else {
        console.log("Error", data);
        toast.error("Something went wrong. Please try again.", { id: toastId });
      }
    } catch (error) {
      toast.error("Network error! Please try again.", { id: toastId });
    }
  };

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />

      
      <form className={`${styles.contactFormBox} fade-up delay-2`} onSubmit={onSubmit} noValidate>
        
        <div className={styles.formGroup}>
          <label>Name</label>
          <input type="text" name="name" className={styles.formInput} placeholder="Your full name" />
        </div>
        
        <div className={styles.formGroup}>
          <label>Email</label>
          
          <input type="text" name="email" className={styles.formInput} placeholder="your@gmail.com" />
        </div>
        
        <div className={styles.formGroup}>
          <label>Message</label>
          <textarea name="message" rows="5" className={styles.formInput} placeholder="Tell me about your project..."></textarea>
        </div>
        
        <button type="submit" className={styles.btnSend}>Send Message →</button>
        
      </form>
    </>
  );
};

export default ContactForm;