"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl space-y-8"
      >
        <div className="inline-block px-5 py-2 mb-4 border border-zinc-200 dark:border-zinc-800 rounded-full bg-zinc-50 dark:bg-zinc-900/50 shadow-sm">
          <span className="text-base font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
            Available for opportunities
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] leading-tight font-bold tracking-tight text-zinc-900 dark:text-white">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 whitespace-nowrap">
            Chris Wong Lihong.
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          A final year Business Analytics student transforming complex data into actionable insights while working on personal side projects for fun.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" className="h-12 px-8 rounded-full text-base font-medium transition-all group w-full sm:w-auto">
            <a href="#personal-projects" className="flex items-center">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 rounded-full text-base font-medium w-full sm:w-auto">
            <a href="#contact" className="flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
