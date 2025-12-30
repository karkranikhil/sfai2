
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, BarChart3, Users, Bot, Globe } from 'lucide-react';
import { SERVICES, COMPANY_NAME } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 pt-24 pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-400 text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            Empowering Salesforce with Agentforce AI
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            The Future of <span className="gradient-text">Salesforce Consulting</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {COMPANY_NAME} delivers expert implementation, custom development, and autonomous AI agents to accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center group">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white rounded-xl font-bold transition-all flex items-center justify-center">
              View Services
            </Link>
          </div>
          
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Mock Partners */}
            <div className="flex items-center justify-center space-x-2 text-white font-bold text-xl"><Globe size={24}/> GLOBAL</div>
            <div className="flex items-center justify-center space-x-2 text-white font-bold text-xl"><Zap size={24}/> FASTEST</div>
            <div className="flex items-center justify-center space-x-2 text-white font-bold text-xl"><CheckCircle2 size={24}/> SECURE</div>
            <div className="flex items-center justify-center space-x-2 text-white font-bold text-xl"><Users size={24}/> TRUSTED</div>
          </div>
        </div>
      </section>

      {/* Services Section Previews */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Expertise</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We specialize in complex Salesforce environments that demand precision and high-level strategy.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Zap size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
                <Link to="/services" className="text-blue-600 font-semibold text-sm flex items-center">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Industry Leaders Choose {COMPANY_NAME}</h2>
              <div className="space-y-6">
                {[
                  { title: "7x Certified Lead Architects", desc: "Our team isn't just skilled; they are certified masters of the platform." },
                  { title: "AI-First Approach", desc: "We integrate Agentforce from day one to ensure future-proof systems." },
                  { title: "Data Integrity Focus", desc: "No migration is too complex. We prioritize clean, actionable data." }
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl relative z-10">
                 <div className="grid grid-cols-2 gap-8">
                    <div className="text-center p-6 bg-slate-800/50 rounded-2xl">
                      <div className="text-4xl font-extrabold text-cyan-400 mb-2">50+</div>
                      <div className="text-slate-400 text-xs font-bold uppercase">Success Stories</div>
                    </div>
                    <div className="text-center p-6 bg-slate-800/50 rounded-2xl">
                      <div className="text-4xl font-extrabold text-blue-400 mb-2">98%</div>
                      <div className="text-slate-400 text-xs font-bold uppercase">Client Retention</div>
                    </div>
                    <div className="text-center p-6 bg-slate-800/50 rounded-2xl">
                      <div className="text-4xl font-extrabold text-white mb-2">150k</div>
                      <div className="text-slate-400 text-xs font-bold uppercase">Hours Saved</div>
                    </div>
                    <div className="text-center p-6 bg-slate-800/50 rounded-2xl">
                      <div className="text-4xl font-extrabold text-cyan-400 mb-2">12+</div>
                      <div className="text-slate-400 text-xs font-bold uppercase">Years Experience</div>
                    </div>
                 </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 text-lg mb-10">Schedule a free 30-minute consultation with our Salesforce Lead Architects.</p>
          <Link to="/contact" className="px-10 py-5 bg-white text-blue-600 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-xl inline-block">
            Book Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
