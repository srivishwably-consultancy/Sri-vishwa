import { motion } from "motion/react";
import React from "react";
import { cn } from "../lib/utils";

export function Marquee({
  children,
  className,
  speed = 40,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  return (
    <div className={cn("overflow-hidden whitespace-nowrap flex", className)}>
      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-10 pr-10"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-10 pr-10"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
