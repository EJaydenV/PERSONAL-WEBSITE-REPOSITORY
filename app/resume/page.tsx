import type { Metadata } from "next";
import { Download, MapPin, Mail, Globe, Phone, Briefcase, GraduationCap, Code2 } from "lucide-react";
import { experiences } from "@/data/experience";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Jayden Encarnacao Vásquez — Software Engineer specializing in AI automation and cloud-native systems.",
};

const seekingRoles = [
  "Software Engineer (Full-Stack)",
  "Backend Engineer (.NET / Node.js)",
  "AI / Automation Engineer",
  "Cloud Engineer (Azure)",
  "Platform Engineer",
];

const skills = [
  "TypeScript · C# · Python · Java",
  ".NET 8 · Node.js · Express · FastAPI",
  "React · Next.js · Tailwind CSS",
  "Azure OpenAI · Azure Functions · SignalR",
  "PostgreSQL · Redis · CosmosDB · SQL Server",
  "Docker · GitHub Actions · REST · WebSockets",
];

export default function ResumePage() {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <AnimatedSection>
          <div className="flex flex-wrap items-start justify-between gap-4 mb-10">
            <div>
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2 uppercase tracking-widest">
                Resume
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Jayden Encarnacao Vásquez
              </h1>
            </div>
            <LinkButton href="/CV.pdf" variant="primary" external>
              <Download className="w-4 h-4" />
              Download PDF
            </LinkButton>
          </div>
        </AnimatedSection>

        {/* Recruiter-friendly section */}
        <AnimatedSection delay={0.08}>
          <div className="p-6 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/60 mb-10">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">
              Recruiter Quick View
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1.5 font-medium uppercase tracking-wide">
                  Roles Seeking
                </p>
                <ul className="space-y-1">
                  {seekingRoles.map((r) => (
                    <li key={r} className="text-sm text-zinc-700 dark:text-zinc-300 flex gap-1.5">
                      <span className="text-indigo-400 mt-0.5">›</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1.5 font-medium uppercase tracking-wide">
                  Availability
                </p>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  Available immediately
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Part-time · Full-time · Contract
                </p>
              </div>
              <div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1.5 font-medium uppercase tracking-wide">
                  Location
                </p>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0" />
                  Costa Rica (UTC-6)
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Open to fully remote
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Resume document */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm">
          {/* Contact header */}
          <AnimatedSection delay={0.1}>
            <div className="border-b border-zinc-100 dark:border-zinc-800 px-8 py-8 bg-zinc-50/50 dark:bg-zinc-800/40">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Jayden Encarnacao Vásquez
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 mt-1 text-sm">
                Software Engineer · AI Automation · Cloud / Azure · Full-Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-500" />
                  <a href="mailto:jayden@encarnacao.net" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    jayden@encarnacao.net
                  </a>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                  Costa Rica · Remote
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-indigo-500" />
                  <a href="https://github.com/EJaydenV" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    github.com/EJaydenV
                  </a>
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-indigo-500" />
                  <a href="tel:+50687246446" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    +506 8724 6446
                  </a>
                </span>
              </div>
            </div>
          </AnimatedSection>

          <div className="px-8 py-8 space-y-10">
            {/* Summary */}
            <AnimatedSection delay={0.12}>
              <section>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5" />
                  Summary
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Software Engineer and Computer Science student (UCR, 2027) with hands-on experience building
                  production AI automation systems, Azure cloud pipelines, and full-stack applications. Proven
                  track record delivering measurable outcomes: 40% reduction in agent ramp-up time, 85% CRM
                  automation coverage, and $120K+ in process savings. Proficient in .NET, TypeScript, Python,
                  and Azure-native services. Fluent in Spanish (C2) and English (C2).
                </p>
              </section>
            </AnimatedSection>

            {/* Experience */}
            <AnimatedSection delay={0.14}>
              <section>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-5 flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5" />
                  Experience
                </h3>
                <StaggerContainer className="space-y-7" staggerDelay={0.06}>
                  {experiences.map((exp) => (
                    <StaggerItem key={exp.company}>
                      <div>
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                          <div>
                            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                              {exp.role}
                            </h4>
                            <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                              {exp.company}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">{exp.period}</p>
                            <p className="text-xs text-zinc-400 dark:text-zinc-500">{exp.location}</p>
                          </div>
                        </div>
                        <ul className="mt-2 space-y-1">
                          {exp.highlights.map((h, i) => (
                            <li key={i} className="text-sm text-zinc-600 dark:text-zinc-400 flex gap-2 leading-relaxed">
                              <span className="text-indigo-400 mt-0.5 flex-shrink-0">·</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {exp.tech.map((t) => (
                            <span key={t} className="text-xs px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-700/60 text-zinc-600 dark:text-zinc-300 font-mono">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </section>
            </AnimatedSection>

            {/* Education */}
            <AnimatedSection delay={0.16}>
              <section>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4 flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Education
                </h3>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                      B.Sc. Computer Science
                    </h4>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">
                      Universidad de Costa Rica
                    </p>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Expected 2027</p>
                </div>
              </section>
            </AnimatedSection>

            {/* Skills */}
            <AnimatedSection delay={0.18}>
              <section>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4 flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5" />
                  Technical Skills
                </h3>
                <div className="grid sm:grid-cols-2 gap-y-1.5 gap-x-4">
                  {skills.map((s) => (
                    <p key={s} className="text-sm text-zinc-600 dark:text-zinc-400 flex gap-2">
                      <span className="text-indigo-400 flex-shrink-0">·</span>
                      {s}
                    </p>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            {/* Languages */}
            <AnimatedSection delay={0.2}>
              <section>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5" />
                  Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { lang: "Spanish", level: "C2 Native" },
                    { lang: "English", level: "C2 Fluent" },
                    { lang: "Portuguese", level: "B2 Upper-Intermediate" },
                    { lang: "German", level: "A2 Basic" },
                    { lang: "Italian", level: "A2 Basic" },
                    { lang: "Russian", level: "A1 Learning" },
                  ].map(({ lang, level }) => (
                    <div key={lang} className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-700/60 border border-zinc-200 dark:border-zinc-600">
                      <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{lang} </span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">— {level}</span>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>
          </div>
        </div>

        {/* Download again */}
        <AnimatedSection delay={0.22} className="mt-8 flex justify-center">
          <LinkButton href="/CV.pdf" variant="outline" size="lg" external>
            <Download className="w-4 h-4" />
            Download PDF Resume
          </LinkButton>
        </AnimatedSection>
      </div>
    </div>
  );
}
