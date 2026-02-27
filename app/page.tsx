import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline";
import { OpenToOpportunities } from "@/components/home/OpenToOpportunities";

export const metadata: Metadata = {
  title: "Jayden Encarnacao Vásquez — Software Engineer",
  description:
    "AI Automation · Azure Cloud · .NET & TypeScript. Building production systems at SmartCues.ai. Open to remote opportunities.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <OpenToOpportunities />
      <ExperienceTimeline />
    </>
  );
}
