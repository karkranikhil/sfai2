
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, Clock, Linkedin, Twitter, Github } from 'lucide-react';
import { COMPANY_NAME, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold text-white tracking-tight">
                {COMPANY_NAME}
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering enterprises with autonomous AI and world-class Salesforce solutions. 
              Certified expertise, delivered with precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-900 rounded-lg hover:text-cyan-400 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-slate-900 rounded-lg hover:text-cyan-400 transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="p-2 bg-slate-900 rounded-lg hover:text-cyan-400 transition-colors"><Github size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-cyan-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-cyan-400" />
                <span>info@salesforcetroop.ai</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={16} className="text-cyan-400" />
                <span>Mon - Fri, 9AM - 6PM EST</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/faq" className="hover:text-cyan-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
