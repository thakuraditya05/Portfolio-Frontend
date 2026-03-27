import React, { useState } from 'react';
import { useAuth } from '@clerk/clerk-react';
import toast from 'react-hot-toast';
import styles from './Admin.module.css';

const ResumeForm = () => {
  const { getToken } = useAuth();
  const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
  const [formData, setFormData] = useState({ title: '' });
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resumeFile) {
      toast.error('Please select a PDF resume first.');
      return;
    }

    setLoading(true);
    const toastId = toast.loading('Uploading Resume... â³');

    try {
      const token = await getToken();

      const uploadData = new FormData();
      uploadData.append('file', resumeFile);

      const uploadRes = await fetch(`${API_URL}/api/upload/resume`, {
        method: 'POST',
        body: uploadData,
      });

      const uploadResult = await uploadRes.json();
      if (!uploadRes.ok || !uploadResult.success) {
        throw new Error(uploadResult.message || 'Resume upload failed');
      }

      toast.loading('Saving resume link...', { id: toastId });

      const payload = {
        title: formData.title || 'Resume',
        resumeUrl: uploadResult.fileUrl,
      };

      const response = await fetch(`${API_URL}/api/portfolio/resume`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (response.ok && result.success) {
        toast.success('Resume Updated Successfully! âœ…', { id: toastId });
        setFormData({ title: '' });
        setResumeFile(null);
      } else {
        toast.error('Error: ' + (result.message || 'Failed to save resume'), { id: toastId });
      }
    } catch (error) {
      console.error('Resume API Error:', error);
      toast.error(error.message || 'Network Error! Backend server ON hai?', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Upload Resume</h2>
      <p className={styles.formDesc}>PDF upload karo. Cloudinary link automatically resume model me update hoga.</p>

      <form onSubmit={handleSubmit} className={styles.formLayout}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Resume Title (optional)"
        />

        <input
          type="file"
          name="resumeFile"
          accept="application/pdf"
          onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
          required
        />

        <button type="submit" disabled={loading} className={styles.btnSubmit}>
          {loading ? 'Saving...' : 'Save Resume'}
        </button>
      </form>
    </div>
  );
};

export default ResumeForm;
