import type { Metadata } from "next";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { OpenToOpportunities } from "@/components/home/OpenToOpportunities";

export const metadata: Metadata = {
  title: "About",
  description:
    "Computer Science student at UCR with hands-on experience in AI automation, backend systems, and full-stack development. Trilingual, results-oriented, and actively seeking impactful engineering opportunities.",
};

const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "C#", "Python", "Java", "JavaScript", "SQL", "GDScript", "Bash"],
  },
  {
    group: "Backend / APIs",
    items: [".NET 8 / ASP.NET Core", "Node.js", "Express", "FastAPI", "REST", "WebSockets", "gRPC", "Entity Framework Core", "Prisma"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Recharts", "HTML/CSS"],
  },
  {
    group: "Cloud / AI",
    items: ["Azure OpenAI", "Azure Functions", "Azure Service Bus", "Azure SignalR", "Azure Blob Storage", "Azure Document Intelligence", "Azure Event Hubs", "Azure CDN", "OpenAI API", "AWS (EC2, Lambda, DynamoDB, CDK)"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "SQL Server", "CosmosDB", "Redis", "DynamoDB", "SQLite"],
  },
  {
    group: "Dev Practices",
    items: ["CI/CD (GitHub Actions)", "Docker", "Agile / Scrum", "TDD", "Code Review", "OpenAPI / Swagger", "Git", "Distributed Tracing"],
  },
  {
    group: "Networking / Security",
    items: ["OWASP Top 10", "JWT / OAuth2", "HTTPS/TLS", "Rate Limiting", "CORS", "Webhook Security", "API Key Auth"],
  },
];

const languages = [
  { lang: "Spanish", level: "C2 — Native", pct: 100 },
  { lang: "English", level: "C2 — Fluent", pct: 98 },
  { lang: "Portuguese", level: "B2 — Upper Intermediate", pct: 72 },
  { lang: "German", level: "A2 — Basic", pct: 28 },
  { lang: "Italian", level: "A2 — Basic", pct: 25 },
  { lang: "Russian", level: "A1 — Learning", pct: 12 },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection>
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2 uppercase tracking-widest">
            About Me
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-8">
            Jayden Encarnacao Vásquez
          </h1>
        </AnimatedSection>

        {/* Bio */}
        <AnimatedSection delay={0.1}>
          <div className="prose prose-zinc dark:prose-invert max-w-none mb-16">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I'm a Computer Science student at the University of Costa Rica with strong academic
              performance and hands-on experience building production-level systems. My work spans
              AI-powered lead qualification workflows, CRM integrations using OpenAI APIs, scalable
              backend architecture, and cloud-based systems on Azure — using{" "}
              <strong className="text-zinc-900 dark:text-zinc-100">C#/.NET, Node.js, TypeScript, Python, SQL Server, MongoDB,</strong> and more.
              I combine solid theoretical foundations with practical engineering, consistently
              delivering systems that solve real problems at scale.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
              Professionally, I've contributed across{" "}
              <strong className="text-zinc-900 dark:text-zinc-100">SmartCues.ai, Growth Acceleration Partners, Amazon,</strong> and{" "}
              <strong className="text-zinc-900 dark:text-zinc-100">CentauroSolutions</strong> — environments that demanded
              strong problem-solving, ownership, and the ability to move fast in cross-functional
              teams. I bring discipline, a results-oriented mindset, and genuine enthusiasm for
              building intelligent systems that matter.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
              Beyond the technical, I'm intellectually curious and committed to continuous growth —
              both as an engineer and as a person. I approach every challenge with resilience and a
              growth mindset, and I'm actively seeking opportunities where I can contribute
              meaningfully, expand my engineering depth, and keep building impactful software.
            </p>
          </div>
        </AnimatedSection>

        {/* Skills Matrix */}
        <AnimatedSection delay={0.15}>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">Skills</h2>
        </AnimatedSection>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2" staggerDelay={0.06}>
          {skills.map((group) => (
            <StaggerItem key={group.group}>
              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 h-full">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
                  {group.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-700/60 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-600/60 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Education */}
        <AnimatedSection delay={0.1} className="mt-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Education</h2>
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white text-lg">
                  B.Sc. Computer Science
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mt-0.5">
                  Universidad de Costa Rica (UCR)
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  San José, Costa Rica
                </p>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 rounded-lg text-sm font-medium bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/60">
                  Expected 2027
                </span>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Data Structures & Algorithms", "Operating Systems", "Networks", "Software Engineering", "Databases", "Computer Architecture", "AI & ML Fundamentals"].map((c) => (
                <span
                  key={c}
                  className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-700/60 text-zinc-600 dark:text-zinc-300"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Open to Opportunities */}
        <div className="mt-16 -mx-4 sm:-mx-6">
          <OpenToOpportunities />
        </div>

        {/* Languages */}
        <AnimatedSection delay={0.15} className="mt-4">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Languages</h2>
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 space-y-5">
            {languages.map(({ lang, level, pct }) => (
              <div key={lang}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {lang}
                  </span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">{level}</span>
                </div>
                <div
                  className="h-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 overflow-hidden"
                  role="progressbar"
                  aria-valuenow={pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${lang} proficiency: ${level}`}
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
