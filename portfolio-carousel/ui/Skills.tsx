// components/Skills.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'React/Next.js', level: 90, color: 'bg-blue-500' },
  { name: 'TypeScript', level: 85, color: 'bg-green-500' },
  { name: 'Node.js', level: 80, color: 'bg-yellow-500' },
  { name: 'UI/UX Design', level: 75, color: 'bg-purple-500' },
  { name: 'MongoDB', level: 70, color: 'bg-red-500' },
  { name: 'GraphQL', level: 65, color: 'bg-indigo-500' },
];

export default function Skills() {
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
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Mes Compétences
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-6"
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700">{skill.name}</span>
                <span className="text-gray-600">{skill.level}%</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className={`h-full ${skill.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}