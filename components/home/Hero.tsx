"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Terminal } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

const chips = [
  "Azure + OpenAI Integrations",
  "Webhook / CRM Automations",
  ".NET + Node / TypeScript",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background decoration */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Main hero glow — stronger than the global ambient layer */}
        <div className="absolute left-1/2 top-[-60px] -translate-x-1/2 w-[900px] h-[580px] bg-gradient-radial from-indigo-400/[0.25] via-indigo-400/[0.08] to-transparent dark:from-indigo-500/[0.22] dark:via-indigo-600/[0.07] dark:to-transparent rounded-full blur-3xl" />
        {/* Right violet bloom */}
        <div className="absolute -right-[100px] top-[10%] w-[520px] h-[480px] bg-gradient-radial from-violet-400/[0.20] to-transparent dark:from-violet-500/[0.16] dark:to-transparent rounded-full blur-3xl" />
        {/* Bottom-left warm accent */}
        <div className="absolute -left-[80px] bottom-0 w-[420px] h-[380px] bg-gradient-radial from-indigo-400/[0.15] to-transparent dark:from-indigo-600/[0.12] dark:to-transparent rounded-full blur-3xl" />
        {/* Subtle horizontal gradient fade at bottom — blends hero into next section */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Status chip */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-slow" />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1]"
          >
            Software Engineer
            <br />
            <span className="text-indigo-600 dark:text-indigo-400">
              AI Automation
            </span>{" "}
            &amp;
            <br />
            Backend &amp; Full-Stack
          </motion.h1>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl"
          >
            I'm <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Jayden Encarnacao Vásquez</strong> — a Computer Science student at the University of Costa Rica with strong academic performance and hands-on production experience. I build AI automation systems, scalable backend architectures, and cloud-native applications using C#/.NET, Node.js, TypeScript, and Azure — with a consistent focus on delivering measurable outcomes. Currently at{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">SmartCues.ai</span>, with prior experience at Amazon, Growth Acceleration Partners, and CentauroSolutions.
          </motion.p>

          {/* Highlight chips */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-wrap gap-2"
          >
            {chips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 shadow-sm"
              >
                <Terminal className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0" />
                {chip}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            <LinkButton href="/projects" variant="primary" size="lg">
              View Projects
              <ArrowRight className="w-4 h-4" />
            </LinkButton>
            <LinkButton href="/CV.pdf" variant="outline" size="lg" external>
              <Download className="w-4 h-4" />
              Download CV
            </LinkButton>
            <LinkButton href="/contact" variant="ghost" size="lg">
              <Mail className="w-4 h-4" />
              Contact
            </LinkButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
