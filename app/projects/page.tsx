import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { NextProjectsSection } from "@/components/projects/NextProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "AI automation systems, Azure cloud pipelines, .NET APIs, full-stack apps, security tools, and game projects.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2 uppercase tracking-widest">
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Projects
          </h1>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Production systems, side projects, and explorations — each with a full case study covering architecture, decisions, and results.
          </p>
        </div>

        <ProjectGrid />
        <NextProjectsSection />
      </div>
    </div>
  );
}
