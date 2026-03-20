"use client";

import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section className="py-12 bg-linear-to-br from-gray-900 to-gray-800 text-white">
            <div className="container mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold mx-auto my-8"
                >
                    Travaillons Ensemble
                </motion.h2>
                
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-xl mb-12 max-w-2xl mx-auto text-gray-300"
                >
                    Besoin de mes services ? Je suis prêt à relevé n'importe quel défit.
                </motion.p>
                
                <motion.a
                    href="mailto:contact@example.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all mb-12"
                >
                    Contactez-moi
                </motion.a>

                {/* Section Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                        <img 
                            src="/images/photo_me.png" 
                            alt="Ma photo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Réseaux Sociaux */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex justify-center gap-6 flex-wrap"
                >
                    <motion.a
                        href="https://github.com/votre-compte"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                        className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-all"
                        aria-label="GitHub"
                    >
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </motion.a>

                    <motion.a
                        href="https://linkedin.com/in/votre-compte"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                        className="bg-blue-700 p-3 rounded-full hover:bg-blue-600 transition-all"
                        aria-label="LinkedIn"
                    >
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </motion.a>

                    <motion.a
                        href="https://codepen.io/votre-compte"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                        className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-all"
                        aria-label="CodePen"
                    >
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l-10 6.5v7l10 6.5 10-6.5v-7l-10-6.5zm0 3.5l5.5 3.5-5.5 3.5-5.5-3.5 5.5-3.5zm-7 6.5l4 2.5-4 2.5v-5zm14 0v5l-4-2.5 4-2.5zm-7 4.5l5.5-3.5v3.5l-5.5 3.5-5.5-3.5v-3.5l5.5 3.5z"/>
                        </svg>
                    </motion.a>

                    <motion.a
                        href="https://youtube.com/@votre-compte"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                        className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-all"
                        aria-label="YouTube"
                    >
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                    </motion.a>
                </motion.div>

                {/* Copyright */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="text-sm text-gray-500 mt-12 pt-8 border-t border-gray-800"
                >
                    © {new Date().getFullYear()} Cédric Kuchen. Tous droits réservés.
                </motion.p>
            </div>
        </section>
    )
};