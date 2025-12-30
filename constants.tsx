
import React from 'react';
import { 
  Cloud, 
  Settings, 
  RefreshCw, 
  Database, 
  Cpu, 
  LifeBuoy 
} from 'lucide-react';
import { Service, TeamMember, PricingPlan, BlogPost } from './types';

export const COMPANY_NAME = "SalesforceTroopAI";

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About Us', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
];

export const SERVICES: Service[] = [
  {
    id: 'implementation',
    title: 'Salesforce Implementation',
    description: 'Bespoke setup of Sales Cloud, Service Cloud, and Industry-specific solutions tailored to your unique business flow.',
    icon: 'Cloud'
  },
  {
    id: 'automation',
    title: 'Custom Development & Automation',
    description: 'Harnessing Apex, LWC, and Flow to eliminate manual tasks and optimize complex business processes.',
    icon: 'Settings'
  },
  {
    id: 'integration',
    title: 'System Integration',
    description: 'Seamlessly connecting Salesforce with your existing ERP, Marketing, and FinTech ecosystems.',
    icon: 'RefreshCw'
  },
  {
    id: 'data',
    title: 'Data Migration & Management',
    description: 'Secure, clean, and efficient data handling to ensure your Salesforce instance remains your single source of truth.',
    icon: 'Database'
  },
  {
    id: 'ai',
    title: 'AI & Agentforce Implementation',
    description: 'Leading-edge AI strategies using Einstein and Agentforce to drive autonomous customer success.',
    icon: 'Cpu'
  },
  {
    id: 'managed',
    title: 'Managed Services & Support',
    description: 'Proactive maintenance, continuous improvement, and on-demand support for your growing organization.',
    icon: 'LifeBuoy'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Alex Thompson',
    role: 'CEO & Founder',
    image: 'https://picsum.photos/seed/alex/400/400',
    bio: 'Alex brings 15 years of CRM architecture experience, leading digital transformation for Fortune 500 companies.'
  },
  {
    name: 'Priya Sharma',
    role: 'CTO',
    image: 'https://picsum.photos/seed/priya/400/400',
    bio: 'Priya is a 7x Salesforce certified architect specializing in enterprise AI integration and scalable cloud systems.'
  },
  {
    name: 'David Rodriguez',
    role: 'Lead Developer',
    image: 'https://picsum.photos/seed/david/400/400',
    bio: 'A veteran in Apex and Lightning Web Components, David focuses on crafting high-performance custom applications.'
  },
  {
    name: 'Elena Kovacs',
    role: 'Customer Success Manager',
    image: 'https://picsum.photos/seed/elena/400/400',
    bio: 'Elena ensures our clients derive maximum ROI from their Salesforce investment through strategic training and adoption.'
  }
];

