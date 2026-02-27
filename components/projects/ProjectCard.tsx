import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge, categoryColors } from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col h-full rounded-2xl bg-white dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 p-6 hover:border-indigo-300 dark:hover:border-indigo-700/60 hover:shadow-lg hover:shadow-indigo-100/40 dark:hover:shadow-indigo-900/20 transition-all duration-300">
      {/* Categories */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.categories.map((cat) => (
          <Badge key={cat} variant={categoryColors[cat]}>
            {cat}
          </Badge>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-zinc-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {project.title}
      </h3>

      {/* Summary */}
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1">
        {project.summary}
      </p>

      {/* Tech tags */}
      <div className="mt-4 flex flex-wrap gap-1">
        {project.tech.slice(0, 5).map((t) => (
          <span
            key={t}
            className="text-xs px-1.5 py-0.5 rounded font-mono bg-zinc-100 dark:bg-zinc-700/60 text-zinc-600 dark:text-zinc-300"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 5 && (
          <span className="text-xs px-1.5 py-0.5 rounded font-mono bg-zinc-100 dark:bg-zinc-700/60 text-zinc-400">
            +{project.tech.length - 5}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-700/60 flex items-center justify-between">
        <Link
          href={`/projects/${project.slug}`}
          className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
        >
          Case Study <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <div className="flex items-center gap-2">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub`}
              className="p-1.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} Demo`}
              className="p-1.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
