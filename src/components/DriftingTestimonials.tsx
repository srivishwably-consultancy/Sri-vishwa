import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Sri Vishwa Consultancy transformed our vision into an architectural masterpiece. Their design-build approach saved us months of coordination effort, and the attention to detail is unmatched.",
    author: "Rajesh K.",
    role: "Residential Client"
  },
  {
    quote: "Professionalism, precision, and engineering excellence describe SVC. The structural integrity and breathtaking aesthetic of the Aura Plaza project speak volumes about their expertise.",
    author: "Meera Sen",
    role: "Commercial Developer"
  },
  {
    quote: "From initial concepts to final interior styling, the journey was seamless. They took the stress out of building our dream villa and delivered a space that feels deeply personal.",
    author: "Anand & Priya",
    role: "Villa Horizon Owners"
  }
];

export function DriftingTestimonials() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-12 px-6">
      {/* Background radial glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px] pointer-events-none z-0" />
      
      {/* Slow drift floating animation card container */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [-0.5, 0.5, -0.5]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="relative z-10 rounded-2xl border border-white/10 bg-[#161616]/40 backdrop-blur-xl p-10 md:p-16 shadow-[0_30px_70px_rgba(0,0,0,0.6)] overflow-hidden"
      >
        {/* Subtle Gradient Border Highlight */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-white/5 opacity-50 pointer-events-none" />
        
        <Quote className="text-accent/30 mb-8 w-12 h-12 stroke-[1.5]" />

        <div className="min-h-[160px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <p className="text-xl md:text-2xl font-serif text-secondary/90 leading-relaxed font-light mb-8 italic">
                "{TESTIMONIALS[current].quote}"
              </p>
              <div>
                <h4 className="text-white font-medium text-base tracking-wider uppercase">
                  {TESTIMONIALS[current].author}
                </h4>
                <p className="text-accent text-xs tracking-widest uppercase mt-1">
                  {TESTIMONIALS[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls */}
        <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-white/5 relative z-20">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/10 hover:border-accent hover:text-accent flex items-center justify-center transition-colors duration-300 group bg-white/5"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/10 hover:border-accent hover:text-accent flex items-center justify-center transition-colors duration-300 group bg-white/5"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
