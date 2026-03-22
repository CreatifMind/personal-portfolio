"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Wallet } from "lucide-react";

const PROJECTS = [
  {
    title: "Consumer Intelligence Pipeline",
    description: "A custom-coded pipeline app designed to extract, process, and analyze consumer data, providing an interactive dashboard for actionable insights.",
    icon: Code,
    color: "violet",
    badges: ["Python", "Streamlit", "Data Pipeline", "Analytics"],
    link: "https://consumer-intelligence-pipeline.streamlit.app/"
  },
  {
    title: "Malas Money",
    description: "A personal finance tracker designed to help you organize your finances, track your spending, and achieve your monetary goals with an intuitive dashboard.",
    icon: Wallet,
    color: "emerald",
    badges: ["Next.js", "React", "Personal Finance", "Dashboard", "Full Stack"],
    link: "https://malas-money.vercel.app/"
  }
];

export function Projects() {
  return (
    <section id="personal-projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="space-y-4 mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Personal Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => {
          const Icon = project.icon;
          
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Card className="flex flex-col flex-1 relative overflow-hidden border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900/50 dark:to-zinc-900/20 shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 border rounded-lg ${
                      project.color === 'violet' 
                        ? 'border-violet-200 dark:border-violet-900/50 bg-violet-100 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400'
                        : 'border-emerald-200 dark:border-emerald-900/50 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.badges.map(badge => (
                      <Badge key={badge} variant="secondary">{badge}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <Button className={`w-full sm:w-auto transition-colors ${
                    project.color === 'violet'
                      ? 'hover:bg-violet-600 hover:text-white'
                      : 'hover:bg-emerald-600 hover:text-white'
                  }`}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
