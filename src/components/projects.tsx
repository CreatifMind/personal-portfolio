"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code } from "lucide-react";

export function Projects() {
  return (
    <section id="personal-projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="space-y-4 mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Personal Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full" />
      </div>

      <div className="space-y-12">
        {/* Personal Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="relative overflow-hidden border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900/50 dark:to-zinc-900/20 shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 border border-violet-200 dark:border-violet-900/50 bg-violet-100 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 rounded-lg">
                  <Code className="w-5 h-5" />
                </div>
                <CardTitle className="text-xl">Consumer Intelligence Pipeline</CardTitle>
              </div>
              <CardDescription>
                A custom-coded pipeline app designed to extract, process, and analyze consumer data, providing an interactive dashboard for actionable insights.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Streamlit</Badge>
                <Badge variant="secondary">Data Pipeline</Badge>
                <Badge variant="secondary">Analytics</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-2 w-full sm:w-auto hover:bg-violet-600 hover:text-white transition-colors">
                <a href="https://consumer-intelligence-pipeline.streamlit.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
