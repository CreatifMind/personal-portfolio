"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 min-h-screen w-full pointer-events-none overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      {/* Base Grid Pattern */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 transition-colors duration-500" />
      
      {/* Animated Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-blue-500/20 dark:bg-blue-600/10 rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-violet-500/20 dark:bg-violet-600/10 rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], x: [0, 50, 0], y: [0, -100, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem] bg-emerald-500/10 dark:bg-emerald-600/5 rounded-full blur-[100px]"
      />
    </div>
  );
}
