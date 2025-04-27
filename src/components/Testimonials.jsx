import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "MindshiftX transformed our data analytics capabilities. We're now able to extract insights we never thought possible.",
    author: "Sarah Johnson",
    position: "CTO, TechGlobal Inc.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    quote: "The adaptive learning platform has revolutionized how we train our employees. Efficiency is up 40% since implementation.",
    author: "Michael Chen",
    position: "Director of Learning, EduForward",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    quote: "Working with MindshiftX has been seamless. Their team understood our needs and delivered beyond expectations.",
    author: "Aisha Patel",
    position: "CEO, Innovate Solutions",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-space-dark to-space-dark/95 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-space-purple blur-[100px]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-space-blue blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-glow">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover how MindshiftX has helped organizations across industries achieve their goals.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-space-blue/10 to-space-purple/10 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(91, 33, 182, 0.3)' }}
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-space-accent opacity-60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 border-2 border-space-accent"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;