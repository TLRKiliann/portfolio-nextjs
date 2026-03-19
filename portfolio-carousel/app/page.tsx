'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '@/ui/Hero';
import Carousel from '@/ui/Carousel';
import Skills from '@/ui/Skills';
import Contact from '@/ui/Contact';

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
      <Contact />
    </main>
  );
}