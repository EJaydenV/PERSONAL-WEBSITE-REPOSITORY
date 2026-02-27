import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { Badge, categoryColors } from "@/components/ui/Badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

function ArchitectureDiagram({ description }: { description: string }) {
  const steps = description.split("→").map((s) => s.trim());

  return (
    <div
      className="rounded-xl bg-zinc-950/5 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 p-6 overflow-x-auto"
      role="img"
      aria-label={`Architecture diagram: ${description}`}
    >
      <div className="flex items-center flex-wrap gap-2 min-w-max">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="px-3 py-2 rounded-lg bg-white dark:bg-zinc-700/60 border border-zinc-200 dark:border-zinc-600 text-xs font-medium text-zinc-700 dark:text-zinc-200 whitespace-nowrap shadow-sm">
              {step}
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectCaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back */}
        <AnimatedSection>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection delay={0.05}>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.categories.map((cat) => (
              <Badge key={cat} variant={categoryColors[cat]}>
                {cat}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
            {project.title}
          </h1>

          <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {project.summary}
          </p>

          {/* Links */}
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>

          <hr className="mt-8 border-zinc-200 dark:border-zinc-800" />
        </AnimatedSection>

        {/* Case Study Body */}
        <StaggerContainer className="mt-10 space-y-12" staggerDelay={0.06}>
          {/* Overview */}
          <StaggerItem>
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
                00 — Overview
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.description}
              </p>
            </section>
          </StaggerItem>

          {/* Problem */}
          <StaggerItem>
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
                01 — Problem
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </section>
          </StaggerItem>

          {/* Constraints */}
          <StaggerItem>
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
                02 — Challenges &amp; Engineering Decisions
              </h2>
              <ul className="space-y-2">
                {project.constraints.map((c, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed"
                  >
                    <span className="w-5 h-5 rounded bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </section>
          </StaggerItem>

          {/* Solution */}
          <StaggerItem>
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
                03 — Architecture &amp; Solution
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </section>
          </StaggerItem>

          {/* Architecture */}
          <StaggerItem>
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
                04 — Architecture Diagram
              </h2>
              <ArchitectureDiagram description={project.architectureDescription} />
            </section>
          </StaggerItem>

          {/* Key Features */}
          <StaggerItem>
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
                05 — Key Features
              </h2>
              <ul className="space-y-2">
                {project.keyFeatures.map((f, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed"
                  >
                    <span className="text-indigo-500 mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </section>
          </StaggerItem>

          {/* Tech Stack */}
          <StaggerItem>
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
                06 — Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg font-mono text-sm bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>
          </StaggerItem>

          {/* Results */}
          <StaggerItem>
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
                07 — Results &amp; Impact
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.results.map((r, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/60"
                  >
                    <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      {r}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </StaggerItem>

          {/* Lessons Learned */}
          <StaggerItem>
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
                08 — What I Learned
              </h2>
              <ul className="space-y-3">
                {project.lessons.map((l, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed"
                  >
                    <span className="text-violet-500 flex-shrink-0 mt-0.5">◆</span>
                    {l}
                  </li>
                ))}
              </ul>
            </section>
          </StaggerItem>
        </StaggerContainer>

        {/* Navigation to next project */}
        <AnimatedSection delay={0.2} className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
          >
            <ArrowLeft className="w-4 h-4" />
            All Projects
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
}
