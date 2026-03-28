'use client';

import Hero from '@/ui/Hero';
import Carousel from '@/ui/Carousel';
import Skills from '@/ui/Skills';
import Contact from '@/ui/Contact';
import Legend from '@/ui/Legend';

export default function Home() {

  return (
    <main className="relative">
      
      <Hero />
      <Skills />
      <Carousel />
      <Legend />
      <Contact />
    </main>
  );
}