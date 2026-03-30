'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from "@/context/LanguageContext";

export default function HeroCyberpunk() {

  const [mounted, setMounted] = useState<boolean>(false);

  const [time, setTime] = useState<Date>(new Date());

  const [glitchIntensity, setGlitchIntensity] = useState<number>(0);
  const [glitchOffset, setGlitchOffset] = useState<{x: number, y: number}>({ x: 0, y: 0 });

  const [mousePosition, setMousePosition] = useState<{x: number, y: number}>({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
const [binaryData, setBinaryData] = useState<Array<{left: number, top: number, code: string, duration: number, delay: number}>>([]);

  const { chooseLang } = useLanguage();
  const [titleRotation, setTitleRotation] = useState<{x: number, y: number}>({ x: 0, y: 0 });

  const scrollToNextSection = () => {
    const carouselSection = document.getElementById('skills-section');
    if (carouselSection) {
      carouselSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Ajoutez cet effet pour suivre la souris
  useEffect(() => {
    const handleTitleMouseMove = (e: MouseEvent) => {
      const title = document.getElementById('cyber-title');
      if (title) {
        const rect = title.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateX = (e.clientY - centerY) / 20;
        const rotateY = (e.clientX - centerX) / 20;
        setTitleRotation({ x: Math.min(Math.max(rotateX, -15), 15), y: Math.min(Math.max(rotateY, -20), 20) });
      }
    };

    window.addEventListener('mousemove', handleTitleMouseMove);
    return () => window.removeEventListener('mousemove', handleTitleMouseMove);
  }, []);

  // Initialisation des données côté client
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    // Générer les données binaires
    const generateBinaryData = () => {
      return Array(20).fill(null).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        code: Array.from({ length: 20 }, () => Math.round(Math.random())).join(''),
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5
      }));
    };
    setBinaryData(generateBinaryData());

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
  }, [chooseLang]);

  // Gestion du glitch offset - sans setState dans l'effet
  useEffect(() => {
    if (!mounted) return;
    if (glitchIntensity > 0) {
      // const x = Math.random() * 10 - 5;
      // const y = Math.random() * 10 - 5;
      const x = (Math.random() - 0.5) * 10; // Valeur entre -5 et 5
      const y = (Math.random() - 0.5) * 10;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setGlitchOffset({ x, y });
    } else {
      setGlitchOffset({ x: 0, y: 0 });
    }
  }, [glitchIntensity, mounted]);

  const glitchStyle = glitchIntensity > 0 ? {
    transform: `translate(${glitchOffset.x}px, ${glitchOffset.y}px)`,
    filter: `hue-rotate(${glitchIntensity * 50}deg)`,
  } : {};

  if (!mounted) {
    return (
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-black">
        <div className="text-cyan-400 font-mono text-lg sm:text-xl animate-pulse text-center px-4">
          &gt; INITIALIZING CYBERPUNK SYSTEM...
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-black"
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
        {binaryData.map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-500/20 font-mono text-xs whitespace-nowrap"
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: "linear"
            }}
          >
            {item.code}
          </motion.div>
        ))}
      </div>

      {/* Contenu principal avec effet 3D */}
      <motion.div
        className="relative z-20 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 px-4 max-w-7xl w-full py-8 lg:py-0"
        style={{
          ...(isTouchDevice ? {} : {
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`,
          }),
          ...glitchStyle,
        }}
      >

        {/* Hologram Photo */}
        <motion.div
          className="relative flex-shrink-0 flex flex-col items-center justify-center"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Anneaux rotatifs */}
          <motion.div
            className="absolute w-44 h-44 lg:w-72 lg:h-72 rounded-full"
            style={{ border: '1px solid rgba(0,255,255,0.2)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-52 h-52 lg:w-80 lg:h-80 rounded-full"
            style={{ border: '1px dashed rgba(168,85,247,0.2)' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-36 h-36 lg:w-64 lg:h-64 rounded-full"
            style={{ border: '1px solid rgba(0,255,255,0.1)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Container hologramme */}
          <div
            className="relative w-36 h-36 lg:w-60 lg:h-60 rounded-full overflow-hidden"
            style={{
              boxShadow: '0 0 25px rgba(0,255,255,0.5), 0 0 60px rgba(0,255,255,0.2), 0 0 100px rgba(0,255,255,0.08)',
              border: '1px solid rgba(0,255,255,0.5)',
            }}
          >
            <Image
              src="/images/photo_me.png"
              alt="Cédric Kuchen"
              fill
              sizes="(max-width: 1024px) 144px, 240px"
              loading="eager"
              priority
              className="object-cover"
              style={{ filter: 'grayscale(0.6) brightness(0.85) contrast(1.15) saturate(0.4)' }}
            />

            {/* Teinte cyan */}
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(0,220,255,0.18)', mixBlendMode: 'screen' }}
            />

            {/* Scanlines horizontales */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 4px)',
              }}
            />

            {/* Sweep shimmer */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(110deg, transparent 25%, rgba(0,255,255,0.28) 50%, transparent 75%)',
              }}
              animate={{ x: ['-160%', '160%'] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
            />

            {/* Flicker */}
            <motion.div
              className="absolute inset-0"
              style={{ background: 'rgba(0,255,255,0.08)' }}
              animate={{ opacity: [0.08, 0.35, 0.05, 0.2, 0.05, 0.3, 0.05] }}
              transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 4 }}
            />

            {/* Glitch horizontal slice */}
            {glitchIntensity > 0 && (
              <div
                className="absolute left-0 right-0 h-3"
                style={{
                  top: `${30 + Math.random() * 40}%`,
                  background: 'rgba(0,255,255,0.4)',
                  mixBlendMode: 'screen',
                  transform: `translateX(${(Math.random() - 0.5) * 12}px)`,
                }}
              />
            )}
          </div>

          {/* Base de projection */}
          <div
            className="w-28 lg:w-48 h-2 mt-3 rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(0,255,255,0.45) 0%, transparent 70%)' }}
          />

          {/* Label */}
          <motion.div
            className="mt-2 font-mono text-xs text-cyan-400/50 tracking-widest"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ▸ CEDRIC_KUCHEN.holo
          </motion.div>
        </motion.div>

        {/* Contenu texte */}
        <div className="flex-1 text-center max-w-2xl">
        {/* Badge "ONLINE" clignotant */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-3 sm:mb-6 inline-block"
        >
          <span className="px-4 py-2 bg-green-500/10 border border-green-500 text-green-500 font-mono text-sm rounded-full">
            <span className="animate-pulse">●</span> SYSTEM ONLINE // v2.0.24
          </span>
        </motion.div>

        {/* Titre principal avec effet néon */}
        {/* <motion.h1
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
        </motion.h1> */}



        <motion.h1
          id="cyber-title"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative mb-3 sm:mb-4"
          style={{ perspective: "900px" }}
        >
          <motion.div
            className="relative"
            animate={{
              rotateX: isTouchDevice ? 0 : titleRotation.x,
              rotateY: isTouchDevice ? 0 : titleRotation.y,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
          >
            {/* Halo ambiant */}
            <span className="absolute inset-0 text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-cyan-400 blur-3xl opacity-40 animate-pulse block">
              Cédric Kuchen
            </span>

            {/* Extrusion 3D — dégradé fluide cyan → violet → sombre */}
            {Array.from({ length: 20 }, (_, i) => {
              const t = i / 19;
              const r = Math.floor(0 + 100 * t);
              const g = Math.floor(210 - 170 * t);
              const b = Math.floor(255 - 60 * t);
              const alpha = Math.max(0.05, 0.48 - i * 0.022);
              return (
                <span
                  key={i}
                  className="absolute text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black block w-full"
                  style={{
                    transform: `translateZ(${-(i + 1) * 4}px)`,
                    color: `rgba(${r}, ${g}, ${b}, ${alpha})`,
                  }}
                >
                  Cédric Kuchen
                </span>
              );
            })}

            {/* Face avant principale */}
            <span
              className="relative text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 block"
              style={{
                transform: "translateZ(9px)",
                filter: "drop-shadow(0 0 18px rgba(0,255,255,0.7)) drop-shadow(0 0 40px rgba(168,85,247,0.4))",
              }}
            >
              Cédric Kuchen
            </span>
          </motion.div>
        </motion.h1>



        {/* Sous-titre avec glitch */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-8 font-mono relative group"
        >
          <span className="text-gray-400">&lt;</span>
          <TypeAnimation
            sequence={[
              'CYBER_FRONT-END',
              2000,
              'HACKER_BACK-END',
              2000,
              'FULL-STACK_DEV',
              2000,
              'API WELCOME_ !',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-cyan-400 mx-2"
          />
          <span className="text-gray-400">/&gt;</span>
          
          {/* Effet glitch au hover */}
          {/* <span className="absolute -inset-1 text-cyan-400 opacity-0 group-hover:opacity-50 blur-sm transition-opacity pointer-events-none"> */}
              <span className="absolute -inset-1 text-cyan-400/30 text-[80px] left-0 whitespace-nowrap opacity-0 group-hover:opacity-50 blur-xs transition-opacity pointer-events-none">
            {`<CYBER_DEVELOPER/>`}
          </span>
        </motion.div>

        {/* Stats cyberpunk */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4 sm:gap-8 mb-6 sm:mb-12 font-mono"
        >
          {[
            { label: 'PROJECTS', value: '140+', colorClass: 'text-cyan-400', labelClass: 'text-cyan-400/60' },
            { label: 'EXPERIENCE', value: '5+', colorClass: 'text-purple-400', labelClass: 'text-purple-400/60' },
            { label: 'COMMITS', value: '2.5k', colorClass: 'text-pink-400', labelClass: 'text-pink-400/60' },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className={`text-xl sm:text-3xl font-bold ${stat.colorClass} group-hover:animate-pulse`}>
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
          className="flex gap-3 sm:gap-6 justify-center flex-col sm:flex-row items-center"
        >
          <motion.button
            onClick={scrollToNextSection}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-5 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-cyan-500 rounded-sm overflow-hidden cursor-pointer w-full sm:w-auto"
          >
            <span className="relative z-10 text-cyan-500 font-mono text-xs sm:text-sm tracking-wide sm:tracking-wider group-hover:text-black transition-colors duration-300">
              &gt; {chooseLang === "FR" ? "INITIALISER_PROTOCOLE" : "INITIALIZE_PROTOCOL"}

                <span className="absolute mx-auto top-0 left-1/2 -translate-x-1/2 h-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-base text-cyan-500">
                  {chooseLang === "FR" ? "⚡ LANCER_LE_SYSTÈME //" : "⚡ LAUNCH_SYSTEM //"}
                </span>

            </span>
            <motion.div
              className="absolute inset-0 bg-cyan-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ type: "tween" }}
            />
          </motion.button>

          <motion.a
            href="mailto:cedric.kuchen@protonmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-5 sm:px-8 py-3 sm:py-4 relative bg-transparent border-2 border-purple-500 rounded-sm overflow-hidden cursor-pointer w-full sm:w-auto"
          >
            <span className="relative z-10 text-purple-500 font-mono text-xs sm:text-sm tracking-wide sm:tracking-wider group-hover:text-black transition-colors duration-300">
              &gt; {chooseLang === "FR" ? "ÉTABLIR_LA_CONNEXION" : "ESTABLISH_CONNECTION"}

              <span className="absolute mx-auto top-0 left-1/2 -translate-x-1/2 h-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-base text-purple-500">
                {chooseLang === "FR" ? "◈ ENVOYER_UN_SIGNAL" : "◈ SEND_A_SIGNAL"}
              </span>

            </span>
            <motion.div
              className="absolute inset-0 bg-purple-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ type: "tween" }}
            />
          </motion.a>

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

        </div>{/* fin contenu texte */}
      </motion.div>

      {/* Effets de lumière néon latéraux */}
      <div className="absolute left-0 top-0 w-1 h-full bg-linear-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-50"></div>
      <div className="absolute right-0 top-0 w-1 h-full bg-linear-to-b from-pink-500 via-purple-500 to-cyan-500 opacity-50"></div>
    </section>
  );
}