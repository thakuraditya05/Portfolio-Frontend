import React, { createContext, useState, useEffect } from 'react';


export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  
  
  const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  useEffect(() => {
    
    const fetchPortfolioData = async () => {
      try {
        
        const response = await fetch(`${API_URL}/api/portfolio`);
        const result = await response.json();
        
        if (result.success) {
          setPortfolioData(result.data); 
        }
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchPortfolioData();
  }, []); 

  return (
    <PortfolioContext.Provider value={{ portfolioData, loading }}>
      {children}
    </PortfolioContext.Provider>
  );
};