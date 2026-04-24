import React from 'react';
import { Link } from 'react-router-dom';
import { useSite } from '../context/SiteContext';
import { Shield, ShieldCheck, Menu, X, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Header: React.FC = () => {
  const { siteConfig, isAdmin, setIsAdmin } = useSite();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="glass-nav px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#001f3f] rounded-lg flex items-center justify-center text-white font-bold">
            W
          </div>
          <span className={`text-xl font-bold font-serif tracking-tight text-[#001f3f]`}>
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-[#001f3f] transition-colors">홈</Link>
          <Link to="/#features" className="hover:text-[#001f3f] transition-colors">학원소개</Link>
          <Link to="/#posts" className="hover:text-[#001f3f] transition-colors">커뮤니티</Link>
          
          <div className="flex items-center gap-2">
            {isAdmin && (
              <Link to="/admin" className="px-4 py-2 bg-[#001f3f] text-white rounded-full hover:shadow-lg transition-all flex items-center gap-2">
                <Settings size={14} /> 대시보드
              </Link>
            )}
            <button 
              onClick={() => setIsAdmin(!isAdmin)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition-all ${
                isAdmin 
                ? "bg-amber-100 text-amber-700 hover:bg-amber-200" 
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {isAdmin ? <ShieldCheck size={16} /> : <Shield size={16} />}
              {isAdmin ? "관리자 모드" : "관리자"}
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 font-medium">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>홈</Link>
              <Link to="/#features" onClick={() => setIsMobileMenuOpen(false)}>학원소개</Link>
              <Link to="/#posts" onClick={() => setIsMobileMenuOpen(false)}>커뮤니티</Link>
              <button 
                onClick={() => {
                  setIsAdmin(!isAdmin);
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-amber-700 pt-2 border-t border-slate-100"
              >
                <Shield size={16} /> {isAdmin ? "관리자 모드 종료" : "관리자 로그인"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
