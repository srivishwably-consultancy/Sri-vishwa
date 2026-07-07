import React from 'react';
import { motion } from 'motion/react';

export function FloatingImages() {
  return (
    <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center">
      {/* Background ambient glow */}
      <div className="absolute w-[250px] h-[250px] bg-accent/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Layer 1: Left & Lower - Slow, heavy suspended drift */}
      <motion.div
        className="absolute left-2 md:left-8 bottom-6 w-[150px] md:w-[220px] aspect-[4/3] rounded-lg border border-white/10 bg-[#161616]/50 backdrop-blur-md p-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] z-10"
        animate={{
          y: [0, -14, 0],
          rotate: [-1.5, 1, -1.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-full h-full overflow-hidden rounded">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
            alt="Minimal Interior Design"
            className="w-full h-full object-cover opacity-75 hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </motion.div>

      {/* Layer 2: Center & Front - Main suspended showcase */}
      <motion.div
        className="absolute w-[220px] md:w-[320px] aspect-[4/5] rounded-xl border border-white/20 bg-[#1e1e1e]/60 backdrop-blur-lg p-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] z-20"
        animate={{
          y: [-12, 12, -12],
          rotate: [0.5, -0.5, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
            alt="Modern Residence"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Layer 3: Right & Higher - Faster, floating focus */}
      <motion.div
        className="absolute right-2 md:right-8 top-6 w-[130px] md:w-[190px] aspect-square rounded-lg border border-white/10 bg-[#161616]/50 backdrop-blur-md p-2 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.4)] z-30"
        animate={{
          y: [-18, 6, -18],
          rotate: [2, -2, 2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-full h-full overflow-hidden rounded">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Stellar Architecture"
            className="w-full h-full object-cover opacity-75 hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </motion.div>
    </div>
  );
}
