import React from 'react';
import { useSite } from '../context/SiteContext';
import { Link } from 'react-router-dom';
import DynamicIcon from '../components/DynamicIcon';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const Home: React.FC = () => {
  const { siteConfig } = useSite();

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center px-6 pt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#001f3f] text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#001f3f] animate-pulse" />
              Creative Academy
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-8 whitespace-pre-line">
              {siteConfig.heroTitle}
            </h1>
            <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed">
              {siteConfig.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/#features" className="px-8 py-4 bg-[#001f3f] text-white rounded-full font-bold hover:shadow-xl transition-all flex items-center gap-2 group">
                학원 소개 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/#posts" className="px-8 py-4 border border-slate-200 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-all">
                커뮤니티 소식
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1610890732551-21346f140026?auto=format&fit=crop&q=80&w=1200" 
                alt="Board game academy"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Design accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-100 rounded-full blur-3xl opacity-60 z-0" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-100 rounded-full blur-3xl opacity-60 z-0" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-[#001f3f] uppercase tracking-[0.2em] mb-4">Why Us</h2>
            <h3 className="text-4xl font-serif font-bold text-slate-900">쑤기월드만의 특별함</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.features.map((feature, idx) => (
              <motion.div 
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[32px] border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-slate-50 text-[#001f3f] rounded-2xl flex items-center justify-center mb-8">
                  <DynamicIcon name={feature.icon} size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h4>
                <p className="text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section id="posts" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-sm font-bold text-[#001f3f] uppercase tracking-[0.2em] mb-4">Community</h2>
              <h3 className="text-4xl font-serif font-bold text-slate-900">학원 소식</h3>
            </div>
            <Link to="/posts" className="flex items-center gap-1 text-sm font-bold text-slate-400 hover:text-[#001f3f] transition-all">
              전체보기 <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.posts.map((post) => (
              <Link key={post.id} to={`/posts/${post.id}`} className="group flex flex-col md:flex-row gap-6 bg-white border border-slate-100 rounded-[32px] overflow-hidden hover:shadow-lg transition-all p-4">
                <div className="w-full md:w-48 aspect-[4/3] rounded-2x overflow-hidden rounded-2xl">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center py-2 pr-4">
                  <span className="text-xs font-bold text-slate-400 uppercase mb-2">{post.category}</span>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#001f3f] transition-colors">{post.title}</h4>
                  <p className="text-slate-500 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-xs text-slate-300">{post.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-[#001f3f] rounded-[40px] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">내일의 전략가를 위한 여정,<br />지금 쑤기월드에서 시작하세요.</h2>
            <div className="flex justify-center gap-4">
              <button className="px-10 py-5 bg-white text-[#001f3f] rounded-full font-bold hover:shadow-2xl transition-all">
                수강 문의하기
              </button>
            </div>
          </div>
          {/* Accent icons */}
          <div className="absolute top-10 left-10 opacity-10 animate-bounce">
            <DynamicIcon name="Box" size={80} />
          </div>
          <div className="absolute bottom-10 right-10 opacity-10 animate-pulse">
            <DynamicIcon name="Gamepad2" size={100} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
