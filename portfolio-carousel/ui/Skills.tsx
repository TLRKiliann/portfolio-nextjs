'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiFigma,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiPhp,
  SiPython,
  SiSass,
  SiMysql,
  SiPostgresql,
  SiMariadb,
  SiJavascript
} from 'react-icons/si';

const skills = [
  // FRONTEND
  { name: 'React', icon: SiReact, level: 90, color: '#61DAFB', category: 'frontend' },
  { name: 'Next.js', icon: SiNextdotjs, level: 88, color: '#FFFFFF', category: 'frontend' },
  { name: 'TypeScript', icon: SiTypescript, level: 85, color: '#3178C6', category: 'frontend' },
  { name: 'JavaScript', icon: SiJavascript, level: 90, color: '#F7DF1E', category: 'frontend' },
  { name: 'Tailwind', icon: SiTailwindcss, level: 95, color: '#06B6D4', category: 'frontend' },
  { name: 'Sass', icon: SiSass, level: 85, color: '#CC6699', category: 'frontend' },
  
  // BACKEND
  { name: 'Node.js', icon: SiNodedotjs, level: 80, color: '#339933', category: 'backend' },
  { name: 'Python', icon: SiPython, level: 75, color: '#3776AB', category: 'backend' },
  { name: 'PHP', icon: SiPhp, level: 70, color: '#777BB4', category: 'backend' },
  
  // DATABASES
  { name: 'MongoDB', icon: SiMongodb, level: 75, color: '#47A248', category: 'database' },
  { name: 'MySQL', icon: SiMysql, level: 80, color: '#4479A1', category: 'database' },
  { name: 'PostgreSQL', icon: SiPostgresql, level: 75, color: '#4169E1', category: 'database' },
  { name: 'MariaDB', icon: SiMariadb, level: 70, color: '#003545', category: 'database' },
  
  // DESIGN
  { name: 'Figma', icon: SiFigma, level: 82, color: '#F24E1E', category: 'design' },
];

const categoryConfig = {
  frontend: { 
    name: 'FRONTEND', 
    glitch: '>_ FRONTEND_',
    grid: '0 1 0 1 0 1',
    binary: '1010',
    color: '#00ffff'
  },
  backend: { 
    name: 'BACKEND', 
    glitch: '>_ BACKEND_',
    grid: '1 0 1 0 1 0',
    binary: '1100',
    color: '#00ff99'
  },
  database: { 
    name: 'DATABASES', 
    glitch: '>_ DATABASES_',
    grid: '0 1 1 0 1 1',
    binary: '1011',
    color: '#ffaa00'
  },
  design: { 
    name: 'DESIGN', 
    glitch: '>_ DESIGN_',
    grid: '1 1 0 1 1 0',
    binary: '1110',
    color: '#ff44aa'
  },
};

