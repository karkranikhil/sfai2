
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const BlogListing: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-950 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Resources & Insights</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Expert perspectives on Salesforce, AI, and enterprise strategy.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all flex flex-col group">
              <Link to={`/blog/${post.id}`} className="block overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </Link>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center space-x-4 text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                  <span className="flex items-center"><Tag size={12} className="mr-1" /> {post.category}</span>
                  <span className="flex items-center text-slate-400"><Calendar size={12} className="mr-1" /> {post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <User size={16} />
                    </div>
                    <span className="text-xs font-bold text-slate-700">{post.author}</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="text-blue-600 font-bold text-sm flex items-center group/btn">
                    Read Article <ArrowRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListing;
