"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  bullets: string[];
  featured?: boolean;
}

const CORE_EXPERIENCE: ExperienceItem[] = [
  {
    role: "Technical Business Analyst Intern",
    organization: "Rimbun Capital Sdn Bhd",
    location: "Kuala Lumpur, Malaysia",
    period: "Jan 2026 – Apr 2026",
    featured: true,
    bullets: [
      "Designed and deployed a Power Apps site-visit and data collection system backed by Dataverse schemas and automated workflows, improving internal workflow efficiency by 30–40%.",
      "Translated stakeholder feedback and internal operational data into management BI dashboards and strategic recommendations.",
      "Built custom GPT configurations to automate synthesis of liquidation and corporate recovery documentation, paired with user training guides for long-term adoption.",
    ],
  },
  {
    role: "Stage Manager & Coordinator",
    organization: "Japan Expo Malaysia, Japan Expo Thailand & Amazing Senior",
    location: "Kuala Lumpur & Bangkok",
    period: "Aug 2023 – Jul 2025",
    bullets: [
      "Managed live stage schedules, crowd flow, and on-the-spot issue resolution across 4+ major international expos in Malaysia and Thailand.",
      "Provided real-time interpretation across Thai, Japanese, English, and Mandarin for international talent, VIPs, and production crews.",
    ],
  },
  {
    role: "Social Media Intern",
    organization: "Up-Front International Co., Ltd",
    location: "Tokyo, Japan",
    period: "Apr 2022 – May 2024",
    bullets: [
      "Managed Google Ads promotional campaigns to drive international concert attendance and ticket sales.",
      "Translated PR materials and social campaigns across Japanese, English, and Mandarin while supporting live event operations.",
    ],
  },
  {
    role: "Marketing Intern",
    organization: "EV Connection Sdn Bhd",
    location: "Malaysia",
    period: "Jul 2023 – Sep 2023",
    bullets: [
      "Ran social media channels, copywriting, and corporate event logistics for EV charging campaigns.",
      "Engaged prospective B2B clients directly to support and close EV charger sales.",
    ],
  },
  {
    role: "Official Representative & Liaison",
    organization: "MATRADE",
    location: "Tokyo, Japan",
    period: "May 2022 – Sep 2022",
    bullets: [
      "Represented Malaysian exhibitors at Tokyo Game Show 2022, translating between English, Malay, Mandarin, and Japanese for prospective partners.",
      "Supported VIP guest logistics and protocol during the Malaysian Prime Minister's Official Visit and business Meet & Greet in Tokyo.",
    ],
  },
];

const EARLIER_EXPERIENCE: ExperienceItem[] = [
  {
    role: "Program Organizer",
    organization: "Japan & Malaysia Student Exchange",
    location: "Kuala Lumpur, Malaysia",
    period: "Jul 2024",
    bullets: [
      "Planned cultural itineraries and provided live Japanese–English translation for visiting international student cohorts.",
    ],
  },
  {
    role: "Sales Executive",
    organization: "Neo Siam Thai Specialty Store",
    location: "Malaysia",
    period: "Dec 2021 – Apr 2022",
    bullets: [
      "Handled daily revenue tracking, inventory controls, and direct customer sales for specialty Thai consumer goods.",
    ],
  },
  {
    role: "President",
    organization: "12th Kuala Lumpur Boys' Brigade Company",
    location: "Kuala Lumpur, Malaysia",
    period: "Nov 2017 – Dec 2020",
    bullets: [
      "Led a 300-member youth organization, overseeing weekly operations, leadership training, and external community events.",
    ],
  },
];

function ExperienceRow({ item }: { item: ExperienceItem }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-7 border-b border-border last:border-b-0">
      <div className="md:col-span-4 space-y-1">
        <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
        <p className="text-xs text-muted-foreground">{item.location}</p>
        {item.featured && (
          <span className="inline-block mt-2 rounded border border-emerald-600/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] text-emerald-700 dark:text-emerald-400">
            Most Recent · Analytics
          </span>
        )}
      </div>

      <div className="md:col-span-8 space-y-3">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-foreground leading-snug">
            {item.role}
          </h3>
          <p className="text-sm text-muted-foreground">{item.organization}</p>
        </div>

        <ul className="space-y-2">
          {item.bullets.map((bullet) => (
            <li
              key={bullet}
              className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2.5"
            >
              <span className="text-emerald-600 dark:text-emerald-400 mt-1.5 h-1.5 w-1.5 rounded-full bg-current shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Experience() {
  const [showEarlier, setShowEarlier] = useState(false);

  return (
    <section id="experience" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              02 / Experience
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              Work &amp; International Ops
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            From internal BI &amp; Power Apps delivery to cross-border events in Malaysia, Japan, and Thailand.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="border-t border-border"
        >
          {CORE_EXPERIENCE.map((item) => (
            <ExperienceRow key={`${item.organization}-${item.period}`} item={item} />
          ))}
        </motion.div>

        <div className="mt-6">
          <button
            type="button"
            onClick={() => setShowEarlier((prev) => !prev)}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
          >
            {showEarlier ? (
              <>
                Hide Earlier &amp; Leadership Experience
                <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Show Earlier &amp; Leadership Experience ({EARLIER_EXPERIENCE.length})
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>

          {showEarlier && (
            <div className="mt-2 border-t border-border">
              {EARLIER_EXPERIENCE.map((item) => (
                <ExperienceRow key={`${item.organization}-${item.period}`} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
