'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
  linkYoutube: string;
  linkGitHub: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Mon Eco Pote",
    category: "Game",
    description: "Jeu destiné à la sensibilisation de l'écologie",
    image: "/images/game.png",
    technologies: ["Vite.js", "TypeScript", "CSS"],
    linkYoutube: "#",
    linkGitHub: "#"
  },
  {
    id: 2,
    title: "Dashboard",
    category: "e-commerce",
    description: "Prend l'ip des client avec géolocalisation",
    image: "/images/dashboard.png",
    technologies: ["Next.js", "TypeScript", "PostgreSql", "Tailwind"],
    linkYoutube: "#",
    linkGitHub: "#"
  },
  {
    id: 3,
    title: "Skate-shop",
    category: "e-commerce",
    description: "Site de skate avec beaucoup de tricks !",
    image: "/images/skate.png",
    technologies: ["Next.js", "TypeScript", "PostgreSql", "Tailwind"],
    linkYoutube: "#",
    linkGitHub: "#"
  },
  {
    id: 4,
    title: "Statistiques",
    category: "WebApp",
    description: "Stats des interventions par mois, par année et par intervenant",
    image: "/images/stats.png",
    technologies: ["PHP", "JavaScript", "MySql", "CSS"],
    linkYoutube: "#",
    linkGitHub: "#"
  },
  {
    id: 5,
    title: "Time-Track",
    category: "WebApp",
    description: "Application de soins infirmiers améliorée",
    image: "/images/time-track.png",
    technologies: ["Python", "Tkinter", "MySql"],
    linkYoutube: "#",
    linkGitHub: "#"
  }
];

export default function Carousel() {
  return (
    <div className="relative py-16 bg-linear-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-4"
        >
          Mes Projets
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl text-center text-gray-300 mb-12"
        >
          Découvrez une sélection de mes réalisations
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
          pagination={{ clickable: true }}
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
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-xl overflow-hidden shadow-2xl cursor-pointer group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-sm text-blue-400 font-semibold">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className='flex flex-row justify-between'>
                    <motion.a
                      href={project.linkYoutube}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-row items-center justify-between px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                      <p className='ml-2'>Voir le projet</p>
                    </motion.a>

               
                    <motion.a
                      href={project.linkGitHub}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-row items-center justify-between px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>

                        <p className='ml-2'>Lien GitHub</p>
                    </motion.a>
                    

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