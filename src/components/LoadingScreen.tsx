import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111]"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="flex space-x-1 items-end h-24">
              {[0, 1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: item * 0.1,
                    ease: "easeOut",
                  }}
                  className="w-4 bg-accent"
                  style={{
                    height: `${(item + 1) * 15}%`
                  }}
                />
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-accent font-serif tracking-widest uppercase text-xs mt-4"
            >
              Building
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
