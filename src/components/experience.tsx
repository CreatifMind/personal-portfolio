"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Internship at Rimbun Capital",
      role: "Technical Business Analyst Intern",
      period: "Jan 2026 – April 2026",
      details: [
        "Architected and deployed a centralized data collection system utilizing Power Apps and Codex.",
        "Leveraged advanced AI prompt engineering to accelerate data analysis and support creative problem-solving.",
        "Aggregated and analyzed internal company data to deliver actionable insights and strategic business recommendations.",
        "Streamlined internal operations and automated manual processes, increasing overall workflow efficiency by 30-40%.",
        "Authored comprehensive user documentation and training guidelines to ensure seamless adoption and long-term system sustainability."
      ],
      highlight: true
    },
    {
      title: "Event and Stage Management at Japan Expo Malaysia",
      role: "Stage Manager & Coordinator",
      period: "Aug 2023 – July 2025",
      details: [
        "Orchestrated seamless end-to-end stage operations across 4+ major international expos including Japan Expo Malaysia, Japan Expo Thailand, and Amazing Senior.",
        "Facilitated successful cross-language communications, providing real-time translation between Thai, Japanese, English, and Mandarin for high-profile international guests and logistics."
      ],
      highlight: true
    },
    {
      title: "Japan and Malaysia Student Exchange",
      role: "Program Organizer",
      period: "July 2024",
      details: [
        "Engineered cross-cultural exchange programs by planning comprehensive itineraries and promoting local heritage.",
        "Facilitated direct, extensive translation linking international students to foster robust bilateral relationships."
      ],
      highlight: true
    },
    {
      title: "EV Connection Sdn Bhd",
      role: "Marketing Intern",
      period: "July 2023 – Sept 2023",
      details: [
        "Spearheaded digital marketing initiatives and copy creation across diverse social platforms.",
        "Managed corporate event logistics and directly accelerated B2B sales cycles for EV charger solutions through active client engagement."
      ],
      highlight: true
    },
    {
      title: "Up-Front International Co., Ltd (Japan)",
      role: "Social Media Intern",
      period: "April 2022 – May 2024",
      details: [
        "Engineered global promotional campaigns on Google Ads to boost concert event attendance and ticket sales.",
        "Delivered critical multi-lingual translations (Japanese, English, Mandarin) for PR content and supported large-scale entertainment event planning."
      ],
      highlight: true
    },
    {
      title: "MATRADE (Tokyo, Japan)",
      role: "Official Representative & Liaison",
      period: "May 2022 – Sept 2022",
      details: [
        "Acted as a key diplomatic and commercial liaison during the Tokyo Games Show 2022 and Official Prime Minister Meet & Greet.",
        "Orchestrated VIP guest logistics, strategic document distribution, and real-time multi-lingual translations to promote Malaysian business interests abroad."
      ],
      highlight: true
    },
    {
      title: "Neo Siam Thai Specialty Store",
      role: "Sales Executive",
      period: "Dec 2021 – April 2022",
      details: [
        "Managed daily operational revenue, maintained rigorous inventory tracking protocols, and successfully pitched specialized consumer products to expand customer base."
      ],
      highlight: true
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="space-y-4 mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Experience</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full" />
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute top-0 bottom-0 left-[27px] w-0.5 bg-zinc-200 dark:bg-zinc-800 z-0" />
        
        {/* Scrollable Container */}
        <div className="space-y-8 pl-[60px] sm:pl-[80px] max-h-[700px] overflow-y-auto pr-4 sm:pr-6 scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700" style={{ scrollbarWidth: 'thin' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[50px] sm:-left-[70px] top-6 w-5 h-5 rounded-full border-4 border-white dark:border-black bg-zinc-300 dark:bg-zinc-600 z-10 shadow-sm" />
              
              <Card className={`relative overflow-hidden border-zinc-200/50 dark:border-zinc-800/50 shadow-sm backdrop-blur-md ${exp.highlight ? 'bg-white/80 dark:bg-zinc-900/80 ring-1 ring-blue-500/30' : 'bg-white/40 dark:bg-zinc-900/40 hover:bg-white/60 dark:hover:bg-zinc-900/60 transition-colors'}`}>
                {exp.highlight && (
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 dark:bg-blue-500" />
                )}
                <CardHeader className="pb-3 pt-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <CardTitle className="text-xl leading-tight">{exp.title}</CardTitle>
                      <CardDescription className="text-[15px] font-medium text-zinc-700 dark:text-zinc-300">
                        {exp.role}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 bg-zinc-100/80 dark:bg-zinc-800/80 px-2.5 py-1 rounded-md text-sm font-medium w-fit shrink-0 backdrop-blur-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 text-sm">
                    {exp.details.map((detail, dIndex) => (
                      <li key={dIndex} className="flex items-start">
                        <span className={`mr-2.5 flex-shrink-0 text-[15px] mt-0.5 leading-none ${exp.highlight ? 'text-blue-500' : 'text-zinc-400'}`}>•</span>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
