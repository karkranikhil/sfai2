
import React from 'react';
import { TEAM, COMPANY_NAME } from '../constants';
import { Linkedin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-950 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Our Story</h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Founded with a vision to bridge the gap between complex CRM technology and human-centric business strategy. 
            At {COMPANY_NAME}, we believe Salesforce is the engine, but clean data and smart strategy are the fuel.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img src="https://picsum.photos/seed/office/800/600" alt="Office" className="rounded-3xl shadow-2xl relative z-10" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-slate-900">Why {COMPANY_NAME}?</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  We aren't just another implementation partner. We are high-level strategists who understand that every click in Salesforce must serve a business objective.
                </p>
                <p>
                  Our "Troop" consists of veteran architects, developers, and success managers who have seen it all—from standard SMB rollouts to massive global enterprise migrations.
                </p>
                <p>
                  In 2025, we've pivoted our core focus to Agentforce and AI, ensuring our clients stay at the absolute forefront of autonomous business operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet the Leadership</h2>
            <p className="text-slate-600">The minds behind your digital transformation.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <a href="#" className="text-white hover:text-cyan-400"><Linkedin /></a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-blue-600 text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
