import React, { useState } from "react";
import { motion } from "framer-motion";
import Contact from "./Contact";

const plans = [
  {
    id: "plan-3mo",
    title: "3 Months",
    trial: "3-Month License",
    features: [
      "More than 10 Custom Reporting",
      " RevPAR, ADR, F&B and more",
      "Forecast tomorrow’s sales today with AI",
      "Automated insights to optimize pricing, staffing & revenue",
      "Support 24/7"
    ],
    description:
      "I am interested in the 3-month ScatterBoard subscription plan for hotels.",
  },
  {
    id: "plan-6mo",
    title: "6 Months",
    trial: "6-Month License",
    features: [
      "More than 10 Custom Reporting",
      " RevPAR, ADR, F&B and more",
      "Forecast tomorrow’s sales today with AI",
      "Automated insights to optimize pricing, staffing & revenue",
      "Support 24/7"
    ],
    description:
      "I am interested in the 6-month ScatterBoard subscription plan for hotels.",
  },
  {
    id: "plan-12mo",
    title: "12 Months",
    trial: "12-Month License",
    features: [
      
      "More than 22 Custom Reporting",
      " RevPAR, ADR, F&B and more",
      "Forecast tomorrow’s sales today with AI",
      "Automated insights to optimize pricing, staffing & revenue",
      "Support 24/7"
    ],
    description:
      "I am interested in the 12-month ScatterBoard subscription plan for  hotels.",
  },
];

const SubscriptionCards = ({ className = "" }) => {
  const [showContact, setShowContact] = useState(false);
  const [contactMessage, setContactMessage] = useState("");

  const handleRequestClick = (plan) => {
    setContactMessage(plan.description);
    setShowContact(true);
  };

  return (
    <section className={`w-full relative ${className}`} id="pricing">
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col bg-gradient-to-br from-space-dark/80 to-space-purple/40 backdrop-blur-lg border-2 border-space-purple/30
                       rounded-3xl p-10 shadow-xl hover:shadow-purple-600/60 transition-shadow relative group"
          >
            {/* Icon badge */}
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-space-purple/80 text-white text-3xl shadow-lg">
                {plan.id === "plan-3mo"
                  ? "🕒"
                  : plan.id === "plan-6mo"
                  ? "⏳"
                  : "📈"}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-2 text-center text-space-purple group-hover:text-white transition-colors">
              {plan.title}
            </h3>

            {/* Duration badge */}
            <div className="flex justify-center mb-4">
              <span className="inline-block bg-space-blue/20 text-space-blue px-3 py-1 rounded-full text-xs font-semibold">
                {plan.trial}
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-space-purple/20 my-4" />

            {/* Features */}
            <ul className="flex flex-col gap-3 flex-1 mb-4">
              {plan.features.map((feat, i) => (
                <li key={i}>
                  <div className="w-full bg-space-blue/20 border border-space-blue/40 rounded-lg px-4 py-2 flex items-center justify-center font-semibold text-white shadow-md hover:bg-space-blue/30 transition">
                    {feat}
                  </div>
                </li>
              ))}
            </ul>

            {/* Request button */}
            <button
              onClick={() => handleRequestClick(plan)}
              className="mt-6 inline-flex justify-center items-center self-stretch
                         bg-gradient-to-r from-space-purple to-space-blue py-3
                         rounded-full font-medium tracking-wide shadow-md hover:shadow-purple-500/70
                         transition-transform duration-200 hover:scale-105 text-white text-lg"
            >
              Request
            </button>
          </motion.div>
        ))}
      </div>

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

export default SubscriptionCards;
