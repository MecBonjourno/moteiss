/* eslint-disable @typescript-eslint/ban-ts-comment */
// "use client"

// import { motion } from 'framer-motion';

// export default function Home() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-darkBg">
//       <motion.h1
//         className="font-cursive text-6xl font-bold text-neonRed"
//         initial={{ textShadow: '0 0 10px #ff4d4d' }}
//         animate={{
//           textShadow: [
//             '0 0 10px #ff4d4d',
//             '0 0 20px #ff4d4d',
//             '0 0 30px #ff4d4d',
//             '0 0 40px #ff4d4d',
//             '0 0 30px #ff4d4d',
//             '0 0 20px #ff4d4d',
//             '0 0 10px #ff4d4d',
//           ],
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           repeatType: 'reverse',
//         }}
//       >
//         Moteiss
//       </motion.h1>
//     </div>
//   );
// }

"use client"

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <main 
      ref={containerRef} 
      className="min-h-screen bg-gradient-to-b from-darkBg to-dark-light relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          >
            {i % 2 === 0 ? (
              <Heart className="text-primary-light/20 w-4 h-4" />
            ) : (
              <Sparkles className="text-secondary-light/20 w-3 h-3" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <motion.h1
              className="font-cursive text-7xl sm:text-8xl font-bold text-neonRed relative z-10"
              initial={{ textShadow: '0 0 10px #ff4d4d' }}
              animate={{
                textShadow: [
                  '0 0 10px #ff4d4d',
                  '0 0 20px #ff4d4d',
                  '0 0 30px #ff4d4d',
                  '0 0 40px #ff4d4d',
                  '0 0 30px #ff4d4d',
                  '0 0 20px #ff4d4d',
                  '0 0 10px #ff4d4d',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              Moteiss
            </motion.h1>
            
            {/* Decorative elements */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary-light/20 to-secondary-light/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          </motion.div>

          <motion.p
            className="mt-6 text-xl text-neutral-light/80 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Ignite your passion and embrace desire
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-primary to-primary-light rounded-full text-white font-semibold shadow-red-glow transition-shadow duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px 2px rgba(255, 77, 77, 0.7)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Discover More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-neutral-light/30 rounded-full relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-neutral-light/50 rounded-full absolute left-1/2 top-2 -translate-x-1/2"
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
