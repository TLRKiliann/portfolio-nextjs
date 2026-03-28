"use client";

import { BinaryNumbersType } from "@/lib/type";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { textAPI_EN, textAPI_FR, textBackendEN, textBackendFR, textsEN_Xp, textsFR_Xp, textSPA_EN, textSPA_FR } from "@/lib/TextForLegend";

export default function Legend() {

  const { chooseLang } = useLanguage();
  const [binaryNumbers, setBinaryNumbers] = useState<BinaryNumbersType[]>([]);

  useEffect(() => {
    const numbers = Array(15).fill(null).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 15 + 10,
      text: Math.random() > 0.5 ? '101010' : '010101'
    }));
    setBinaryNumbers(numbers);
  }, []);

  return (
    <section className="relative py-16 sm:py-34 bg-black overflow-hidden">
      {/* Grille cyberpunk animée avec effet de profondeur */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />

      {/* Particules numériques flottantes - moins sur mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {binaryNumbers.map((item: BinaryNumbersType, i: number) => (
          <div
            key={i}
            className="absolute text-cyan-500/10 font-mono text-[8px] sm:text-[10px] whitespace-nowrap animate-float"
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`
            }}
          >
            {item.text}
          </div>
        ))}
      </div>

      <div className="relative z-10 px-4 sm:px-0">

        {/* Titre principal avec effet glitch */}
        <div className="relative text-center mb-20 sm:mb-40">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-5xl font-bold mx-auto mb-4 font-mono"
          >
            <span className="bg-linear-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent animate-pulse">
              &gt; {chooseLang === "FR" ? `TOUT EST UNE QUESTION DE LOGIQUE` : `IT'S ALL A MATTER OF LOGIC`} 
            </span>
            <span className="text-fuchsia-400 animate-pulse inline-block ml-1 sm:ml-2">_</span>
          </motion.h2>
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute mt-4 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent"
          />
        </div>

        {/* Citation principale avec effet terminal - plein largeur sur mobile */}
        <div className="relative w-full sm:w-[70%] lg:w-[50%] m-auto group px-4 sm:px-0">
          <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-fuchsia-500 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500" />
          <div className="relative p-4 sm:p-6 rounded-xl bg-black/80 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,255,0.4)] border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            {/* En-tête de terminal */}
            <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4 pb-2 border-b border-cyan-500/30">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full" />
              <span className="text-[8px] sm:text-[10px] text-cyan-400/60 font-mono ml-1 sm:ml-2">root@cyberpunk:~$</span>
              <span className="text-[8px] sm:text-[10px] text-cyan-400 ml-auto animate-pulse">SYSTEM_READY</span>
            </div>
            
            <p className="text-justify text-gray-300 font-mono text-xs sm:text-sm leading-relaxed">
              <span className="text-cyan-400">[ SYSTEM.MSG ]</span>
              <span className="text-fuchsia-400"> &gt;</span> {chooseLang === "FR" ? `En tant que développeur web, il est essentiel de maîtriser les enjeux de sécurité, 
              de performance, de maintenabilité et d&apos;expérience utilisateur, en adoptant des bonnes pratiques rigoureuses à chaque niveau : 
              code, données, infrastructure et interactions.` : `As a web developer, it is essential to master the challenges of security, 
              performance, maintainability, and user experience by adopting rigorous best practices at every level: 
              code, data, infrastructure, and interactions.`}
            </p>
            
            {/* Ligne de commande fictive */}
            <div className="mt-3 sm:mt-4 pt-2 border-t border-cyan-500/30 flex items-center gap-2">
              <span className="text-green-400 text-[10px] sm:text-xs">$</span>
              <span className="text-cyan-400 text-[10px] sm:text-xs">./validate_skills --all</span>
              <span className="text-gray-500 text-[10px] sm:text-xs animate-pulse">_</span>
            </div>
          </div>
        </div>


        {/* Sous-titre avec effet scan */}
        <div className="relative my-12 sm:my-20 py-4">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-500/10 to-transparent animate-scan" />
          <h3 className="text-base sm:text-2xl font-bold text-center font-mono relative px-4">
            <span className="text-cyan-400 animate-pulse inline-block mr-1 sm:mr-2">&gt;</span>
            <span className="bg-linear-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              {chooseLang === "FR" ? `MES EXPÉRIENCES` : `MY EXPERIENCES`}
            </span>
            <span className="text-fuchsia-400 animate-pulse inline-block ml-1 sm:ml-2 mb-4">_</span>
          </h3>
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent"
          />
        </div>

        {/* Cartes de projets */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-around m-auto gap-6 sm:gap-8 px-4 sm:px-0">
          {/* Carte Expériences */}
          <div className="w-full lg:w-[48%] group relative">
            <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 to-cyan-300 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500" />
            <div className="relative p-4 sm:p-6 rounded-xl bg-black/80 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-cyan-400 to-transparent group-hover:via-cyan-300 transition-all" />
              
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <h4 className="text-lg sm:text-xl font-bold font-mono text-cyan-400">
                    {`[ Expériences ]`}
                  </h4>
                </div>
                <div className="text-[8px] sm:text-[10px] font-mono text-cyan-400/50 border border-cyan-400/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                  Expériences
                </div>
              </div>
              
              <p className="text-[10px] sm:text-xs font-mono text-cyan-400/70 mb-3 sm:mb-4 tracking-wider">
                {`>_ Natif : Python3 + JavaScript + PHP`}
                <br />
                {`>_ Framework : React + Sveltkit + VueJs`}
              </p>
              
              <ul className="list-none text-justify space-y-2 sm:space-y-3">
              
                {(chooseLang === "FR" ? textsFR_Xp : textsEN_Xp).map((item: string, idx: number) => (
                  <li key={idx} className="text-gray-400 font-mono text-xs sm:text-sm flex items-start gap-2 group/item">
                    <span className="text-cyan-400 my-auto opacity-0 group-hover/item:opacity-100 transition">▹</span>
                    <span className="text-gray-300 group-hover/item:text-cyan-300 transition text-[11px] sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-4 sm:mt-6 pt-3 border-t border-cyan-500/30 flex justify-between items-center">
                <span className="text-[6px] sm:text-[8px] font-mono text-cyan-400/50">STATUS: ACTIVE</span>
                <span className="text-[6px] sm:text-[8px] font-mono text-cyan-400/30 animate-pulse">⤷ PROCESSING</span>
              </div>
            </div>
          </div>

          {/* Carte Backend */}
          <div className="w-full lg:w-[48%] group relative">
            <div className="absolute -inset-0.5 bg-linear-to-r from-fuchsia-500 to-fuchsia-300 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500" />
            <div className="relative p-4 sm:p-6 rounded-xl bg-black/80 backdrop-blur-sm border border-fuchsia-500/30 hover:border-fuchsia-500 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-fuchsia-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-fuchsia-400 to-transparent group-hover:via-fuchsia-300 transition-all" />
              
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-fuchsia-400 rounded-full animate-pulse" />
                  <h4 className="text-lg sm:text-xl font-bold font-mono text-fuchsia-400">
                    {`[ Backend ]`}
                  </h4>
                </div>
                <div className="text-[8px] sm:text-[10px] font-mono text-fuchsia-400/50 border border-fuchsia-400/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                  Backend
                </div>
              </div>
              
              <p className="text-[10px] sm:text-xs font-mono text-fuchsia-400/70 mb-3 sm:mb-4 tracking-wider">
                {`>_ STACK : MariaDB, MySQL, PostgreSQL, MongoDB, Lamp`}
              </p>
              
              <ul className="list-none text-justify space-y-2 sm:space-y-3">

                {(chooseLang === "FR" ? textBackendFR : textBackendEN).map((item: string, idx: number) => (
                  <li key={idx} className="text-gray-400 font-mono text-xs sm:text-sm flex items-start gap-2 group/item">
                    <span className="text-fuchsia-400 my-auto opacity-0 group-hover/item:opacity-100 transition">▹</span>
                    <span className="text-gray-300 group-hover/item:text-fuchsia-300 transition text-[11px] sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-4 sm:mt-6 pt-3 border-t border-fuchsia-500/30 flex justify-between items-center">
                <span className="text-[6px] sm:text-[8px] font-mono text-fuchsia-400/50">STATUS: ACTIVE</span>
                <span className="text-[6px] sm:text-[8px] font-mono text-fuchsia-400/30 animate-pulse">⤷ READY</span>
              </div>
            </div>
          </div>
        </div>



        {/* 2 Sous-titre avec effet scan */}
        <div className="relative my-12 sm:my-20 py-4">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-500/10 to-transparent animate-scan" />
          <h3 className="text-base sm:text-2xl font-bold text-center font-mono relative px-4">
            <span className="text-cyan-400 animate-pulse inline-block mr-1 sm:mr-2">&gt;</span>
            <span className="bg-linear-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              {chooseLang === "FR" ? `MES DERNIERS PROJETS RÉALISÉS POUR L'ÉVEIL` : `MY LATEST PROJECTS FOR L'ÉVEIL`}
            </span>
            <span className="text-fuchsia-400 animate-pulse inline-block ml-1 sm:ml-2 mb-4">_</span>
          </h3>
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent"
          />
        </div>

        {/* 2 Cartes de projets - colonne sur mobile, ligne sur desktop */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-around m-auto gap-6 sm:gap-8 px-4 sm:px-0">
          {/* Carte API - plein largeur sur mobile */}
          <div className="w-full lg:w-[48%] group relative">
            <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 to-cyan-300 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500" />
            <div className="relative p-4 sm:p-6 rounded-xl bg-black/80 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-cyan-400 to-transparent group-hover:via-cyan-300 transition-all" />
              
              {/* Badge tech */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <h4 className="text-lg sm:text-xl font-bold font-mono text-cyan-400">
                    {`[ API ]`}
                  </h4>
                </div>
                <div className="text-[8px] sm:text-[10px] font-mono text-cyan-400/50 border border-cyan-400/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                  NODE_JS
                </div>
              </div>
              
              <p className="text-[10px] sm:text-xs font-mono text-cyan-400/70 mb-3 sm:mb-4 tracking-wider">
                {`>_ STACK : NodeJs + JavaScript + TypeScript`}
              </p>
              
              <ul className="list-none text-justify space-y-2 sm:space-y-3">

                {(chooseLang === "FR" ? textAPI_FR : textAPI_EN).map((item: string, idx: number) => (
                  <li key={idx} className="text-gray-400 font-mono text-xs sm:text-sm flex items-start gap-2 group/item">
                    <span className="text-cyan-400 my-auto opacity-0 group-hover/item:opacity-100 transition">▹</span>
                    <span className="text-gray-300 group-hover/item:text-cyan-300 transition text-[11px] sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Footer carte */}
              <div className="mt-4 sm:mt-6 pt-3 border-t border-cyan-500/30 flex justify-between items-center">
                <span className="text-[6px] sm:text-[8px] font-mono text-cyan-400/50">STATUS: ACTIVE</span>
                <span className="text-[6px] sm:text-[8px] font-mono text-cyan-400/30 animate-pulse">⤷ PROCESSING</span>
              </div>
            </div>
          </div>

          {/* Carte SPA - plein largeur sur mobile */}
          <div className="w-full lg:w-[48%] group relative">
            <div className="absolute -inset-0.5 bg-linear-to-r from-fuchsia-500 to-fuchsia-300 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500" />
            <div className="relative p-4 sm:p-6 rounded-xl bg-black/80 backdrop-blur-sm border border-fuchsia-500/30 hover:border-fuchsia-500 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-fuchsia-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-fuchsia-400 to-transparent group-hover:via-fuchsia-300 transition-all" />
              
              {/* Badge tech */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-fuchsia-400 rounded-full animate-pulse" />
                  <h4 className="text-lg sm:text-xl font-bold font-mono text-fuchsia-400">
                    {`[ SPA ]`}
                  </h4>
                </div>
                <div className="text-[8px] sm:text-[10px] font-mono text-fuchsia-400/50 border border-fuchsia-400/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                  VITE.JS
                </div>
              </div>
              
              <p className="text-[10px] sm:text-xs font-mono text-fuchsia-400/70 mb-3 sm:mb-4 tracking-wider">
                {`>_ STACK : Vite.js + TypeScript + Express`}
              </p>
              
              <ul className="list-none text-justify space-y-2 sm:space-y-3">

                {(chooseLang === "FR" ? textSPA_FR : textSPA_EN).map((item: string, idx: number) => (
                  <li key={idx} className="text-gray-400 font-mono text-xs sm:text-sm flex items-start gap-2 group/item">
                    <span className="text-fuchsia-400 my-auto opacity-0 group-hover/item:opacity-100 transition">▹</span>
                    <span className="text-gray-300 group-hover/item:text-fuchsia-300 transition text-[11px] sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Footer carte */}
              <div className="mt-4 sm:mt-6 pt-3 border-t border-fuchsia-500/30 flex justify-between items-center">
                <span className="text-[6px] sm:text-[8px] font-mono text-fuchsia-400/50">STATUS: ACTIVE</span>
                <span className="text-[6px] sm:text-[8px] font-mono text-fuchsia-400/30 animate-pulse">⤷ READY</span>
              </div>
            </div>
          </div>
        </div>









        {/* Ligne de fin cyberpunk */}
        <div className="mt-16 sm:mt-32 text-center">
          <div className="inline-flex items-center gap-2 sm:gap-4 text-[8px] sm:text-[10px] font-mono text-gray-600">
            <span className="text-cyan-400">[</span>
            <span>SYSTEM_INTEGRITY: 100%</span>
            <span className="text-fuchsia-400">]</span>
            <span className="text-cyan-400 animate-pulse">●</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float linear infinite;
        }
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </section>
  );
}