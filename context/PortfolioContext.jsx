import React, { createContext, useState, useEffect } from 'react';

// Context banaya
export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Backend se data mangwane ka function
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/portfolio');
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
  }, []);

  return (
    <PortfolioContext.Provider value={{ portfolioData, loading }}>
      {children}
    </PortfolioContext.Provider>
  );
};