export const PRICING: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$25,000',
    features: [
      'Standard Sales Cloud Setup',
      'Basic Lead & Opportunity Management',
      'Up to 5 Custom Objects',
      'Standard Integration (1 App)',
      '1 Month of Support'
    ]
  },
  {
    name: 'Professional',
    price: '$75,000',
    popular: true,
    features: [
      'Full Sales & Service Cloud Setup',
      'Advanced Automation (Flow & Apex)',
      'Unlimited Custom Objects',
      'Enterprise Integrations (3 Apps)',
      'Custom Training Workshops',
      '3 Months of Managed Support'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Multi-Org Strategy & Global Rollouts',
      'Agentforce & AI Strategy Implementation',
      'Complex Legacy Data Migration',
      'Bespoke Middleware Integration',
      'Dedicated Account Management',
      '24/7 Priority Support'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'implementation-guide-2025',
    title: 'Complete Guide to Salesforce Implementation in 2025',
    excerpt: 'The landscape of CRM implementation is changing. Discover the modern framework for a successful Salesforce rollout.',
    date: 'Jan 15, 2025',
    author: 'Alex Thompson',
    category: 'Guides',
    image: 'https://picsum.photos/seed/crm/800/400',
    content: `
      ## The 2025 Salesforce Implementation Framework

      As we move into 2025, a Salesforce implementation is no longer just about moving fields and data into a cloud platform. It's about building a digital nervous system for your business.

      ### 1. Discovery & Strategy
      Before a single line of code is written, you must define what success looks like. In 2025, this includes mapping out your AI readiness. Are your business processes documented? Do you have a data governance strategy?

      ### 2. Data Strategy: The New Foundation
      With the rise of Agentforce, your data must be cleaner than ever. AI is only as good as the data it accesses. We recommend a full audit of your legacy data before migration begins.

      ### 3. Agile Execution
      Gone are the days of 12-month waterfall rollouts. Successful businesses in 2025 use MVP (Minimum Viable Product) cycles. Launch the core Sales functionality in 8-12 weeks, then iterate.

      ### 4. User Adoption & Training
      Technology is useless if people don't use it. Focus on UX (User Experience). Lightning Web Components allow for highly customized, intuitive interfaces that mirror the way your employees actually work.

      ### Conclusion
      A successful implementation in 2025 requires a balance of technical prowess and strategic foresight. At SalesforceTroopAI, we specialize in bridging this gap.
    `
  },
  {
    id: 'agentforce-era',
    title: 'Agentforce: The New Era of Salesforce AI',
    excerpt: 'Salesforce has moved beyond chatbots. Learn how Agentforce is redefining autonomous customer service and sales.',
    date: 'Feb 02, 2025',
    author: 'Priya Sharma',
    category: 'AI',
    image: 'https://picsum.photos/seed/ai/800/400',
    content: `
      ## Understanding the Shift to Agentforce

      Salesforce recently announced Agentforce, moving away from simple copilots to fully autonomous agents. This marks the most significant shift in CRM history since the cloud itself.

      ### From Assistance to Autonomy
      Traditional AI "Copilots" require a human to prompt them and verify every step. Agentforce agents can be given a goal—like "resolving a customer billing dispute"—and they will autonomously navigate the steps to achieve it.

      ### The Atlas Reasoning Engine
      The secret sauce behind Agentforce is the Atlas Reasoning Engine. It doesn't just guess the next word; it reasons through the data in your Data Cloud to make informed decisions that follow your business rules.

      ### Trust Layer
      One of the biggest concerns with AI is security. Salesforce’s Trust Layer ensures that your sensitive data is never used to train public LLMs, keeping your enterprise data secure while still leveraging the power of generative AI.

      ### How to Prepare
      To leverage Agentforce, you need a robust Data Cloud strategy. AI needs context. The more integrated your data sources are, the more powerful your autonomous agents will be.
    `
  },
  {
    id: 'roi-salesforce-first-year',
    title: 'ROI of Salesforce: What to Expect in Your First Year',
    excerpt: 'Measuring the success of your CRM investment. We break down the tangible and intangible returns you should see.',
    date: 'Feb 10, 2025',
    author: 'Elena Kovacs',
    category: 'Strategy',
    image: 'https://picsum.photos/seed/roi/800/400',
    content: `
      ## Calculating Your CRM Return on Investment

      Investing $25k to $250k in Salesforce is a big decision. Business leaders often ask: "When will I see my money back?"

      ### Phase 1: Efficiency Gains (Months 1-4)
      The first ROI you'll see is time saved. By automating manual entry and standardizing processes, we typically see a 20-30% increase in sales rep productivity. Less time in spreadsheets means more time on the phone with prospects.

      ### Phase 2: Pipeline Visibility (Months 4-8)
      By mid-year, the "Single Source of Truth" begins to pay dividends. Forecasting becomes accurate. You stop losing leads in the "black hole" of email inboxes. Conversion rates typically rise as follow-up becomes automated and consistent.

      ### Phase 3: Customer Retention (Months 8-12)
      With Service Cloud, your support team can resolve issues 40% faster. Happy customers stay longer and spend more. The reduction in churn is often where the most significant long-term ROI is found.

      ### The "Hidden" ROI
      Beyond the numbers, there is the value of data. Being able to make decisions based on real-time dashboards rather than "gut feeling" is what separates modern market leaders from the rest.
    `
  }
];
