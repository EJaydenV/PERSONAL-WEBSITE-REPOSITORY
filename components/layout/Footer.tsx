import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/EJaydenV",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jayden-encarnacao-1a4654265/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:jayden@encarnacao.net",
    icon: Mail,
  },
  {
    label: "Phone",
    href: "tel:+50687246446",
    icon: Phone,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-zinc-900 dark:text-white">
            Jayden Encarnacao Vásquez
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            Software Engineer · Costa Rica · Open to Remote
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>

        <p className="text-xs text-zinc-400 dark:text-zinc-500">
          © {year} Jayden Encarnacao Vásquez
        </p>
      </div>
    </footer>
  );
}
