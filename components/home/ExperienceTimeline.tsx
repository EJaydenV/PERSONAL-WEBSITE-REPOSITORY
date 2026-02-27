"use client";

import { experiences } from "@/data/experience";
import { Badge } from "@/components/ui/Badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const typeLabels: Record<string, { label: string; variant: "green" | "blue" | "yellow" | "indigo" }> = {
  "full-time": { label: "Full-time", variant: "green" },
  internship: { label: "Internship", variant: "blue" },
  contract: { label: "Contract", variant: "yellow" },
  "part-time": { label: "Part-time", variant: "indigo" },
};

export function ExperienceTimeline() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2 uppercase tracking-widest">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-12">
            Career Timeline
          </h2>
        </AnimatedSection>

        <StaggerContainer className="relative">
          {/* Timeline line */}
          <div
            aria-hidden
            className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-400 via-violet-400 to-transparent dark:from-indigo-600 dark:via-violet-600"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const type = typeLabels[exp.type];
              return (
                <StaggerItem key={`${exp.company}-${i}`}>
                  <div className="flex gap-6 sm:gap-10 pl-12 sm:pl-16 relative">
                    {/* Timeline dot */}
                    <div
                      aria-hidden
                      className="absolute left-2 sm:left-4 top-1 w-4 h-4 rounded-full border-2 border-white dark:border-zinc-950 bg-indigo-500 dark:bg-indigo-400 ring-4 ring-indigo-100 dark:ring-indigo-900/40 shadow-sm"
                    />

                    {/* Card */}
                    <div className="flex-1 bg-white dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 rounded-2xl p-5 sm:p-6 hover:border-indigo-200 dark:hover:border-indigo-700/60 transition-colors">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold text-zinc-900 dark:text-white">
                              {exp.role}
                            </h3>
                            {exp.current && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-slow" />
                                Current
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <Briefcase className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0" />
                            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                              {exp.company}
                            </span>
                          </div>
                        </div>
                        <Badge variant={type.variant}>{type.label}</Badge>
                      </div>

                      <div className="flex flex-wrap gap-3 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                        {exp.description}
                      </p>

                      <ul className="space-y-1.5">
                        {exp.highlights.slice(0, 3).map((h, j) => (
                          <li
                            key={j}
                            className="text-sm text-zinc-600 dark:text-zinc-400 flex gap-2"
                          >
                            <span className="text-indigo-400 dark:text-indigo-500 mt-0.5 flex-shrink-0">
                              ›
                            </span>
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Tech tags */}
                      <div className="mt-4 flex flex-wrap gap-1">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-1.5 py-0.5 rounded font-mono bg-zinc-100 dark:bg-zinc-700/60 text-zinc-600 dark:text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
