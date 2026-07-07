import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function MagneticButton({ children, className = '', glowColor = 'rgba(196, 169, 98, 0.4)' }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Magnetic pull threshold
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    if (distance < 120) {
      // Stronger pull when closer
      setPosition({ x: distanceX * 0.4, y: distanceY * 0.4 });
      setIsHovered(true);
    } else {
      setPosition({ x: 0, y: 0 });
      setIsHovered(false);
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={ref}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.1 }}
        className={`relative z-10 ${className}`}
      >
        {children}
      </motion.div>
      
      {/* Glow highlight reflecting anti-gravity feel */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none blur-xl z-0"
        animate={{
          x: position.x * 0.6,
          y: position.y * 0.6,
          scale: isHovered ? 1.25 : 0.8,
          opacity: isHovered ? 0.7 : 0,
        }}
        style={{
          backgroundColor: glowColor,
          mixBlendMode: 'screen',
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 25 }}
      />
    </div>
  );
}
