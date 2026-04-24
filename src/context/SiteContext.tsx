import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteConfig, initialSiteData } from '../types';

interface SiteContextType {
  siteConfig: SiteConfig;
  updateConfig: (newConfig: Partial<SiteConfig>) => void;
  resetConfig: () => void;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(initialSiteData);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const savedConfig = localStorage.getItem('ssugi_world_config');
    if (savedConfig) {
      try {
        setSiteConfig(JSON.parse(savedConfig));
      } catch (e) {
        console.error("Failed to load site config", e);
      }
    }
  }, []);

  const updateConfig = (newConfig: Partial<SiteConfig>) => {
    setSiteConfig(prev => {
      const updated = { ...prev, ...newConfig };
      localStorage.setItem('ssugi_world_config', JSON.stringify(updated));
      return updated;
    });
  };

  const resetConfig = () => {
    localStorage.removeItem('ssugi_world_config');
    setSiteConfig(initialSiteData);
  };

  return (
    <SiteContext.Provider value={{ siteConfig, updateConfig, resetConfig, isAdmin, setIsAdmin }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (context === undefined) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};
