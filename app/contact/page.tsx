"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const contactCards = [
  {
    label: "Email",
    value: "jayden@encarnacao.net",
    href: "mailto:jayden@encarnacao.net",
    icon: Mail,
    description: "Best for project inquiries and work opportunities",
  },
  {
    label: "Phone",
    value: "+506 8724 6446",
    href: "tel:+50687246446",
    icon: Phone,
    description: "Available during Costa Rica business hours (UTC-6)",
  },
  {
    label: "GitHub",
    value: "github.com/EJaydenV",
    href: "https://github.com/EJaydenV",
    icon: Github,
    description: "See my code, contributions, and open source work",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jayden-encarnacao",
    href: "https://www.linkedin.com/in/jayden-encarnacao-1a4654265/",
    icon: Linkedin,
    description: "Connect professionally and view my full profile",
  },
];

function validateForm(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  else if (values.name.trim().length < 2) errors.name = "Name must be at least 2 characters.";

  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Please enter a valid email address.";

  if (!values.message.trim()) errors.message = "Message is required.";
  else if (values.message.trim().length < 20)
    errors.message = "Message must be at least 20 characters.";

  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const errs = validateForm({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: errs[name as keyof FormErrors] }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errs = validateForm(form);
    setErrors((prev) => ({ ...prev, [name]: errs[name as keyof FormErrors] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, message: true };
    setTouched(allTouched);
    const errs = validateForm(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");

    try {
      const res = await fetch("https://formspree.io/f/mreajgeg", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection>
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2 uppercase tracking-widest">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Contact
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-xl leading-relaxed mb-12">
            Have a project in mind or want to talk engineering? I'm currently open to new opportunities.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <AnimatedSection delay={0.1} className="lg:col-span-3">
            {status === "success" ? (
              <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  Message sent!
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Thanks for reaching out. I'll get back to you within 24–48 hours.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); setTouched({}); }}
                  className="mt-4 text-sm text-indigo-600 dark:text-indigo-400 hover:underline focus-visible:outline-none"
                >
                  Send another message
                </button>
              </div>
            ) : status === "error" ? (
              <div className="p-8 rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/60 text-center">
                <AlertCircle className="w-10 h-10 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  Something went wrong
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Your message couldn't be sent. Please try again or email me directly at{" "}
                  <a href="mailto:jayden@encarnacao.net" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                    jayden@encarnacao.net
                  </a>
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm text-indigo-600 dark:text-indigo-400 hover:underline focus-visible:outline-none"
                >
                  Try again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Name <span className="text-red-500" aria-hidden>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    placeholder="Your name"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border bg-white dark:bg-zinc-800/60 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow ${
                      errors.name
                        ? "border-red-400 dark:border-red-700"
                        : "border-zinc-200 dark:border-zinc-700"
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Email <span className="text-red-500" aria-hidden>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border bg-white dark:bg-zinc-800/60 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow ${
                      errors.email
                        ? "border-red-400 dark:border-red-700"
                        : "border-zinc-200 dark:border-zinc-700"
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Message <span className="text-red-500" aria-hidden>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    placeholder="Tell me about your project, opportunity, or just say hi…"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border bg-white dark:bg-zinc-800/60 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow resize-none ${
                      errors.message
                        ? "border-red-400 dark:border-red-700"
                        : "border-zinc-200 dark:border-zinc-700"
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto"
                >
                  {status === "submitting" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </AnimatedSection>

          {/* Contact Cards */}
          <StaggerContainer className="lg:col-span-2 space-y-4" staggerDelay={0.08}>
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <StaggerItem key={card.label}>
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 hover:border-indigo-300 dark:hover:border-indigo-700/60 hover:shadow-md hover:shadow-indigo-100/30 dark:hover:shadow-indigo-900/20 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/60 transition-colors">
                      <Icon className="w-4.5 h-4.5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {card.label}
                      </p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                        {card.value}
                      </p>
                      <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </a>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </div>
  );
}
