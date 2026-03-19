import { motion } from 'framer-motion';

export default function ContactSection() {
    return (

      <section className="py-20 bg-linear-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-8"
          >
            Travaillons Ensemble
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl mb-12 max-w-2xl mx-auto text-gray-300"
          >
            Besoin de mes services ?
          </motion.p>
          
          <motion.a
            href="mailto:contact@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Contactez-moi
          </motion.a>
        </div>
      </section>

    )
};