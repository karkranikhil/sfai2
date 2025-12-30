
import React, { useState } from 'react';
import { Plus, Minus, Search } from 'lucide-react';

const FAQS = [
  {
    q: "How long does a typical implementation take?",
    a: "Most implementations range from 8 to 16 weeks, depending on complexity. We use an agile approach to ensure you have a working MVP within the first 6 weeks."
  },
  {
    q: "Do you support existing Salesforce instances?",
    a: "Absolutely. Our Managed Services team specializes in auditing, cleaning up, and optimizing 'legacy' Salesforce orgs that have become difficult to maintain."
  },
  {
    q: "Are your consultants certified?",
    a: "Yes. Every lead consultant at SalesforceTroopAI holds at least 5 Salesforce certifications, including Platform Developer II and Application/System Architect designations."
  },
  {
    q: "How does your pricing model work?",
    a: "We offer both fixed-price project implementations and hourly managed service retainers. We provide a transparent breakdown of costs before any work begins."
  },
  {
    q: "What is Agentforce and do I need it?",
    a: "Agentforce is Salesforce's new autonomous AI layer. It goes beyond simple chatbots to handle complex tasks without human intervention. We can perform an AI Readiness Audit to see if it's right for your ROI."
  },
  {
    q: "Can you help with data migration from legacy systems?",
    a: "Migration is one of our specialties. Whether you're moving from HubSpot, Dynamics 365, or spreadsheets, we ensure your data is clean, mapped correctly, and secure."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-950 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Common Questions</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Everything you need to know about our process and Salesforce expertise.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-24">
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:border-blue-300 transition-colors"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-lg font-bold text-slate-900">{faq.q}</span>
                {openIndex === idx ? <Minus className="text-blue-600" /> : <Plus className="text-slate-400" />}
              </button>
              {openIndex === idx && (
                <div className="px-8 pb-8 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 bg-slate-900 rounded-3xl p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-slate-400 mb-8">Can't find what you're looking for? Reach out directly.</p>
          <a href="mailto:info@salesforcetroop.ai" className="inline-block px-10 py-4 bg-blue-600 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/40">
            Email Our Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