export default function SkillsCyberpunk() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [glitchIndex, setGlitchIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [binaryParticles, setBinaryParticles] = useState<Array<{x: number, y: number, duration: number, delay: number, value: string}>>([]);

  // Tous les hooks doivent être appelés avant les conditions
  useEffect(() => {
    setMounted(true);
    
    // Générer les particules binaires côté client
    const particles = Array(50).fill(null).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      value: Math.random() > 0.5 ? '1' : '0'
    }));
    setBinaryParticles(particles);

    const glitchInterval = setInterval(() => {
      setGlitchIndex(Math.floor(Math.random() * 4));
    }, 2000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(glitchInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Grouper les skills par catégorie
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  // Ne pas retourner de JSX conditionnel avant les hooks
  if (!mounted) {
    return (
      <section className="relative min-h-screen bg-black overflow-hidden py-32 flex items-center justify-center">
        <div className="text-cyan-400 font-mono text-xl animate-pulse">
          &gt; LOADING TECH_STACK...
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative min-h-screen bg-black overflow-hidden py-32">
      {/* Effet de scanlines */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-20"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(0,255,255,0.03) 0px, rgba(255,0,255,0.03) 2px, transparent 3px, transparent 8px)',
        }}
      />

      {/* Grille cyberpunk animée */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: `perspective(500px) rotateX(${mousePosition.y}deg)`,
        }} />
      </div>

      {/* Particules numériques */}
      <div className="absolute inset-0 overflow-hidden">
        {binaryParticles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono text-cyan-500/20"
            initial={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [null, '-100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear"
            }}
          >
            {particle.value}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Le reste du contenu inchangé... */}
        <div className="text-center mb-32 relative">
          <div className="relative inline-block">

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-5xl font-bold mx-auto my-8 font-mono"
            >
              <span className="bg-linear-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent animate-pulse">
                &gt; TECH_STACK_
              </span>
            </motion.h2>

            <div className="text-xs sm:text-sm md:text-xl mb-12 max-w-2xl mx-auto gap-2 font-mono tracking-wide">

              <span className="text-cyan-400">{'{'}</span>
              <span className="text-purple-400">SYSTEM_READY</span>
              <span className="text-pink-400">{'}'}</span>
            </div>
          </div>
          
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent"
          />
        </div>

        {/* Catégories */}
        <div className="space-y-20">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => {
            const config = categoryConfig[category as keyof typeof categoryConfig];
            const isGlitching = glitchIndex === categoryIndex;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.3 }}
                className="relative"
              >
                {/* Binaire décoratif */}
                <div className="absolute -left-20 top-0 font-mono text-xs text-cyan-500/20 rotate-90">
                  {config.binary.repeat(20)}
                </div>

                {/* En-tête de catégorie */}
                <div className="relative" style={{ marginBottom: '60px', marginTop: '60px' }}>
                  <div className="absolute inset-0 blur-3xl opacity-20" style={{ background: config.color }} />
                  
                  <div className="relative flex items-center justify-between">
                    <div className="flex-1 h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent" />
                    
                    <motion.div
                      animate={isGlitching ? { x: [-5, 5, -5, 5, 0], skewX: [0, -5, 5, -5, 0] } : {}}
                      transition={{ duration: 0.2 }}
                      className="relative px-8"
                    >
                      <h2 className="font-black font-mono relative" style={{ fontSize: 'clamp(1.0rem, 1vw, 1.2rem)' }}>
                        <span className="relative z-10 text-white">
                          {isGlitching ? config.glitch : config.name}
                        </span>
                        {isGlitching && (
                          <>
                            <span className="absolute top-0 left-0 -translate-x-1 text-cyan-500/50 blur-sm">
                              {config.glitch}
                            </span>
                            <span className="absolute top-0 left-0 translate-x-1 text-pink-500/50 blur-sm">
                              {config.glitch}
                            </span>
                          </>
                        )}
                      </h2>
                      
                      <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        <span className="w-1 h-1 bg-green-400 rounded-full animate-ping" />
                        <span className="text-[8px] font-mono text-green-400 tracking-wider">ACTIVE</span>
                      </div>
                    </motion.div>
                    
                    <div className="flex-1 h-px bg-linear-to-r from-transparent via-pink-500 to-transparent" />
                  </div>

                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1">
                    {config.grid.split(' ').map((bit, i) => (
                      <div key={i} className={`w-1 h-1 ${bit === '1' ? 'bg-cyan-400' : 'bg-gray-600'}`} />
                    ))}
                  </div>
                </div>

                {/* Grille de skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.3 + skillIndex * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="group relative w-full max-w-sm"
                    >
                      <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-lg p-6 border border-gray-800 overflow-hidden">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ boxShadow: `inset 0 0 30px ${skill.color}20` }} />
                        
                        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-50" />
                        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-50" />
                        
                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-4">
                            <div className="relative">
                              <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: skill.color }} />
                              <skill.icon className="w-12 h-12 relative z-10 transition-all duration-300 group-hover:scale-110" style={{ color: skill.color }} />
                            </div>
                            
                            <div className="relative">
                              <span className="text-3xl font-black font-mono text-white/10">{skill.level}</span>
                              <span className="absolute inset-0 flex items-center justify-center text-sm font-mono text-cyan-400">{skill.level}%</span>
                            </div>
                          </div>

                          <h3 className="text-xl font-bold font-mono mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r transition-all"
                            style={{ backgroundImage: `linear-gradient(90deg, ${skill.color}, white)` }}>
                            {skill.name}
                          </h3>

                          <div className="relative pt-4">
                            <div className="absolute -top-1 left-0 text-[8px] font-mono text-gray-600">0%</div>
                            <div className="absolute -top-1 right-0 text-[8px] font-mono text-gray-600">100%</div>
                            
                            <div className="h-3 bg-gray-900 rounded-sm border border-gray-700 relative overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={inView ? { width: `${skill.level}%` } : {}}
                                transition={{ duration: 1, delay: categoryIndex * 0.3 + skillIndex * 0.1 + 0.5 }}
                                className="h-full relative"
                                style={{ background: `linear-gradient(90deg, ${skill.color}, white)` }}
                              >
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                              </motion.div>
                            </div>

                            <div className="flex justify-between mt-1">
                              {[0, 25, 50, 75, 100].map((mark) => (
                                <div key={mark} className="relative">
                                  <div className={`w-px h-1 ${mark <= skill.level ? 'bg-cyan-400' : 'bg-gray-700'}`} />
                                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[6px] font-mono text-gray-600">{mark}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="mt-4 flex justify-end">
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <div key={i} className={`w-1 h-3 ${i < skill.level / 20 ? 'bg-cyan-400' : 'bg-gray-700'}`} />
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                          style={{ background: `radial-gradient(circle at 50% 50%, ${skill.color}20, transparent 70%)` }} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer cyberpunk */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="relative mt-16"
        >
          <div className="relative mb-16">
            <div className="absolute left-1/2 -translate-x-1/2 w-px h-16 bg-linear-to-b from-transparent via-cyan-500 to-transparent" />
            <div className="absolute left-1/2 -translate-x-1/2 top-16 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800 font-mono">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-800">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-xs text-gray-500 ml-2">system@cyberpunk:~$</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-cyan-400 w-32">TOTAL_SKILLS:</span>
                  <span className="text-white">{skills.length}</span>
                  <span className="text-green-400 text-xs">[OK]</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-purple-400 w-32">CATEGORIES:</span>
                  <span className="text-white">{Object.keys(groupedSkills).length}</span>
                  <span className="text-green-400 text-xs">[OK]</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-pink-400 w-32">AVG_LEVEL:</span>
                  <span className="text-white">
                    {Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length)}%
                  </span>
                  <span className="text-green-400 text-xs">[OK]</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-yellow-400 w-32">MASTERED:</span>
                  <span className="text-white">{skills.filter(s => s.level >= 85).length}</span>
                  <span className="text-green-400 text-xs">[OK]</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800 flex items-center gap-2">
                <span className="text-green-400">$</span>
                <span className="text-cyan-400">./scan_skills</span>
                <span className="text-gray-500 animate-pulse">_</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 text-gray-700 font-mono text-xs">
            <span className="text-cyan-400/50">[</span> SYSTEM_STATUS: ONLINE <span className="text-pink-400/50">]</span>
            <br />
            <span className="text-gray-800">© 2024 // NEO_TOKYO // v2.0.24</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}