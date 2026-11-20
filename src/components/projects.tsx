"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  year: string;
  summary: string;
  highlights: string[];
  stack: string[];
  liveUrl?: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: "Automated Waste Classification & Contamination Detection",
    category: "Capstone Project · Computer Vision & BI",
    year: "2026",
    summary:
      "End-to-end computer vision and analytics system designed to detect recycling contamination in real time and surface operational ESG metrics to facility teams.",
    highlights: [
      "Trained and optimised a real-time YOLOv8m-seg instance segmentation model on 200k+ recycling waste images.",
      "Built an automated DataOps and Human-in-the-Loop (HITL) pipeline with SAM-assisted auto-annotation and event-triggered retraining.",
      "Connected live inference outputs to Power BI dashboards for real-time contamination alerts and ESG reporting.",
    ],
    stack: ["Python", "YOLOv8m-seg", "SAM", "Power BI", "MLOps / HITL"],
    featured: true,
  },
  {
    title: "Consumer Intelligence Pipeline",
    category: "Data Pipeline & Analytics App",
    year: "2026",
    summary:
      "Interactive pipeline application that extracts, cleans, and structures raw consumer data into an exploratory dashboard for faster market and customer analysis.",
    highlights: [
      "Automated ingestion and preprocessing of multi-source consumer datasets in Python.",
      "Delivered an interactive Streamlit interface for filtering trends and surfacing decision-ready insights.",
    ],
    stack: ["Python", "Streamlit", "Data Pipeline", "Analytics"],
    liveUrl: "https://consumer-intelligence-pipeline.streamlit.app/",
  },
  {
    title: "Malas Money",
    category: "Product · Personal Finance Dashboard",
    year: "2026",
    summary:
      "Full-stack personal finance tracker built to simplify day-to-day expense logging, budget tracking, and goal visibility with minimal friction.",
    highlights: [
      "Designed a clean, low-friction dashboard for categorizing spending and monitoring savings targets.",
      "Built and deployed end-to-end with Next.js and React.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Dashboard"],
    liveUrl: "https://malas-money.vercel.app/",
  },
];

export function Projects() {
  const featured = PROJECTS.find((p) => p.featured);
  const secondary = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="work" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              01 / Selected Work
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              Projects &amp; Case Studies
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Analytics pipelines, BI reporting, and working web products shipped end-to-end.
          </p>
        </div>

        <div className="space-y-6">
          {featured && (
            <motion.article
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-muted-foreground">
                <span className="text-emerald-700 dark:text-emerald-400">
                  {featured.category}
                </span>
                <span>{featured.year}</span>
              </div>

              <h3 className="mt-3 text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                {featured.title}
              </h3>

              <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-3xl">
                {featured.summary}
              </p>

              <ul className="mt-5 grid gap-2.5 sm:grid-cols-3 border-t border-border pt-5">
                {featured.highlights.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground leading-relaxed pr-2"
                  >
                    <span className="text-emerald-600 dark:text-emerald-400 mr-2 font-mono">
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {featured.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondary.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/25"
              >
                <div className="flex items-center justify-between gap-2 font-mono text-xs text-muted-foreground">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {project.summary}
                </p>

                <ul className="mt-4 space-y-2 border-t border-border pt-4 flex-1">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs mt-1">
                        →
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-border bg-secondary/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors shrink-0"
                    >
                      Live App
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
