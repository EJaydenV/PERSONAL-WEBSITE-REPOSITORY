"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { projects, allCategories } from "@/data/projects";
import type { ProjectCategory } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

export function ProjectGrid() {
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState<ProjectCategory[]>([]);

  const toggleFilter = (cat: ProjectCategory) => {
    setActiveFilters((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch =
        search.trim() === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.summary.toLowerCase().includes(search.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()));

      const matchesFilter =
        activeFilters.length === 0 ||
        activeFilters.every((f) => p.categories.includes(f));

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilters]);

  return (
    <div>
      {/* Search + Filters */}
      <div className="mb-8 space-y-4">
        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="search"
            placeholder="Search projects, tech, outcomes…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/60 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 focus-visible:outline-none"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => toggleFilter(cat)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm font-medium border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                activeFilters.includes(cat)
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                  : "bg-white dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400"
              )}
              aria-pressed={activeFilters.includes(cat)}
            >
              {cat}
            </button>
          ))}
          {activeFilters.length > 0 && (
            <button
              onClick={() => setActiveFilters([])}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 flex items-center gap-1"
            >
              <X className="w-3 h-3" /> Clear
            </button>
          )}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
        {filtered.length === projects.length
          ? `${projects.length} projects`
          : `${filtered.length} of ${projects.length} projects`}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <div className="py-20 text-center">
          <p className="text-zinc-400 dark:text-zinc-500 text-sm">
            No projects match your search. Try different keywords or filters.
          </p>
          <button
            onClick={() => { setSearch(""); setActiveFilters([]); }}
            className="mt-4 text-sm text-indigo-600 dark:text-indigo-400 hover:underline focus-visible:outline-none"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
