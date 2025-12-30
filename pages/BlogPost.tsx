
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowLeft, Tag, Share2 } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) return <Navigate to="/blog" />;

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <header className="bg-slate-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Link to="/blog" className="text-cyan-400 flex items-center mb-10 font-semibold hover:text-white transition-colors group">
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Resources
          </Link>
          <div className="flex items-center space-x-4 mb-6">
             <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-black uppercase tracking-widest border border-blue-500/30">
               {post.category}
             </span>
             <span className="text-slate-400 text-sm flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-8">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
              <User size={24} />
            </div>
            <div>
              <p className="text-white font-bold">{post.author}</p>
              <p className="text-slate-500 text-xs">Salesforce Specialist</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 -mt-10">
        <img src={post.image} alt={post.title} className="w-full rounded-3xl shadow-2xl mb-16 border-4 border-white" />
        
        <div className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-strong:text-slate-900">
          {post.content.split('\n').map((para, idx) => {
            const trimmed = para.trim();
            if (trimmed.startsWith('## ')) {
              return <h2 key={idx} className="text-3xl font-bold mt-12 mb-6">{trimmed.replace('## ', '')}</h2>;
            } else if (trimmed.startsWith('### ')) {
              return <h3 key={idx} className="text-2xl font-bold mt-10 mb-4">{trimmed.replace('### ', '')}</h3>;
            } else if (trimmed) {
              return <p key={idx} className="mb-6">{trimmed}</p>;
            }
            return null;
          })}
        </div>

        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
             <span className="text-slate-400 font-bold text-sm">Tags:</span>
             <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold">#CRM</span>
             <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold">#Agentforce</span>
             <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold">#SalesforceTroopAI</span>
          </div>
          <button className="flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors">
            <Share2 size={18} />
            <span className="font-bold">Share Article</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
