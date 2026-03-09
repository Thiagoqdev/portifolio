"use client";

import { useTranslations } from "next-intl";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionDiv, MotionH1, MotionP } from "@/components/motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const socialLinks = [
  { icon: Github, href: "https://github.com/Thiagoqdev", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/thiagovqueiroz", label: "LinkedIn" },
  { icon: Mail, href: "mailto:thiagoq.dev@gmail.com", label: "Email" },
];

export function Hero() {
  const t = useTranslations("hero");

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Atmospheric gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[150px] animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to/5 blur-[150px] animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-[#f472b6]/3 blur-[120px] animate-pulse [animation-delay:4s]" />
      </div>

      <MotionDiv
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container relative mx-auto px-4 md:px-6 text-center"
      >
        {/* AI Badge */}
        <MotionDiv variants={fadeInUp} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
              {t("greeting")}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </MotionDiv>

        {/* Name */}
        <MotionH1
          variants={fadeInUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="gradient-text-animated">{t("name")}</span>
        </MotionH1>

        {/* Role with separator */}
        <MotionDiv variants={fadeInUp} className="mb-6">
          <div className="flex items-center justify-center gap-3">
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-foreground/90">
              {t("role")}
            </p>
            <div className="hidden sm:block h-8 w-px bg-primary/40" />
            <p className="hidden sm:block text-xl sm:text-2xl md:text-3xl font-light text-primary">
              {t("specialty")}
            </p>
          </div>
          <p className="sm:hidden text-lg text-primary mt-2">
            {t("specialty")}
          </p>
        </MotionDiv>

        {/* Description */}
        <MotionP
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-muted-foreground text-base md:text-lg mb-10 leading-relaxed"
        >
          {t("description")}
        </MotionP>

        {/* CTAs */}
        <MotionDiv variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            onClick={() => handleScrollTo("projects")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium rounded-full transition-all hover:shadow-[0_0_30px_rgba(129,140,248,0.4)] hover:scale-[1.02] active:scale-[0.98] shine-effect"
          >
            {t("cta_projects")}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleScrollTo("contact")}
            className="border-primary/20 text-foreground hover:bg-primary/5 hover:border-primary/40 px-8 py-6 text-base font-medium rounded-full transition-all"
          >
            {t("cta_contact")}
          </Button>
        </MotionDiv>

        {/* Social Links */}
        <MotionDiv variants={fadeInUp} className="flex items-center justify-center gap-3 mb-20">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-full p-3 text-muted-foreground transition-all duration-300 hover:text-primary glass-card hover:shadow-[0_0_20px_rgba(129,140,248,0.15)]"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
            </a>
          ))}
        </MotionDiv>

        {/* Scroll indicator */}
        <MotionDiv
          variants={fadeInUp}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => handleScrollTo("about")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            aria-label={t("scroll_down")}
          >
            <span className="text-xs uppercase tracking-[0.2em] font-light">{t("scroll_down")}</span>
            <div className="relative">
              <div className="absolute -inset-2 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              <ArrowDown className="h-4 w-4 animate-bounce relative" />
            </div>
          </button>
        </MotionDiv>
      </MotionDiv>
    </section>
  );
}
