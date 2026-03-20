"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Terminal, Database, Bot } from "lucide-react";

export function Skills() {
  const customColors = {
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    violet: "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
    emerald: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
    amber: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  };

  const skillCategories = [
    {
      title: "Data Visualization & BI",
      icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
      skills: ["Power BI", "Tableau"],
      color: "blue" as const,
    },
    {
      title: "Development",
      icon: <Terminal className="w-6 h-6 text-violet-500" />,
      skills: ["Power Apps (Canvas & Model-driven)", "Dataverse Integration", "HTML/CSS"],
      color: "violet" as const,
    },
    {
      title: "Data & Text Analytics",
      icon: <Database className="w-6 h-6 text-emerald-500" />,
      skills: ["Topic Modeling (LDA, BERTopic)", "TF-IDF", "Network Centrality Measures"],
      color: "emerald" as const,
    },
    {
      title: "AI & Automation",
      icon: <Bot className="w-6 h-6 text-amber-500" />,
      skills: ["Advanced Prompt Engineering", "AI-Assisted Development", "Workflow Automation"],
      color: "amber" as const,
    },
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full relative z-10">
      <div className="space-y-4 mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Technical Skills</h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Equipped with a diverse toolkit spanning analytics, development, and AI engineering.
        </p>
      </div>

      <motion.div
        variants={containerVars}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-6"
      >
        {skillCategories.map((category) => (
          <motion.div key={category.title} variants={itemVars}>
            <Card className="h-full bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                  {category.icon}
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${customColors[category.color]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
