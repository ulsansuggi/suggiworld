import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Admin from './pages/Admin';
import PostDetail from './pages/PostDetail';
import { useSite } from './context/SiteContext';

export default function App() {
  const { siteConfig } = useSite();
  const location = useLocation();

  // Scroll to hash on load or change
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className={`min-h-screen flex flex-col ${siteConfig.fontFamily} selection:bg-[#001f3f] selection:text-white`}>
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts" element={<Home />} /> {/* Temporary fallback */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
