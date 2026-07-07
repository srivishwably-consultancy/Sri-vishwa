import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface LevitatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function LevitatingCard({ children, className = '', delay = 0 }: LevitatingCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // 3D tilt tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      animate={{
        y: isHovered ? -12 : 0,
      }}
      transition={{ type: 'spring', stiffness: 250, damping: 22 }}
      className={`relative h-full w-full rounded-lg border border-white/10 bg-[#161616]/40 backdrop-blur-lg overflow-hidden transition-colors duration-500 ${
        isHovered 
          ? 'shadow-[0_20px_50px_rgba(196,169,98,0.12)] border-accent/40 bg-[#1e1e1e]/60' 
          : 'shadow-[0_8px_30px_rgba(0,0,0,0.3)]'
      } ${className}`}
    >
      {/* Floating idle animation applied to a inner block when not hovered */}
      <motion.div
        animate={isHovered ? { y: 0 } : {
          y: [0, -6, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay,
        }}
        className="w-full h-full flex flex-col"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div style={{ transform: 'translateZ(30px)' }} className="w-full h-full flex flex-col">
          {children}
        </div>
      </motion.div>

      {/* Gentle responsive background hover glow */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 bg-gradient-to-tr from-accent/5 via-transparent to-accent/[0.02] ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} 
      />
    </motion.div>
  );
}
