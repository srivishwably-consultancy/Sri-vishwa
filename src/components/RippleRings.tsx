import { motion } from "motion/react";
import { cn } from "../lib/utils";

export function RippleRings({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 flex items-center justify-center pointer-events-none z-0", className)}>
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-accent/20"
          initial={{ width: 0, height: 0, opacity: 0.8 }}
          animate={{
            width: ["0%", "200%"],
            height: ["0%", "200%"],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
