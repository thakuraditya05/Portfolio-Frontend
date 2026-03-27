import React, { createContext, useState, useEffect } from 'react';

// Context banaya
export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🌟 NAYA: Yahan hum Vite ki .env file se URL nikal rahe hain
  // Agar .env file nahi milti (kisi wajah se), toh ye fallback me localhost le lega
  const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  useEffect(() => {
    // Backend se data mangwane ka function
    const fetchPortfolioData = async () => {
      try {
        // 🌟 NAYA: Hardcoded link ki jagah API_URL lagaya
        const response = await fetch(`${API_URL}/api/portfolio`);
        const result = await response.json();
        
        if (result.success) {
          setPortfolioData(result.data); // Database ka saara data yahan save ho gaya
        }
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      } finally {
        setLoading(false); // Data aane ke baad loading band
      }
    };

    fetchPortfolioData();
  }, []); // 🌟 API_URL ko dependency array me add karne ki zaroorat nahi hai

  return (
    <PortfolioContext.Provider value={{ portfolioData, loading }}>
      {children}
    </PortfolioContext.Provider>
  );
};