// ui/Carousel.tsx
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
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Projet Éco-Connect",
    category: "Application Web",
    description: "Plateforme de connexion pour initiatives écologiques locales",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    id: 2,
    title: "ArtVerse Gallery",
    category: "E-commerce",
    description: "Galerie d'art virtuelle avec réalité augmentée",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    technologies: ["Next.js", "Three.js", "Stripe"],
    link: "#"
  },
  {
    id: 3,
    title: "FitLife Tracker",
    category: "Application Mobile",
    description: "Application de fitness avec IA personnalisée",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    technologies: ["React Native", "Firebase", "TensorFlow"],
    link: "#"
  },
  {
    id: 4,
    title: "Smart City Dashboard",
    category: "Data Visualization",
    description: "Tableau de bord urbain en temps réel",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    technologies: ["D3.js", "Python", "AWS"],
    link: "#"
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
                  
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Voir le projet
                  </motion.a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}