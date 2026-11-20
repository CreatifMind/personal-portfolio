"use client";

import { motion } from "framer-motion";

const EDUCATION = [
  {
    degree: "Bachelor of Business Analytics",
    institution: "Sunway University, Sunway City",
    period: "Sep 2023 – Sep 2026",
  },
  {
    degree: "1-Year Intensive Japanese Language Course",
    institution: "Shinjuku Japanese Language School, Tokyo",
    period: "Apr 2022 – Apr 2023",
  },
];

const CREDENTIALS = [
  "JLPT N3 Certified (Japanese Language Proficiency Test)",
  "The Duke of Edinburgh's International Award — Silver & Bronze",
];

export function About() {
  return (
    <section id="about" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            04 / About &amp; Education
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            Background
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12"
        >
          <div className="lg:col-span-7 space-y-5 text-base text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a Business Analytics graduate from{" "}
              <span className="text-foreground font-medium">Sunway University</span> based in Selangor, Malaysia. My best work happens where messy real-world operations meet practical systems—whether that&apos;s replacing manual site-visit tracking with a Power Apps and Dataverse workflow, or wiring computer vision outputs into a live Power BI dashboard.
            </p>
            <p>
              Before graduating, I spent a year studying in Tokyo and worked across international events and trade missions in Malaysia, Japan, and Thailand. Switching effortlessly between English, Mandarin, Malay, Japanese, and Thai taught me how to align stakeholders quickly and stay calm when plans change on the fly.
            </p>
            <p>
              Away from spreadsheets and dashboards, I love cooking—especially Thai cuisine inspired by my half-Thai heritage. It&apos;s my favorite way to disconnect from screens while still caring about craft, timing, and balance.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Education
              </h3>
              <div className="space-y-4">
                {EDUCATION.map((edu) => (
                  <div
                    key={edu.degree}
                    className="rounded-xl border border-border bg-card p-4"
                  >
                    <p className="font-mono text-xs text-muted-foreground">
                      {edu.period}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      {edu.degree}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Certifications &amp; Awards
              </h3>
              <ul className="space-y-2">
                {CREDENTIALS.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground flex items-start gap-2.5"
                  >
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs mt-0.5">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
