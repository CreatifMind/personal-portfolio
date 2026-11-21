"use client";

import { motion } from "framer-motion";

const CORE_SKILLS = [
  {
    group: "Data & BI",
    items: ["Power BI", "Tableau", "SQL", "Excel", "Python"],
  },
  {
    group: "Systems & Automation",
    items: ["Power Apps", "Dataverse", "Workflow Automation", "Custom GPT Workflows"],
  },
  {
    group: "Analytics Methods",
    items: ["Dashboard Design", "Data Cleaning & ETL", "Text Analytics (LDA, BERTopic)", "Stakeholder Reporting"],
  },
];

const LANGUAGES = [
  {
    name: "English",
    level: "Primary · Fluent",
    scope: "Speaking, Reading, Writing",
  },
  {
    name: "Mandarin",
    level: "Fluent",
    scope: "Speaking, Reading, Writing",
  },
  {
    name: "Bahasa Melayu",
    level: "Fluent",
    scope: "Speaking, Reading, Writing",
  },
  {
    name: "Japanese",
    level: "Advanced · JLPT N3",
    scope: "Speaking, Reading, Writing",
  },
  {
    name: "Thai",
    level: "Fluent",
    scope: "Speaking",
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            04 / Skills &amp; Languages
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            Toolkit &amp; Communication
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12"
        >
          <div className="lg:col-span-7 space-y-8">
            {CORE_SKILLS.map((category) => (
              <div key={category.group} className="space-y-3">
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {category.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Languages (5)
            </h3>
            <div className="rounded-xl border border-border bg-card divide-y divide-border">
              {LANGUAGES.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-baseline justify-between gap-4 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">{lang.name}</p>
                    <p className="text-xs text-muted-foreground">{lang.scope}</p>
                  </div>
                  <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 shrink-0">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
