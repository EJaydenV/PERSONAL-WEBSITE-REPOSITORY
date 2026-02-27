"use client";

import { MapPin, Clock, Briefcase, Globe } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const opportunities = [
  { label: "Remote Internships" },
  { label: "Part-Time Software Engineering Roles" },
  { label: "Contract-Based Development Work" },
  { label: "AI / Backend / Cloud-Focused Opportunities" },
];

export function OpenToOpportunities() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="rounded-2xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/60 dark:bg-emerald-950/20 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              {/* Left: status indicator + heading */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open to Opportunities
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3">
                  Available for New Work
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                  I am actively looking for roles where I can contribute to meaningful engineering
                  challenges, grow my technical depth, and deliver measurable impact in AI, backend,
                  or cloud-focused environments.
                </p>

                {/* What I'm open to */}
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-3">
                    I&apos;m open to
                  </p>
                  <ul className="space-y-2">
                    {opportunities.map((opp) => (
                      <li
                        key={opp.label}
                        className="flex items-center gap-2.5 text-sm text-zinc-700 dark:text-zinc-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        {opp.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: logistics */}
              <div className="sm:min-w-[220px] flex flex-col gap-4">
                <div className="p-4 rounded-xl bg-white dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-0.5">
                        Location
                      </p>
                      <p className="text-sm text-zinc-800 dark:text-zinc-200 font-medium">
                        Costa Rica
                      </p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        Open to fully remote international work
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-zinc-100 dark:bg-zinc-700/60" />

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-0.5">
                        Availability
                      </p>
                      <p className="text-sm text-zinc-800 dark:text-zinc-200 font-medium">
                        Part-time now
                      </p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        Full-time during academic breaks
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-zinc-100 dark:bg-zinc-700/60" />

                  <div className="flex items-start gap-3">
                    <Globe className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-0.5">
                        Focus Areas
                      </p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {["AI", "Backend", "Cloud"].map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/60 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <Briefcase className="w-4 h-4" />
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
