
import React from 'react';
import { SERVICES } from '../constants';
import { Zap, Cloud, Settings, RefreshCw, Database, Cpu, LifeBuoy } from 'lucide-react';

const iconMap: Record<string, any> = {
  Cloud, Settings, RefreshCw, Database, Cpu, LifeBuoy
};

const Services: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-slate-950 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Expert Solutions</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Comprehensive Salesforce consulting and AI integration to streamline your operations.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComp = iconMap[service.icon] || Zap;
            return (
              <div key={service.id} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-400 transition-all group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110">
                  <IconComp size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-3 text-sm text-slate-500">
                  <li className="flex items-center"><Zap size={14} className="mr-2 text-cyan-500" /> Best-in-class architecture</li>
                  <li className="flex items-center"><Zap size={14} className="mr-2 text-cyan-500" /> Scalable design patterns</li>
                  <li className="flex items-center"><Zap size={14} className="mr-2 text-cyan-500" /> Ongoing expert support</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
