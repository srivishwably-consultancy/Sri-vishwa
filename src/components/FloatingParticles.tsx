import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface FloatingParticlesProps {
  count?: number;
  className?: string;
  color?: string; // Tailwind class or color value
}

export function FloatingParticles({ count = 20, className = '', color = 'rgba(196, 169, 98, 0.4)' }: FloatingParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // horizontal percentage
      size: Math.random() * 4 + 1.5, // size in px
      duration: Math.random() * 20 + 20, // 20s to 40s travel duration
      delay: Math.random() * -30, // negative delay so they are pre-dispersed across the screen
      opacity: Math.random() * 0.4 + 0.15,
    }));
    setParticles(generated);
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            backgroundColor: color,
            boxShadow: p.size > 2.5 ? `0 0 ${p.size * 3}px ${color}` : 'none',
          }}
          animate={{
            y: ['110vh', '-10vh'],
            x: [`${p.x}%`, `${p.x + Math.sin(p.id) * 8}%`],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
