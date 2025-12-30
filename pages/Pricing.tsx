
import React from 'react';
import { PRICING } from '../constants';
import { Check, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-slate-950 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Transparent Pricing</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Investment plans tailored to your organization's growth phase and technical needs.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRICING.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative bg-white rounded-3xl p-10 shadow-xl flex flex-col ${
                plan.popular ? 'ring-4 ring-blue-500 ring-opacity-50 scale-105 z-10' : 'border border-slate-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-slate-500 font-medium">starting</span>}
                </div>
              </div>
              <ul className="space-y-5 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-600">
                    <Check className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`w-full py-4 rounded-xl font-bold transition-all text-center ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-200' 
                    : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Choose {plan.name}
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-blue-50 rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between border border-blue-100">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center mb-2">
              <Shield className="mr-3 text-blue-600" /> Need a Managed Service Agreement?
            </h3>
            <p className="text-slate-600">We offer long-term support retainers tailored to your specific maintenance roadmap.</p>
          </div>
          <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors">
            Custom Retainer Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
