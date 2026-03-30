"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  
  const { chooseLang } = useLanguage();

  return (
    <section className="relative min-h-[100dvh] bg-black overflow-hidden">
      {/* Grille cyberpunk animée */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />
      
      {/* Lignes de balayage néon */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-400 to-fuchsia-500 opacity-80 shadow-[0_0_12px_#00ffff,0_0_30px_#ff00ff40]" />
        <div className="absolute top-[1px] left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-400/30 to-fuchsia-500/30" />
        <div className="absolute bottom-[1px] left-0 w-full h-px bg-linear-to-r from-fuchsia-500/30 to-transparent via-cyan-400/30" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-fuchsia-500 via-cyan-400 to-transparent opacity-80 shadow-[0_0_12px_#00ffff,0_0_30px_#ff00ff40]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col min-h-[100dvh] justify-evenly">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mx-auto font-mono text-center"
        >
          <span className="bg-linear-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent animate-pulse">
            &gt; {chooseLang === "FR" ? `TRAVAILLONS ENSEMBLE_` : `LET'S WORK TOGETHER_`}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm sm:text-base md:text-xl max-w-2xl mx-auto text-cyan-400 font-mono tracking-wide text-center px-2"
        >
          [ SYSTEM.MSG ] &gt; {chooseLang === "FR" ? `Prêt à transformer vos idées en réalité. Contactez-moi.` : `Ready to turn your ideas into reality? Contact me.`}
        </motion.p>

        <div className='flex items-center justify-center w-full'>
          <motion.a
            href="mailto:cedric.kuchen@protonmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 sm:px-8 py-4 sm:py-4 bg-linear-to-r from-cyan-600 to-cyan-700 text-white rounded-lg font-mono font-semibold hover:from-cyan-500 hover:to-cyan-600 transition-all border border-cyan-400/30 hover:border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.3)] text-center text-sm sm:text-base"
          >
            &gt; CONTACT
          </motion.a>
        </div>

        {/* Section Photo avec effet cyberpunk */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <div className="w-28 h-28 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.5)] relative">
              <Image
                src="/images/photo_me.png"
                width={500}
                height={500}
                alt="Ma photo"
                className="w-full h-full object-cover relative z-10"
              />
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-full z-20 pointer-events-none" />
            </div>
            <div className="absolute -inset-1 w-full h-full rounded-full border border-cyan-400/30 animate-pulse pointer-events-none" />
          </div>
        </motion.div>

        {/* Réseaux Sociaux style cyberpunk */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center gap-6 sm:gap-4 md:gap-6 flex-wrap"
        >
          <motion.a
            href="https://github.com/TLRKiliann"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.1 }}
            className="bg-black/50 p-2 sm:p-2.5 md:p-3 rounded-full border border-cyan-500/50 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-all backdrop-blur-sm"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/cedric-kuchen-dev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.1 }}
            className="bg-black/50 p-2 sm:p-2.5 md:p-3 rounded-full border border-cyan-500/50 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-all backdrop-blur-sm"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </motion.a>

          <motion.a
            href="https://codepen.io/koalatr33"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.1 }}
            className="bg-black/50 p-2 sm:p-2.5 md:p-3 rounded-full border border-fuchsia-500/50 hover:border-fuchsia-500 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-all backdrop-blur-sm"
            aria-label="CodePen"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-fuchsia-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l-10 6.5v7l10 6.5 10-6.5v-7l-10-6.5zm0 3.5l5.5 3.5-5.5 3.5-5.5-3.5 5.5-3.5zm-7 6.5l4 2.5-4 2.5v-5zm14 0v5l-4-2.5 4-2.5zm-7 4.5l5.5-3.5v3.5l-5.5 3.5-5.5-3.5v-3.5l5.5 3.5z"/>
            </svg>
          </motion.a>

          <motion.a
            href="https://www.youtube.com/@estebancatanea"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.1 }}
            className="bg-black/50 p-2 sm:p-2.5 md:p-3 rounded-full border border-red-500/50 hover:border-red-500 hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all backdrop-blur-sm"
            aria-label="YouTube"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </motion.a>
        </motion.div>

        {/* Copyright style cyberpunk */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-xs text-cyan-500/50 py-3 border-t border-cyan-500/20 font-mono text-center"
        >
          © {new Date().getFullYear()}&nbsp;Cédric Kuchen &gt; {chooseLang === "FR" ? `TOUS DROITS RÉSERVÉS_` : `ALL RIGHTS RESERVED_`}
        </motion.p>
      </div>
    </section>
  )
};