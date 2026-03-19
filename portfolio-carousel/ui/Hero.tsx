// ui/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 2 }}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Animated Circles */}
      <motion.div
        className="absolute w-64 h-64 bg-white rounded-full opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute w-96 h-96 bg-purple-300 rounded-full opacity-10"
        animate={{
          scale: [1, 1.5, 1],
          x: [0, -150, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          John Doe
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl md:text-4xl mb-8"
        >
          <TypeAnimation
            sequence={[
              'Développeur Full Stack',
              2000,
              'Designer UI/UX',
              2000,
              'Créateur d\'expériences digitales',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl mb-12 max-w-2xl mx-auto text-gray-200"
        >
          Je crée des expériences digitales uniques et innovantes
          qui captivent et inspirent les utilisateurs.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Voir mes projets
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
          >
            Me contacter
          </motion.a>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}