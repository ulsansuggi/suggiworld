import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { 
  Settings, 
  Type, 
  Image as ImageIcon, 
  Palette, 
  Layout, 
  Save, 
  RotateCcw, 
  Plus, 
  Trash2,
  Edit2,
  FileText,
  PhoneCall
} from 'lucide-react';
import { Post } from '../types';

const Admin: React.FC = () => {
  const { siteConfig, updateConfig, resetConfig, isAdmin } = useSite();
  const [activeTab, setActiveTab] = useState<'general' | 'design' | 'posts' | 'features'>('general');

  if (!isAdmin) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-6">
          <Settings size={40} />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">관리자 권한이 필요합니다</h1>
        <p className="text-slate-500 mb-8">우측 상단의 관리자 버튼을 활성화해주세요.</p>
      </div>
    );
  }

  const handlePostChange = (id: string, updates: Partial<Post>) => {
    const updatedPosts = siteConfig.posts.map(p => p.id === id ? { ...p, ...updates } : p);
    updateConfig({ posts: updatedPosts });
  };

  const addPost = () => {
    const newPost: Post = {
      id: Date.now().toString(),
      title: "새로운 게시글 제목",
      excerpt: "내용 요약을 입력하세요.",
      content: "본문 내용을 입력하세요.",
      category: "공지사항",
      date: new Date().toISOString().split('T')[0],
      imageUrl: "https://picsum.photos/seed/" + Date.now() + "/800/600"
    };
    updateConfig({ posts: [newPost, ...siteConfig.posts] });
  };

  const deletePost = (id: string) => {
    updateConfig({ posts: siteConfig.posts.filter(p => p.id !== id) });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex flex-col gap-2">
          <button 
            onClick={() => setActiveTab('general')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${activeTab === 'general' ? 'bg-[#001f3f] text-white shadow-lg' : 'hover:bg-slate-100 text-slate-600'}`}
          >
            <Type size={18} /> 일반 설정
          </button>
          <button 
            onClick={() => setActiveTab('design')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${activeTab === 'design' ? 'bg-[#001f3f] text-white shadow-lg' : 'hover:bg-slate-100 text-slate-600'}`}
          >
            <Palette size={18} /> 디자인 & 테마
          </button>
          <button 
            onClick={() => setActiveTab('features')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${activeTab === 'features' ? 'bg-[#001f3f] text-white shadow-lg' : 'hover:bg-slate-100 text-slate-600'}`}
          >
            <Layout size={18} /> 학원 특장점
          </button>
          <button 
            onClick={() => setActiveTab('posts')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${activeTab === 'posts' ? 'bg-[#001f3f] text-white shadow-lg' : 'hover:bg-slate-100 text-slate-600'}`}
          >
            <FileText size={18} /> 게시글 관리
          </button>
          <div className="mt-8 pt-8 border-t border-slate-100">
            <button 
              onClick={() => {
                if(window.confirm('사이트의 모든 설정을 초기화하시겠습니까?')) resetConfig();
              }}
              className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all w-full text-left font-medium"
            >
              <RotateCcw size={18} /> 전체 초기화
            </button>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1 bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm">
          {activeTab === 'general' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-8">
                <Type className="text-[#001f3f]" /> 일반 정보 설정
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase">사이트 이름</label>
                  <input 
                    type="text" 
                    value={siteConfig.name} 
                    onChange={(e) => updateConfig({ name: e.target.value })}
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#001f3f] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase">연락처</label>
                  <input 
                    type="text" 
                    value={siteConfig.contact.phone} 
                    onChange={(e) => updateConfig({ contact: { ...siteConfig.contact, phone: e.target.value } })}
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#001f3f] transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase">메인 타이틀</label>
                <textarea 
                  rows={2}
                  value={siteConfig.heroTitle} 
                  onChange={(e) => updateConfig({ heroTitle: e.target.value })}
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#001f3f] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase">서브 타이틀</label>
                <textarea 
                  rows={2}
                  value={siteConfig.heroSubtitle} 
                  onChange={(e) => updateConfig({ heroSubtitle: e.target.value })}
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#001f3f] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase">학원 주소</label>
                <input 
                  type="text" 
                  value={siteConfig.contact.address} 
                  onChange={(e) => updateConfig({ contact: { ...siteConfig.contact, address: e.target.value } })}
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#001f3f] transition-all"
                />
              </div>
            </div>
          )}

          {activeTab === 'posts' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <FileText className="text-[#001f3f]" /> 게시글 관리
                </h2>
                <button 
                  onClick={addPost}
                  className="px-4 py-2 bg-[#001f3f] text-white rounded-full font-bold text-sm flex items-center gap-2 hover:shadow-lg transition-all"
                >
                  <Plus size={16} /> 새 게시글 추가
                </button>
              </div>
              <div className="space-y-4">
                {siteConfig.posts.map(post => (
                  <div key={post.id} className="border border-slate-100 rounded-2xl p-6 bg-slate-50">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1 space-y-4">
                        <input 
                          type="text" 
                          value={post.title} 
                          placeholder="제목"
                          onChange={(e) => handlePostChange(post.id, { title: e.target.value })}
                          className="w-full p-2 bg-white border border-slate-200 rounded-lg font-bold"
                        />
                        <textarea 
                          rows={2}
                          value={post.excerpt} 
                          placeholder="요약"
                          onChange={(e) => handlePostChange(post.id, { excerpt: e.target.value })}
                          className="w-full p-2 bg-white border border-slate-200 rounded-lg text-sm"
                        />
                      </div>
                      <button 
                        onClick={() => deletePost(post.id)}
                        className="p-2 text-red-300 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'design' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-8">
                <Palette className="text-[#001f3f]" /> 테마 설정
              </h2>
              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-400 uppercase">폰트 스타일</label>
                <div className="grid grid-cols-3 gap-4">
                  {(['font-sans', 'font-serif', 'font-mono'] as const).map(font => (
                    <button 
                      key={font}
                      onClick={() => updateConfig({ fontFamily: font })}
                      className={`p-4 rounded-2xl border-2 transition-all ${
                        siteConfig.fontFamily === font 
                        ? 'border-[#001f3f] bg-slate-100 ring-4 ring-[#001f3f]/10' 
                        : 'border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      <div className={`${font} text-center`}>
                        <div className="text-2xl font-bold">Aa</div>
                        <div className="text-xs mt-1 uppercase text-slate-400 italic font-medium">{font.replace('font-', '')}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <label className="text-sm font-bold text-slate-400 uppercase">포인트 컬러</label>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full border border-slate-200 p-1">
                    <div className="w-full h-full rounded-full bg-[#001f3f]" title="Deep Navy" />
                  </div>
                  <div className="flex-1 flex items-center bg-slate-50 px-4 rounded-2xl text-slate-500 text-sm font-mono">
                    #001f3f (고정 테마)
                  </div>
                </div>
                <p className="text-xs text-slate-400">포인트 컬러는 디자인 가이드에 따라 Deep Navy로 최적화되어 있습니다.</p>
              </div>
            </div>
          )}
          
          {activeTab === 'features' && (
            <div className="space-y-6 text-center py-20">
              <Layout size={40} className="mx-auto text-slate-200 mb-4" />
              <p className="text-slate-400">특장점 개별 수정 기능은 준비 중입니다.<br/>현재는 '일반 정보'에서 메인 텍스트 수정을 권장합니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
