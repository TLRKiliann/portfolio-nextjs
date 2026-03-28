'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(totalHeight > 0 ? scrollY / totalHeight : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50" style={{ height: '3px' }}>
      {/* Fond sombre */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Barre principale avec glow cyan */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(to right, #00ffff, #a855f7, #ff00ff)',
          boxShadow: '0 0 8px #00ffff, 0 0 20px rgba(0,255,255,0.6), 0 0 40px rgba(168,85,247,0.4)',
          transformOrigin: 'right',
          transform: `scaleX(${1 - progress})`,
          transition: 'transform 0.08s ease-out',
        }}
      />

      {/* Effet glitch — petite surbrillance blanche qui clignote sur le bord droit */}
      <div
        className="absolute top-0 h-full w-6"
        style={{
          right: `${progress * 100}%`,
          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.9), transparent)',
          boxShadow: '0 0 6px #fff, 0 0 12px #00ffff',
          transform: 'translateX(50%)',
          transition: 'right 0.08s ease-out',
        }}
      />
    </div>
  );
}
