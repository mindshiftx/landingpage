import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

/* helper to read ?plan=… from the URL */
const useQuery = () => new URLSearchParams(useLocation().search);

const Contact = ({ initialMessage = "" }) => {
  const query = useQuery();

  /* ---------------- form state ---------------- */
  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [phone,   setPhone]   = useState('');
  const [countryCode, setCountryCode] = useState('+216');  // Tunisia default
  const [message, setMessage] = useState(initialMessage);
  const [submitStatus, setSubmitStatus] = useState(null);

  /* --------- auto-fill message if coming from a plan CTA --------- */
  useEffect(() => {
    const plan = query.get('plan');                     // e.g. "Starter – 800 users"
    if (plan && message === '') {
      setMessage(`I am interested in the ${plan} subscription plan.`);
    } else if (initialMessage && message === '') {
      setMessage(initialMessage);
    }
  }, [query, message, initialMessage]);

  /* ---------------- submit handler ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xldjqpay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: `${countryCode} ${phone}`,
          message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setName(''); setEmail(''); setPhone(''); setMessage('');
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitStatus('error');
    }
  };

  /* Middle-East + Tunisia dialing codes */
  const countryCodes = [
    { code: '+216', country: 'Tunisia' },
    { code: '+20',  country: 'Egypt'   },
    { code: '+966', country: 'Saudi Arabia' },
    { code: '+971', country: 'UAE' },
    { code: '+974', country: 'Qatar' },
    { code: '+973', country: 'Bahrain' },
    { code: '+965', country: 'Kuwait' },
    { code: '+968', country: 'Oman' },
    { code: '+962', country: 'Jordan' },
    { code: '+961', country: 'Lebanon' },
    { code: '+963', country: 'Syria' },
    { code: '+972', country: 'Israel' },
    { code: '+970', country: 'Palestine' },
    { code: '+964', country: 'Iraq' },
    { code: '+98',  country: 'Iran' },
    { code: '+967', country: 'Yemen' },
  ];

  return (
    <section className="py-20 bg-space-dark relative overflow-hidden" id="contact">
      {/* Thunder & Lightning Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Lightning bolt SVGs */}
        <svg className="absolute left-1/4 top-10 animate-lightning" width="90" height="200" viewBox="0 0 80 200" fill="none">
          <polyline points="40,0 50,60 30,60 60,140 40,140 60,200" stroke="#fffbe6" strokeWidth="6" strokeLinejoin="round" filter="url(#glow)" />
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
        <svg className="absolute right-1/3 top-1/2 animate-lightning delay-1000" width="60" height="150" viewBox="0 0 60 150" fill="none">
          <polyline points="30,0 40,40 20,40 50,100 30,100 50,150" stroke="#fffbe6" strokeWidth="5" strokeLinejoin="round" filter="url(#glow2)" />
          <defs>
            <filter id="glow2" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
        {/* Lightning flash overlay */}
        <div className="absolute inset-0 bg-white opacity-0 animate-flash pointer-events-none"></div>
      </div>
      <style>
        {`
          @keyframes lightning {
            0%, 97%, 100% { opacity: 0; }
            98% { opacity: 1; }
            99% { opacity: 0.7; }
          }
          .animate-lightning {
            animation: lightning 4s infinite;
          }
          .animate-lightning.delay-1000 {
            animation-delay: 2s;
          }
          @keyframes flash {
            0%, 97%, 100% { opacity: 0; }
            98% { opacity: 0.18; }
            99% { opacity: 0; }
          }
          .animate-flash {
            animation: flash 4s infinite;
          }
        `}
      </style>
      <div className="container mx-auto px-4">
        {/* -------- heading -------- */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-national-park font-bold mb-4 text-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have questions or ready to explore how our solutions can transform your operations?
            Reach out to us.
          </motion.p>
        </div>

        {/* -------- form -------- */}
        <div className="max-w-4xl mx-auto">
          <motion.form
            className="bg-gradient-to-br from-space-blue/10 to-space-purple/10 backdrop-blur-sm
                       p-8 rounded-xl border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
          >
            {/* name + email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-space-dark/50 border border-gray-600 rounded-lg
                             px-4 py-3 text-white focus:outline-none focus:border-space-accent"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-space-dark/50 border border-gray-600 rounded-lg
                             px-4 py-3 text-white focus:outline-none focus:border-space-accent"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* phone with country code */}
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
              <div className="flex">
                <select
                  className="bg-space-dark/50 border border-gray-600 rounded-l-lg px-3 py-3 text-white
                             focus:outline-none focus:border-space-accent"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  {countryCodes.map(({ code, country }) => (
                    <option key={code} value={code}>
                      {code} ({country})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-space-dark/50 border border-gray-600 rounded-r-lg
                             px-4 py-3 text-white focus:outline-none focus:border-space-accent border-l-0"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            {/* message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full bg-space-dark/50 border border-gray-600 rounded-lg
                           px-4 py-3 text-white focus:outline-none focus:border-space-accent"
                placeholder="How can we help you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            {/* submit */}
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-purple-600 bg-opacity-80 border border-purple-500
                           rounded-full text-white font-medium hover:bg-opacity-100
                           transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                Send Message
              </button>

              {submitStatus === 'success' && (
                <p className="mt-4 text-green-400">
                  Your message has been sent successfully!
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-red-400">
                  There was an error sending your message. Please try again.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
