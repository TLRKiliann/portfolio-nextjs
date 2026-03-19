'use client';

import Hero from '@/ui/Hero';
import Carousel from '@/ui/Carousel';
import Skills from '@/ui/Skills';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <main ref={containerRef} className="relative">
      <motion.div 
        style={{ opacity, scale }}
        className="fixed top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-purple-500 origin-left z-50"
      />
      
      <Hero />
      <Skills />
      <Carousel />
      
      {/* Contact Section */}
      <section className="py-20 bg-linear-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-8"
          >
            Travaillons Ensemble
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl mb-12 max-w-2xl mx-auto text-gray-300"
          >
            Vous avez un projet en tête ? N'hésitez pas à me contacter
            pour en discuter.
          </motion.p>
          
          <motion.a
            href="mailto:contact@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Contactez-moi
          </motion.a>
        </div>
      </section>
    </main>
  );
}