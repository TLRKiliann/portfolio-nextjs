'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  linkGitHub?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Mon Eco Pote",
    category: "Game",
    description: "Jeu destiné à la sensibilisation de l'écologie",
    image: "/images/game.png",
    technologies: ["Vite.js", "TypeScript", "CSS"],
    link: "https://mono-game-beta.vercel.app/",
    linkGitHub: "https://github.com/TLRKiliann/mono-game"
  },
  {
    id: 2,
    title: "Dashboard",
    category: "e-commerce",
    description: "Prend l'ip des client avec géolocalisation",
    image: "/images/dashboard.png",
    technologies: ["Next.js", "TypeScript", "PostgreSql", "Tailwind"],
    link: "https://www.youtube.com/watch?v=fMMOh8GGPV0",
    linkGitHub: "https://github.com/TLRKiliann/Nextjs-Dashboard"
  },
  {
    id: 3,
    title: "Skate-shop",
    category: "e-commerce",
    description: "Site de skate avec beaucoup de tricks !",
    image: "/images/skate.png",
    technologies: ["Next.js", "TypeScript", "PostgreSql", "Tailwind"],
    link: "https://www.youtube.com/watch?v=cUJHlCAO1qo",
    linkGitHub: "https://github.com/TLRKiliann/nextjs14-vishwas"
  },
  {
    id: 4,
    title: "Statistiques",
    category: "WebApp",
    description: "Stats des interventions par mois, par année et par intervenant",
    image: "/images/stats.png",
    technologies: ["PHP", "JavaScript", "MySql", "CSS"],
    link: "https://www.youtube.com/watch?v=C30dF36LaZs",
    linkGitHub: "https://github.com/TLRKiliann/statistiques"
  },
  {
    id: 5,
    title: "Time-Track",
    category: "WebApp",
    description: "Application de soins infirmiers améliorée",
    image: "/images/time-track.png",
    technologies: ["Python", "Tkinter", "MySql"],
    link: "https://www.youtube.com/watch?v=aV-X16sxRoI&list=PLVqrrQlbJDKOem4RhHMXvVJJbq6BOY0Fl&index=3",
    linkGitHub: "https://github.com/TLRKiliann/timetrack"
  }
];

export default function Carousel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="relative py-16 bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="h-96 flex items-center justify-center">
            <div className="text-cyan-400 font-mono">Chargement...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative py-16 bg-black overflow-hidden">
      {/* Grille cyberpunk animée */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />
      
      {/* Lignes de balayage néon */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 shadow-[0_0_10px_#00ffff] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400 shadow-[0_0_10px_#00ffff] animate-pulse" />
      </div>

      <div className="container text-center mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-5xl font-bold mx-auto my-8 font-mono"
        >
          <span className="bg-linear-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent animate-pulse">
            &gt; MES PROJETS_
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xs sm:text-sm md:text-xl mb-12 max-w-2xl mx-auto text-cyan-400 font-mono tracking-wide"
        >
          [ INITIALISATION DES RÉALISATIONS ]
        </motion.p>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ 
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-linear-to-br from-gray-900 to-black rounded-xl overflow-hidden shadow-2xl cursor-pointer group border border-cyan-500 border-opacity-30 hover:border-cyan-500/80 transition-all duration-300"
              >
                {/* Effet de scan néon */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Bordure lumineuse */}
                <div className="absolute inset-0 rounded-xl border border-cyan-400/20 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-cyan-400 to-transparent" />
                
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500 brightness-85 group-hover:brightness-100"
                  />
                  {/* Dégradé plus subtil */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />
                  
                  {/* Ajout d'un effet de lueur au survol */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-t from-cyan-500/20 via-transparent to-transparent" />

                  
                  {/* Overlay glitch */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay" />
                    <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 shadow-[0_0_10px_#00ffff] animate-pulse" />
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-sm text-cyan-400 font-mono font-semibold tracking-wider">
                      {`[ ${project.category.toUpperCase()} ]`}
                    </span>
                    <h3 className="text-xl font-bold text-white font-mono tracking-wide">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6 bg-black bg-opacity-50 backdrop-blur-sm">
                  <p className="text-gray-300 mb-4 font-mono text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-cyan-950 bg-opacity-50 border border-cyan-500 border-opacity-30 text-cyan-400 rounded-md text-sm font-mono hover:border-cyan-500/80 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className={`flex flex-row ${project.title === "Statistiques" ? "justify-center" : "justify-between"} gap-3`}>
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex flex-row items-center justify-center gap-2 px-4 py-2 bg-linear-to-r from-cyan-600 to-cyan-700 text-white rounded-lg hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 font-mono text-sm border border-cyan-400/30 hover:border-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.3)]"
                    >
                      {project.link === "https://mono-game-beta.vercel.app/" ? (
                        <>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 19h20L12 2z" />
                          </svg>
                          <span>VERCEL</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                          </svg>
                          <span>YOUTUBE</span>
                        </>
                      )}
                    </motion.a>

                    {project.linkGitHub && project.title !== "Statistiques" && (
                      <motion.a
                        href={project.linkGitHub}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex flex-row items-center justify-center gap-2 px-4 py-2 bg-linear-to-r from-fuchsia-600 to-fuchsia-700 text-white rounded-lg hover:from-fuchsia-500 hover:to-fuchsia-600 transition-all duration-300 font-mono text-sm border border-fuchsia-400/30 hover:border-fuchsia-400 shadow-[0_0_10px_rgba(255,0,255,0.3)]"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>GITHUB</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}