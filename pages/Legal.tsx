
import React from 'react';
import { COMPANY_NAME } from '../constants';

interface LegalProps {
  title: string;
}

const Legal: React.FC<LegalProps> = ({ title }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-950 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-white">{title}</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-slate-100 prose prose-slate prose-lg">
          <p className="text-sm text-slate-400 mb-10">Last Updated: February 15, 2025</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Introduction</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Welcome to {COMPANY_NAME}. This document outlines our practices and policies regarding our services and how we handle information. By accessing our website, you agree to these terms.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-6">2. Data Processing & Security</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            As a Salesforce consulting firm, we prioritize the security of your enterprise data. We strictly adhere to SOC2 and GDPR compliance guidelines when accessing client environments. Any data shared during the consultation process is treated with strict confidentiality.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Use of Services</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Our services are provided "as-is" for the purpose of business consulting and digital transformation. While we strive for absolute accuracy in our implementations, clients are responsible for final user acceptance testing (UAT).
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Intellectual Property</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            All code developed specifically for a client remains the property of that client upon final payment. General frameworks and methodologies remain the proprietary intellectual property of {COMPANY_NAME}.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-6">5. Limitations of Liability</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            {COMPANY_NAME} shall not be liable for any indirect, incidental, or consequential damages resulting from the use of third-party platforms like Salesforce or Einstein AI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legal;
