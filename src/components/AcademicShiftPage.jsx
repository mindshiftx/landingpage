import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Contact from './Contact';

const plans = [
  {
    id: 'plan-800',
    title: 'Starter',
    users: '800 users',
    requests: '20 requests Daily',
    trial: '1 month free',
    price: '000',
    description:
      'I am interested in the Starter plan for 800 users with 20 requests per student per day.',
  },
  {
    id: 'plan-1200',
    title: 'Growth',
    users: '1 200 users',
    requests: '35 requests Daily',
    trial: '1 month free',
    price: '000',
    description:
      'I am interested in the Growth plan for 1,200 users with 35 requests per student per day.',
  },
  {
    id: 'plan-2000',
    title: 'Scale',
    users: '2 000 users',
    requests: '40 requests Daily',
    trial: '3 months free',
    price: '000',
    description:
      'I am interested in the Scale plan for 2,000 users with 40 requests per student per day.',
  },
];

const AcademicShiftPage = ({ className = '' }) => {
  const [showContact, setShowContact] = useState(false);
  const [contactMessage, setContactMessage] = useState('');

  /* reset overlay when navigating away/back */
  useEffect(() => {
    setShowContact(false);
    setContactMessage('');
  }, []);

  const handleRequestClick = (plan) => {
    setContactMessage(plan.description);
    setShowContact(true);
  };

  return (
    <section className={`w-full relative ${className}`} id="pricing">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12 bg-gradient-to-r from-space-purple via-space-blue to-space-accent bg-clip-text text-transparent drop-shadow-lg tracking-tight">
        Supercharge your study vision with AI
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}            
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col bg-gradient-to-br from-space-dark/80 to-space-purple/40
                       backdrop-blur-lg border-2 border-space-purple/30 rounded-3xl p-10
                       shadow-xl hover:shadow-purple-600/60 transition-shadow relative group"
          >
            {/* icon */}
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-space-purple/80 text-white text-3xl shadow-lg">
                {plan.title === 'Starter' && '🚀'}
                {plan.title === 'Growth' && '🌱'}
                {plan.title === 'Scale' && '📈'}
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-2 text-center text-space-purple group-hover:text-white transition-colors">
              {plan.title}
            </h3>

            <div className="flex justify-center mb-4">
              <span className="inline-block bg-space-blue/20 text-space-blue px-3 py-1 rounded-full text-xs font-semibold">
                {plan.trial}
              </span>
            </div>

            <div className="border-t border-space-purple/20 my-4" />

            <ul className="flex flex-col gap-3 flex-1 mb-4">
              <li>
                <div className="w-full bg-space-blue/20 border border-space-blue/40 rounded-lg px-4 py-2 flex items-center justify-center font-semibold text-white shadow-md hover:bg-space-blue/30 transition">
                  {plan.users}
                </div>
              </li>
              <li>
                <div className="w-full bg-space-purple/20 border border-space-purple/40 rounded-lg px-4 py-2 flex items-center justify-center font-semibold text-white shadow-md hover:bg-space-purple/30 transition">
                  {plan.requests}
                </div>
              </li>
              <li>
                <div className="w-full bg-gradient-to-r from-space-purple/40 to-space-blue/40 border border-space-purple/40 rounded-lg px-4 py-2 flex items-center justify-center font-semibold text-white shadow-md hover:from-space-purple/60 hover:to-space-blue/60 transition">
                  Price: <span className="ml-2 text-purple-300">{plan.price}</span>
                </div>
              </li>
            </ul>

            <button
              onClick={() => handleRequestClick(plan)}
              className="mt-6 inline-flex justify-center items-center self-stretch bg-gradient-to-r from-space-purple to-space-blue
                         py-3 rounded-full font-medium tracking-wide shadow-md hover:shadow-purple-500/70
                         transition-transform duration-200 hover:scale-105 text-white text-lg"
            >
              Request
            </button>
          </motion.div>
        ))}
      </div>

      {/* overlay */}
      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="absolute inset-0" onClick={() => setShowContact(false)} />
          <div className="relative z-10">
            <Contact initialMessage={contactMessage} />
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-2 right-2 text-black bg-gray-200 rounded-full px-2 py-1"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AcademicShiftPage;
