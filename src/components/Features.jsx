import React from 'react';
import { motion } from 'framer-motion';

const featuresList = [
  {
    title: "AI-Powered Analytics",
    description: "Harness the power of artificial intelligence to analyze complex data patterns and extract actionable insights.",
    image: "/images/chart_17905564.gif",
  },
  {
    title: "Adaptive Learning",
    description: "Our systems evolve with your business, continuously improving and adapting to your specific needs.",
    image: "/images/strategy_17717467.gif",
  },
  {
    title: "Seamless Integration",
    description: "Effortlessly connect with your existing tools and workflows for a unified operational experience.",
    image: "/images/puzzle_17904816.gif",
  },
  {
    title: "Real-time Collaboration",
    description: "Enable teams to work together seamlessly across distances with our advanced collaboration tools.",
    image: "/images/time_14240815.gif",
  },
  {
    title: "ScatterBoard",
    description: "SCATTER BOARD IS A COMPREHENSIVE ANALYTICS DASHBOARD TAILORED FOR HOTELS.",
    image: "/images/hotel-sign_15576891.gif",
  },
  {
    title: "AcademicShiftX",
    description: "Our AI-powered academic assistant is specifically designed for medical and law students, providing instant, precise, and personalized academic support.",
    image: "/images/graduate_12035096.gif",
  },
  {
    title: "Predictive Insights",
    description: "Anticipate tomorrow’s trends today with our AI‑driven forecasting engine—turn every data point into a roadmap for growth and stay two steps ahead of the competition.",
    image: "/images/Predictive Insights.gif",
  },
  {
    title: "Customizable Dashboards",
    description: "Build the perfect command center for your team. Drag‑and‑drop widgets, adjustable date ranges, and KPI alerts let you surface exactly what matters—no developers required.",
    image: "/images/Customizable Dashboards.gif",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-space-dark" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-national-park font-bold mb-4 text-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Cutting-Edge Solutions
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how our innovative technologies can transform your business operations
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-space-blue/20 to-space-purple/20 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-space-accent transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(91, 33, 182, 0.3)' }}
            >
              <div className="mb-4">
                {feature.image ? (
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-4xl">{feature.icon}</div>
                )}
              </div>
              <h3 className="text-xl font-national-park font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
              

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;