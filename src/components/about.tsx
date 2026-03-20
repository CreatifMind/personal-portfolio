"use client";

import { motion } from "framer-motion";
import { ChefHat, Code2, LineChart, Target } from "lucide-react";

export function About() {
  const specs = [
    {
      title: "Data Storytelling",
      icon: LineChart,
      description: "Translating numbers into compelling strategic narratives.",
    },
    {
      title: "Web Analytics",
      icon: Target,
      description: "Optimizing user flows with data-driven insights.",
    },
    {
      title: "Problem Solving",
      icon: Code2,
      description: "Approaching challenges logically and methodically.",
    },
    {
      title: "Culinary Arts",
      icon: ChefHat,
      description: "Crafting Thai cuisine inspired by my heritage.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              I am deeply passionate about the intersection of data, technology, and business strategy. 
              My journey is rooted in a fundamental love for <strong>data storytelling</strong>, <strong>web analytics</strong>, and robust <strong>problem-solving</strong>. 
              I believe that beneath every complex dataset lies a narrative waiting to be uncovered—one that can transform operations and drive meaningful growth.
            </p>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 mt-6">
              Beyond my major and analytical pursuits, I have a deep passion for the culinary arts. Disconnecting from screens to cook, especially Thai cuisine, is one of my favorite ways to recharge, a hobby inspired by my half-Thai heritage that allows me to explore creativity and precision in a totally different environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/60 dark:bg-zinc-900/40 hover:bg-white/80 dark:hover:bg-zinc-900/60 transition-colors backdrop-blur-sm shadow-sm"
              >
                <item.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
