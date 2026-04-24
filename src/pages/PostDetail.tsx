import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSite } from '../context/SiteContext';
import { ArrowLeft, Clock, Tag, User } from 'lucide-react';
import { motion } from 'motion/react';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { siteConfig } = useSite();
  const post = siteConfig.posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">게시글을 찾을 수 없습니다.</h1>
        <Link to="/" className="text-[#001f3f] font-bold underline">홈으로 돌아가기</Link>
      </div>
    );
  }

  return (
    <motion.article 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-6 py-16"
    >
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#001f3f] transition-all mb-12 font-bold uppercase tracking-wider">
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-4 text-xs font-bold text-[#001f3f] uppercase tracking-widest mb-6">
          <span className="px-3 py-1 bg-slate-100 rounded-full">{post.category}</span>
          <span className="text-slate-300 flex items-center gap-1.5"><Clock size={14} /> {post.date}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight mb-8">
          {post.title}
        </h1>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
            <User size={20} />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900">{siteConfig.name} 관리자</div>
            <div className="text-xs text-slate-400">Academic Director</div>
          </div>
        </div>
      </header>

      <div className="aspect-video w-full rounded-[40px] overflow-hidden mb-16 shadow-2xl">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="markdown-body prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-[#001f3f]">
        <p className="text-xl text-slate-600 mb-12 italic border-l-4 border-slate-100 pl-6">
          {post.excerpt}
        </p>
        <div className="text-lg leading-relaxed text-slate-700 whitespace-pre-line">
          {post.content}
        </div>
      </div>

      <footer className="mt-24 pt-12 border-t border-slate-100">
        <div className="bg-slate-50 p-10 rounded-[32px] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900 mb-2">이 소식이 마음에 드셨나요?</h3>
            <p className="text-slate-500">쑤기월드의 교육 과정에 대해 더 궁금한 점이 있다면 문의해주세요.</p>
          </div>
          <button className="px-8 py-4 bg-[#001f3f] text-white rounded-full font-bold hover:shadow-xl transition-all whitespace-nowrap">
            수강 신청 상담하기
          </button>
        </div>
      </footer>
    </motion.article>
  );
};

export default PostDetail;
