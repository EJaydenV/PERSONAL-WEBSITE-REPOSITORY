import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Jayden Encarnacao Vásquez — Software Engineer",
    template: "%s | Jayden Encarnacao Vásquez",
  },
  description:
    "Software Engineer specializing in AI automation, Azure cloud systems, and full-stack development. Computer Science student at University of Costa Rica.",
  keywords: [
    "Software Engineer",
    "AI Automation",
    "Azure",
    "OpenAI",
    ".NET",
    "TypeScript",
    "Full-Stack",
    "Costa Rica",
    "Remote",
  ],
  authors: [{ name: "Jayden Encarnacao Vásquez" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Jayden Encarnacao Vásquez",
    title: "Jayden Encarnacao Vásquez — Software Engineer",
    description:
      "Software Engineer specializing in AI automation, Azure cloud systems, and full-stack development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayden Encarnacao Vásquez — Software Engineer",
    description:
      "Software Engineer specializing in AI automation, Azure cloud systems, and full-stack development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-white dark:bg-zinc-950 font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Site-wide ambient background — fixed so it persists on scroll */}
          <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
            {/* Primary top-center glow */}
            <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[1100px] h-[750px] bg-gradient-radial from-indigo-400/[0.20] via-indigo-400/[0.07] to-transparent dark:from-indigo-500/[0.18] dark:via-indigo-600/[0.06] dark:to-transparent rounded-full blur-[100px]" />
            {/* Top-right violet accent */}
            <div className="absolute -top-[100px] -right-[200px] w-[700px] h-[650px] bg-gradient-radial from-violet-400/[0.16] to-transparent dark:from-violet-500/[0.13] dark:to-transparent rounded-full blur-[90px]" />
            {/* Mid-left indigo accent */}
            <div className="absolute top-[38%] -left-[280px] w-[650px] h-[550px] bg-gradient-radial from-indigo-400/[0.13] to-transparent dark:from-indigo-600/[0.10] dark:to-transparent rounded-full blur-[80px]" />
            {/* Bottom-right violet */}
            <div className="absolute -bottom-[150px] -right-[150px] w-[580px] h-[580px] bg-gradient-radial from-violet-400/[0.12] to-transparent dark:from-violet-600/[0.09] dark:to-transparent rounded-full blur-[80px]" />
          </div>

          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
