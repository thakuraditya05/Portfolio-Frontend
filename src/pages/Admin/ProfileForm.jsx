import React, { useState, useRef } from 'react';
import { useAuth } from '@clerk/clerk-react'; 
import toast from 'react-hot-toast'; // 🌟 Toast Import
import styles from './Admin.module.css';

const ProfileForm = () => {
  const { getToken } = useAuth();
  
  const [formData, setFormData] = useState({
    name: '', bio: '', city: '', country: '', 
    projectCount: '', dsaSolved: '', codeChefRating: '', status: ''
  });
  
  const [profileImageFile, setProfileImageFile] = useState(null);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) setProfileImageFile(e.target.files[0]);
  };

  const handleCancelImage = () => {
    setProfileImageFile(null);
    if (fileInputRef.current) fileInputRef.current.value = ""; 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading('Saving Profile... ⏳'); // 🌟 Loading Toast

    try {
      const token = await getToken();
      let imageUrl = '';

      if (profileImageFile) {
        toast.loading('Uploading Image...', { id: toastId });
        const imageUploadData = new FormData();
        imageUploadData.append('image', profileImageFile);
        const uploadRes = await fetch('http://localhost:5000/api/upload', {
          method: 'POST', body: imageUploadData
        });
        const uploadData = await uploadRes.json();
        if (!uploadRes.ok || !uploadData.success) {
          throw new Error(uploadData.message || 'Image upload failed');
        }
        imageUrl = uploadData.imageUrl;
      }

      const profilePayload = {
        name: formData.name,
        email: formData.email,
        bio: formData.bio,
        location: { city: formData.city, country: formData.country },
        stats: { projectCount: formData.projectCount, dsaSolved: formData.dsaSolved, codeChefRating: formData.codeChefRating },
        status: formData.status,
        ...(imageUrl && { image: imageUrl })
      };

      toast.loading('Saving data to database...', { id: toastId });
      const response = await fetch('http://localhost:5000/api/portfolio/profile', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(profilePayload)
      });

      const result = await response.json();
      if (result.success) {
        toast.success('Profile Updated Successfully! ✅', { id: toastId }); // 🌟 Success Toast
      } else {
        toast.error('Error: ' + result.message, { id: toastId }); // 🌟 Error Toast
      }
    } catch (error) {
      console.error("Profile API Error:", error); // F12 daba kar console check karne ke liye
      toast.error('Network Error! Backend server ON hai?', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Update Profile Info</h2>
      <p className={styles.formDesc}>Ye data aapke Home aur About page par dikhega.</p>

      <form onSubmit={handleSubmit} className={styles.formLayout}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Bio (Short Description)" rows="3" required></textarea>
        
        <div className={styles.flexRow}>
          <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City (e.g., Bhopal)" />
          <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country (e.g., India)" />
        </div>

        <div className={styles.flexRow}>
          <input type="number" name="projectCount" value={formData.projectCount} onChange={handleChange} placeholder="Project Count" />
          <input type="text" name="dsaSolved" value={formData.dsaSolved} onChange={handleChange} placeholder="DSA Solved (e.g., 500+)" />
          <input type="text" name="codeChefRating" value={formData.codeChefRating} onChange={handleChange} placeholder="CodeChef Rating (e.g., 3★)" />
        </div>

        <input type="text" name="status" value={formData.status} onChange={handleChange} placeholder="Current Status" />

        <div className={styles.fileSection}>
          <label className={styles.fileLabel}>Profile Image:</label>
          <div className={styles.fileInputWrapper}>
            <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} />
            {profileImageFile && (
              <button type="button" onClick={handleCancelImage} className={styles.btnCancel}>Cancel ❌</button>
            )}
          </div>
        </div>

        <button type="submit" disabled={loading} className={styles.btnSubmit}>
          {loading ? 'Saving...' : 'Save Profile'}
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;