import React, { useState } from 'react';
import { useAuth } from '@clerk/clerk-react';
import toast from 'react-hot-toast';
import styles from './Admin.module.css';

const AchievementForm = () => {
  const { getToken } = useAuth();
  const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    shortDesc: '',
    fullDesc: '',
    link: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading('Saving Achievement... â³');

    try {
      const token = await getToken();
      let imageUrl = '';

      if (imageFile) {
        const imageUploadData = new FormData();
        imageUploadData.append('image', imageFile);
        const uploadRes = await fetch(`${API_URL}/api/upload`, {
          method: 'POST',
          body: imageUploadData
        });
        const uploadData = await uploadRes.json();
        if (!uploadRes.ok || !uploadData.success) {
          throw new Error(uploadData.message || 'Image upload failed');
        }
        imageUrl = uploadData.imageUrl;
      }

      const payload = {
        category: formData.category,
        title: formData.title,
        shortDesc: formData.shortDesc,
        fullDesc: formData.fullDesc,
        link: formData.link,
        image: imageUrl
      };

      const response = await fetch(`${API_URL}/api/portfolio/achievement`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (response.ok && result.success) {
        toast.success('Achievement Added! âœ…', { id: toastId });
        setFormData({ category: '', title: '', shortDesc: '', fullDesc: '', link: '' });
        setImageFile(null);
      } else {
        toast.error('Error: ' + (result.message || 'Failed to add achievement'), { id: toastId });
      }
    } catch (error) {
      console.error('Achievement API Error:', error);
      toast.error('Failed to save. Is backend running?', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Add Achievement</h2>
      <p className={styles.formDesc}>Category, title aur short description frontend tabs ke liye use honge.</p>

      <form onSubmit={handleSubmit} className={styles.formLayout}>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category (e.g., Hackathons, Code Ranks)"
          required
        />

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Achievement Title"
          required
        />

        <textarea
          name="shortDesc"
          value={formData.shortDesc}
          onChange={handleChange}
          placeholder="Short Description"
          rows="3"
          required
        ></textarea>

        <textarea
          name="fullDesc"
          value={formData.fullDesc}
          onChange={handleChange}
          placeholder="Full Description (optional)"
          rows="4"
        ></textarea>

        <input
          type="url"
          name="link"
          value={formData.link}
          onChange={handleChange}
          placeholder="Credential / Proof Link (optional)"
        />

        <div className={styles.fileSection}>
          <label className={styles.fileLabel}>Achievement Image:</label>
          <div className={styles.fileInputWrapper}>
            <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} />
          </div>
        </div>

        <button type="submit" disabled={loading} className={styles.btnSubmit}>
          {loading ? 'Saving...' : 'Add Achievement'}
        </button>
      </form>
    </div>
  );
};

export default AchievementForm;
