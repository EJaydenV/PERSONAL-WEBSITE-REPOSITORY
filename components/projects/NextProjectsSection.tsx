"use client";

import { Hammer } from "lucide-react";
import { nextProjects } from "@/data/nextProjects";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { categoryColors } from "@/components/ui/Badge";

export function NextProjectsSection() {
  return (
    <div className="mt-20 pt-16 border-t border-zinc-200 dark:border-zinc-800">
      <AnimatedSection>
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
              What&apos;s Next
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Currently Building
          </h2>
          <p className="mt-3 text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Ongoing projects focused on production-grade architecture, AI integrations, and cloud systems — each designed to demonstrate engineering depth and real-world applicability.
          </p>
        </div>
      </AnimatedSection>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2" staggerDelay={0.07}>
        {nextProjects.map((project) => (
          <StaggerItem key={project.title}>
            <article className="flex flex-col h-full rounded-2xl bg-white dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 border-dashed p-6 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all duration-300">
              {/* Header row */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.categories.map((cat) => {
                    const variant = categoryColors[cat] ?? "default";
                    const colorMap: Record<string, string> = {
                      violet: "bg-violet-50 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300 border border-violet-200 dark:border-violet-800",
                      blue: "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800",
                      indigo: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800",
                      green: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
                      red: "bg-red-50 text-red-700 dark:bg-red-950/60 dark:text-red-300 border border-red-200 dark:border-red-800",
                      default: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700",
                    };
                    return (
                      <span
                        key={cat}
                        className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium ${colorMap[variant] ?? colorMap.default}`}
                      >
                        {cat}
                      </span>
                    );
                  })}
                </div>

                {/* In Progress badge */}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60 flex-shrink-0">
                  <Hammer className="w-3 h-3" />
                  In Progress
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white leading-snug mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="mt-4 flex flex-wrap gap-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-1.5 py-0.5 rounded font-mono bg-zinc-100 dark:bg-zinc-700/60 text-zinc-600 dark:text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
