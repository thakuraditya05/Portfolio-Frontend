import React, { useState } from 'react';
import { useAuth } from '@clerk/clerk-react';
import toast from 'react-hot-toast'; // 🌟 Toast Import
import styles from './Admin.module.css';

const ProjectForm = () => {
  const { getToken } = useAuth();
  const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
  const [formData, setFormData] = useState({ title: '', category: '', shortDesc: '', fullDesc: '', stack: '', liveLink: '', githubLink: '' });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading('Uploading Image... ⏳'); // 🌟 Loading Toast

    try {
      const token = await getToken();
      let imageUrl = '';
      if (imageFile) {
        const imageUploadData = new FormData();
        imageUploadData.append('image', imageFile);
        const uploadRes = await fetch(`${API_URL}/api/upload`, { method: 'POST', body: imageUploadData });
        const uploadData = await uploadRes.json();
        if (!uploadRes.ok || !uploadData.success) {
          throw new Error(uploadData.message || 'Image upload failed');
        }
        imageUrl = uploadData.imageUrl;
        toast.loading('Saving Project...', { id: toastId });
      }

      const newProjectData = {
        title: formData.title, category: formData.category, shortDesc: formData.shortDesc, fullDesc: formData.fullDesc,
        stack: formData.stack.split(',').map(item => item.trim()), 
        image: imageUrl, liveLink: formData.liveLink, githubLink: formData.githubLink
      };

      const response = await fetch(`${API_URL}/api/portfolio/project`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(newProjectData)
      });

      const result = await response.json();
      if (result.success) {
        toast.success('Project Successfully Added! 🚀', { id: toastId }); // 🌟 Success Toast
        setFormData({ title: '', category: '', shortDesc: '', fullDesc: '', stack: '', liveLink: '', githubLink: '' });
        setImageFile(null);
      } else {
        toast.error('Error: ' + result.message, { id: toastId });
      }
    } catch (error) {
      console.error("Project API Error:", error);
      toast.error('Failed to save. Is backend running?', { id: toastId }); // 🌟 Error Toast
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Add New Project</h2>
      <p className={styles.formDesc}>Ye form data direct MongoDB aur Cloudinary mein save karega.</p>

      <form onSubmit={handleSubmit} className={styles.formLayout}>
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Project Title" required />
        <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category (e.g., Web Dev)" required />
        <textarea name="shortDesc" value={formData.shortDesc} onChange={handleChange} placeholder="Short Description" rows="2" required></textarea>
        <textarea name="fullDesc" value={formData.fullDesc} onChange={handleChange} placeholder="Full Description" rows="4"></textarea>
        <input type="text" name="stack" value={formData.stack} onChange={handleChange} placeholder="Tech Stack (comma separated: React, Node, Express)" required />
        
        <div className={styles.flexRow}>
          <input type="url" name="liveLink" value={formData.liveLink} onChange={handleChange} placeholder="Live Link (Optional)" />
          <input type="url" name="githubLink" value={formData.githubLink} onChange={handleChange} placeholder="GitHub Link (Optional)" />
        </div>

        <div className={styles.fileSection}>
          <label className={styles.fileLabel}>Project Image:</label>
          <div className={styles.fileInputWrapper}>
            <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} required />
          </div>
        </div>

        <button type="submit" disabled={loading} className={styles.btnSubmit}>
          {loading ? 'Saving...' : '🚀 Save Project'}
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
