import React from 'react';
import { motion } from 'framer-motion';
import { Link }   from 'react-router-dom';

const MotionLink = motion(Link);          // animated <Link>

const About = () => (
  <section className="py-20 relative overflow-hidden" id="about-us">
    {/* ---------- background blobs (unchanged) ---------- */}
    <div className="absolute inset-0 bg-space-dark">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-space-purple blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-space-blue blur-[120px]" />
        <div className="absolute top-2/3 left-1/3 w-80 h-80 rounded-full bg-space-purple blur-[110px]" />
      </div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      {/* -------- About MindshiftX -------- */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* …your existing copy & image block remains here… */}
      </div>

      {/* -------- AcademicShift -------- */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mt-24">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-glow">
            AcademicShift
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Our AI-powered academic assistant is specifically designed for medical and law
            students, providing instant, precise, and personalized academic support.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            With AcademicShift, students can access comprehensive study materials, practice
            questions, and expert guidance tailored to their specific curriculum and learning
            style.
          </p>
          <p className="text-lg text-gray-300">
            Experience a revolutionary approach to academic learning that adapts to your needs
            and helps you achieve your educational goals with confidence.
          </p>

          {/* CTA – AcademicShift */}
          <MotionLink
            to="/academic-shift"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-block bg-space-purple text-white font-semibold
                       px-6 py-3 rounded-md shadow-md hover:bg-space-purple/90
                       focus:outline-none focus:ring-2 focus:ring-space-purple/50
                       transition-transform duration-200"
          >
            Try AcademicShift
          </MotionLink>
        </motion.div>

        {/* right-hand image block (unchanged) */}
        <motion.div
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* …image + overlay exactly as before… */}
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-space-purple/30 to-space-blue/30 mix-blend-overlay"></div>
            <div className="absolute inset-0 border border-gray-700 rounded-xl"></div>
            <img
              src="/images/academicshift.png"
              alt="AcademicShift"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center bg-space-dark/70 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-display font-bold mb-2">Smart Learning</h3>
              </div>
            </div>
          </div>
          {/* decorative circles (unchanged) */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border border-space-accent rounded-full opacity-20" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-space-accent rounded-full opacity-20" />
        </motion.div>
      </div>

      {/* -------- ScatterBoard -------- */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mt-24">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-glow">
            ScatterBoard
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            A comprehensive analytics dashboard tailored specifically for hotels and hospitality
            businesses.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            ScatterBoard transforms complex hotel data into actionable insights, helping
            managers optimize operations, improve guest experiences, and maximize revenue.
          </p>
          <p className="text-lg text-gray-300">
            With real-time monitoring and predictive analytics, stay ahead of market trends and
            make data-driven decisions that drive business growth.
          </p>

          {/* CTA – ScatterBoard */}
          <MotionLink
            to="/scatterboard"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-block bg-space-purple text-white font-semibold
                       px-6 py-3 rounded-md shadow-md hover:bg-space-purple/90
                       focus:outline-none focus:ring-2 focus:ring-space-purple/50
                       transition-transform duration-200"
          >
            Request a Demo
          </MotionLink>
        </motion.div>

        {/* right-hand image block (unchanged) */}
        <motion.div
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* …image + overlay exactly as before… */}
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-space-blue/30 to-space-purple/30 mix-blend-overlay"></div>
            <div className="absolute inset-0 border border-gray-700 rounded-xl"></div>
            <img
              src="/images/scatter-board.jpg"
              alt="ScatterBoard"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center bg-space-dark/70 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-display font-bold mb-2">Hotel Analytics</h3>
              </div>
            </div>
          </div>
          {/* decorative circles (unchanged) */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border border-space-accent rounded-full opacity-20" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-space-accent rounded-full opacity-20" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
