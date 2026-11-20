"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDownRight, FileText, Github, Linkedin, Mail } from "lucide-react";

const QUICK_FACTS = [
  {
    label: "Education",
    value: "B.A. Business Analytics",
    detail: "Sunway University · 2026",
  },
  {
    label: "Measured Impact",
    value: "30–40% Faster Ops",
    detail: "Power Apps & BI @ Rimbun Capital",
  },
  {
    label: "Languages",
    value: "5 Languages",
    detail: "EN · ZH · MS · JA (N3) · TH",
  },
  {
    label: "Focus",
    value: "Analytics & Consulting",
    detail: "Business, Data & Product Roles",
  },
];

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="space-y-8"
      >
        <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
          <span>Open to Analyst &amp; Consulting Roles · Malaysia / APAC</span>
        </div>

        <div className="space-y-5 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-[3.4rem] font-semibold tracking-tight leading-[1.1] text-foreground">
            Chris Wong Lihong
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-normal">
            Business Analytics graduate who turns messy operational data into{" "}
            <span className="text-foreground">BI dashboards</span>,{" "}
            <span className="text-foreground">automated workflows</span>, and{" "}
            <span className="text-foreground">clear business decisions</span>—working fluently across five languages.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="#work"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 px-6 rounded-md text-sm font-medium gap-2"
            )}
          >
            Selected Work
            <ArrowDownRight className="h-4 w-4" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-11 px-5 rounded-md text-sm font-medium gap-2"
            )}
          >
            <FileText className="h-4 w-4" />
            Resume (PDF)
          </a>

          <a
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg", variant: "ghost" }),
              "h-11 px-4 rounded-md text-sm font-medium gap-2 text-muted-foreground hover:text-foreground"
            )}
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>

          <div className="flex items-center gap-1 sm:ml-auto">
            <a
              href="https://www.linkedin.com/in/chriswonglihong/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={cn(
                buttonVariants({ size: "icon", variant: "ghost" }),
                "h-9 w-9 text-muted-foreground hover:text-foreground"
              )}
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/CreatifMind"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={cn(
                buttonVariants({ size: "icon", variant: "ghost" }),
                "h-9 w-9 text-muted-foreground hover:text-foreground"
              )}
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-border divide-y sm:divide-y-0 sm:divide-x divide-border mt-12">
          {QUICK_FACTS.map((fact) => (
            <div key={fact.label} className="py-5 sm:px-5 first:sm:pl-0 last:sm:pr-0">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {fact.label}
              </p>
              <p className="mt-1.5 text-sm font-semibold text-foreground">
                {fact.value}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {fact.detail}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
