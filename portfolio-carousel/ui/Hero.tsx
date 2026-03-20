'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useRef, useState } from 'react';

export default function HeroCyberpunk() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glitchIntensity, setGlitchIntensity] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 });
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30
      });
    };

    // Horloge cyberpunk
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Effet glitch aléatoire
    const glitchInterval = setInterval(() => {
      setGlitchIntensity(Math.random());
      setTimeout(() => setGlitchIntensity(0), 150);
    }, 2000);

    // Effet glitch plus intense aléatoire
    const heavyGlitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitchIntensity(2);
        setTimeout(() => setGlitchIntensity(0), 300);
      }
    }, 5000);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
      clearInterval(glitchInterval);
      clearInterval(heavyGlitchInterval);
    };
  }, []);

  const glitchStyle = glitchIntensity > 0 ? {
    transform: `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`,
    filter: `hue-rotate(${glitchIntensity * 50}deg)`,
  } : {};

  // Génération de la grille cyberpunk
  const gridSize = 40;
  const gridLines = [];
  for (let i = 0; i < dimensions.width / gridSize; i++) {
    gridLines.push(i * gridSize);
  }

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Grille cyberpunk animée */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00ffff" strokeWidth="0.5" opacity="0.3">
              <animate attributeName="stroke" values="#00ffff;#ff00ff;#00ffff" dur="4s" repeatCount="indefinite" />
            </path>
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Scanlines CRT */}
      <div className="absolute inset-0 bg-scanlines pointer-events-none z-10 opacity-20"></div>

      {/* VHS Noise */}
      <div className="absolute inset-0 bg-noise pointer-events-none mix-blend-overlay opacity-10"></div>

      {/* Glitch overlays */}
      {glitchIntensity > 0 && (
        <>
          <div className="absolute inset-0 bg-red-500 mix-blend-multiply opacity-20 animate-glitch-block"></div>
          <div className="absolute inset-0 bg-blue-500 mix-blend-multiply opacity-20 animate-glitch-block" style={{ animationDelay: '0.1s' }}></div>
          <div className="absolute inset-0 bg-green-500 mix-blend-multiply opacity-20 animate-glitch-block" style={{ animationDelay: '0.2s' }}></div>
        </>
      )}

      {/* Neon lights */}
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-cyan-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-purple-500/20 to-transparent"></div>

      {/* Floating binary code */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-500/20 font-mono text-xs whitespace-nowrap"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            {Array.from({ length: 20 }, () => Math.round(Math.random())).join('')}
          </motion.div>
        ))}
      </div>

      {/* Contenu principal avec effet 3D */}
      <motion.div
        className="relative z-20 text-center px-4 max-w-6xl"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`,
          ...glitchStyle
        }}
      >
        {/* Badge "ONLINE" clignotant */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-2 bg-green-500/10 border border-green-500 text-green-500 font-mono text-sm rounded-full">
            <span className="animate-pulse">●</span> SYSTEM ONLINE // v2.0.24
          </span>
        </motion.div>

        {/* Titre principal avec effet néon */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative mb-4"
        >
          <span className="absolute inset-0 text-7xl md:text-9xl font-black text-cyan-500 blur-2xl opacity-50 animate-pulse">
            Cédric Kuchen
          </span>
          <span className="relative text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 [text-shadow:0_0_30px_rgba(0,255,255,0.5)]">
            Cédric Kuchen
          </span>
        </motion.h1>

        {/* Sous-titre avec glitch */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-4xl mb-8 font-mono relative group"
        >
          <span className="text-gray-400">&lt;</span>
          <TypeAnimation
            sequence={[
              'FRONT-END',
              2000,
              'BACK-END',
              2000,
              'FULL-STACK',
              2000,
              'API',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-cyan-400 mx-2"
          />
          <span className="text-gray-400">/&gt;</span>
          
          {/* Effet glitch au hover */}
          <span className="absolute -inset-1 text-cyan-400 opacity-0 group-hover:opacity-50 blur-sm transition-opacity pointer-events-none">
            {`<CYBER_DEVELOPER/>`}
          </span>
        </motion.div>

        {/* Stats cyberpunk */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-8 mb-12 font-mono"
        >
          {[
            { label: 'PROJECTS', value: '50+', colorClass: 'text-cyan-400', labelClass: 'text-cyan-400/60' },
            { label: 'EXPERIENCE', value: '5+', colorClass: 'text-purple-400', labelClass: 'text-purple-400/60' },
            { label: 'COMMITS', value: '2.5k', colorClass: 'text-pink-400', labelClass: 'text-pink-400/60' },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className={`text-3xl font-bold ${stat.colorClass} group-hover:animate-pulse`}>
                {stat.value}
              </div>
              <div className={`text-xs ${stat.labelClass} tracking-wider`}>
                [{stat.label}]
              </div>
            </div>
          ))}
        </motion.div>

        {/* Boutons cyberpunk */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex gap-6 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-transparent border-2 border-cyan-500 rounded-sm overflow-hidden"
          >
            <span className="relative z-10 text-cyan-500 font-mono tracking-wider group-hover:text-black transition-colors duration-300">
              &gt; INITIALIZE_PROTOCOL
            </span>
            <motion.div
              className="absolute inset-0 bg-cyan-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ type: "tween" }}
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-transparent border-2 border-purple-500 rounded-sm overflow-hidden"
          >
            <span className="relative z-10 text-purple-500 font-mono tracking-wider group-hover:text-black transition-colors duration-300">
              &gt; ESTABLISH_CONNECTION
            </span>
            <motion.div
              className="absolute inset-0 bg-purple-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ type: "tween" }}
            />
          </motion.button>
        </motion.div>

        {/* Terminal info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-10 text-left font-mono text-xs text-gray-600 hidden lg:block"
        >
          <div className="border border-gray-800 bg-black/50 p-4 rounded-sm backdrop-blur-sm">
            <p className="text-cyan-400">$ █ system_info</p>
            <p className="text-gray-400">OS: Linux_2077</p>
            <p className="text-gray-400">USER: cedric_kuchen</p>
            <p className="text-gray-400">STATUS: 
              <span className="text-green-400 animate-pulse"> ACTIVE</span>
            </p>
            <p className="text-purple-400">TIME: {time.toLocaleTimeString()}</p>
          </div>
        </motion.div>

      </motion.div> {/* ← Balise fermante du motion.div principal */}

      {/* Effets de lumière néon latéraux */}
      <div className="absolute left-0 top-0 w-1 h-full bg-linear-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-50"></div>
      <div className="absolute right-0 top-0 w-1 h-full bg-linear-to-b from-pink-500 via-purple-500 to-cyan-500 opacity-50"></div>
    </section>
  );
}