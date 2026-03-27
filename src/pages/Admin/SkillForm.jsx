import React, { useState } from 'react';
import { useAuth } from '@clerk/clerk-react'; 
import toast from 'react-hot-toast'; // 🌟 Toast Import
import styles from './Admin.module.css';

const SkillForm = () => {
  const { getToken } = useAuth();
  const [formData, setFormData] = useState({ category: '', technologies: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading('Saving Skill... ⏳'); // 🌟 Loading Toast

    try {
      const token = await getToken();
      
      const skillPayload = {
        category: formData.category,
        technologies: formData.technologies.split(',').map(item => item.trim())
      };

      const response = await fetch('http://localhost:5000/api/portfolio/skill', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(skillPayload)
      });

      const result = await response.json();
      if (result.success) {
        toast.success('Skill Category Added! ✅', { id: toastId }); // 🌟 Success Toast
        setFormData({ category: '', technologies: '' }); 
      } else {
        toast.error('Error: ' + result.message, { id: toastId });
      }
    } catch (error) {
      console.error("Skill API Error:", error);
      toast.error('Failed to save. Check your Node backend.', { id: toastId }); // 🌟 Error Toast
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Manage Skills</h2>
      <p className={styles.formDesc}>Nayi skill category aur uski technologies add karein.</p>

      <form onSubmit={handleSubmit} className={styles.formLayout}>
        <input 
          type="text" 
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category Name (e.g., Frontend, Backend)" 
          required 
        />
        
        <textarea 
          name="technologies"
          value={formData.technologies}
          onChange={handleChange}
          placeholder="Technologies (Comma separated: React.js, HTML5, CSS3)" 
          rows="4" 
          required
        ></textarea>

        <button type="submit" disabled={loading} className={styles.btnSubmit}>
          {loading ? 'Adding...' : 'Add Skill Category'}
        </button>
      </form>
    </div>
  );
};

export default SkillForm;