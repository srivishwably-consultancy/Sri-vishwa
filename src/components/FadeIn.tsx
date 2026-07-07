import React from 'react';
import { motion } from 'motion/react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'perspective';
  className?: string;
  key?: React.Key;
}

export function FadeIn({ children, delay = 0, direction = 'up', className }: FadeInProps) {
  const getInitial = () => {
    switch(direction) {
      case 'up': return { opacity: 0, y: 50, x: 0, filter: 'blur(8px)' };
      case 'down': return { opacity: 0, y: -50, x: 0, filter: 'blur(8px)' };
      case 'left': return { opacity: 0, x: 50, y: 0, filter: 'blur(8px)' };
      case 'right': return { opacity: 0, x: -50, y: 0, filter: 'blur(8px)' };
      case 'scale': return { opacity: 0, scale: 0.8, filter: 'blur(10px)' };
      case 'perspective': return { opacity: 0, rotateX: 25, y: 40, scale: 0.95, filter: 'blur(12px)' };
      default: return { opacity: 0, y: 50, x: 0, filter: 'blur(8px)' };
    }
  };

  const getInView = () => {
    if (direction === 'scale') return { opacity: 1, scale: 1, filter: 'blur(0px)' };
    if (direction === 'perspective') return { opacity: 1, rotateX: 0, y: 0, scale: 1, filter: 'blur(0px)' };
    return { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' };
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getInView()}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      style={direction === 'perspective' ? { perspective: '1000px' } : undefined}
    >
      {children}
    </motion.div>
  );
}
