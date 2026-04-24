import React from 'react';
import { useSite } from '../context/SiteContext';
import { Mail, Phone, MapPin, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const { siteConfig } = useSite();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-serif font-bold text-[#001f3f] mb-4">{siteConfig.name}</h2>
          <p className="text-slate-500 max-w-sm mb-6 leading-relaxed">
            {siteConfig.description}
          </p>
          <div className="flex gap-4">
            <a href={siteConfig.socialLinks.instagram} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#001f3f] hover:border-[#001f3f] transition-all">
              <Instagram size={20} />
            </a>
            <a href={siteConfig.socialLinks.naverBlog} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#001f3f] hover:border-[#001f3f] transition-all">
              <span className="font-bold text-xs uppercase">Blog</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-slate-900 mb-6">Contact</h3>
          <ul className="flex flex-col gap-4 text-sm text-slate-500">
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-[#001f3f]" />
              {siteConfig.contact.address}
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#001f3f]" />
              {siteConfig.contact.phone}
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#001f3f]" />
              {siteConfig.contact.email}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-slate-900 mb-6">Quick Links</h3>
          <ul className="flex flex-col gap-4 text-sm text-slate-500">
            <li><a href="/" className="hover:text-[#001f3f] transition-colors">공지사항</a></li>
            <li><a href="/" className="hover:text-[#001f3f] transition-colors">수강신청 안내</a></li>
            <li><a href="/" className="hover:text-[#001f3f] transition-colors">오시는 길</a></li>
            <li><a href="/" className="hover:text-[#001f3f] transition-colors">개인정보처리방침</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
