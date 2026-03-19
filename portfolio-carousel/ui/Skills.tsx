// components/SkillsMinimal.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiFigma,
  SiMongodb,
  SiGraphql,
  SiNextdotjs,
  SiTailwindcss
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: SiReact, level: 90, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, level: 85, color: '#3178C6' },
  { name: 'Next.js', icon: SiNextdotjs, level: 88, color: '#000000' },
  { name: 'Node.js', icon: SiNodedotjs, level: 80, color: '#339933' },
  { name: 'Tailwind', icon: SiTailwindcss, level: 95, color: '#06B6D4' },
  { name: 'MongoDB', icon: SiMongodb, level: 75, color: '#47A248' },
  { name: 'GraphQL', icon: SiGraphql, level: 70, color: '#E10098' },
  { name: 'Figma', icon: SiFigma, level: 82, color: '#F24E1E' },
];

export default function SkillsMinimal() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-4"
        >
          Expertise Technique
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Des technologies modernes pour des solutions performantes
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <skill.icon 
                className="w-12 h-12 mx-auto mb-3 transition-transform group-hover:scale-110" 
                style={{ color: skill.color }}
              />
              <h3 className="text-center font-semibold text-gray-800 mb-2">{skill.name}</h3>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-200">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-linear-to-r from-blue-500 to-purple-500"
                  />
                </div>
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-bold text-gray-500">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}