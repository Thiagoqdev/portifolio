"use client";

import { useTranslations, useLocale } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";
import { experiences } from "@/data/experience";

export function Experience() {
  const t = useTranslations("experience");
  const locale = useLocale() as "pt" | "en";

  return (
    <section id="experience" className="py-24 md:py-32 section-divider">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line - gradient */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px bg-gradient-to-b from-primary/40 via-gradient-to/30 to-primary/10" />

          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-16"
          >
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <MotionDiv
                  key={exp.company + exp.period}
                  variants={fadeInUp}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot with pulse */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-primary/20 rounded-full animate-pulse" />
                      <div className="relative w-3 h-3 rounded-full bg-primary ring-2 ring-background" />
                    </div>
                  </div>

                  {/* Spacer for mobile offset */}
                  <div className="w-10 shrink-0 md:hidden" />

                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      isEven
                        ? "md:pr-12 md:text-right"
                        : "md:pl-12 md:text-left"
                    }`}
                  >
                    <div className="glass-card rounded-xl p-5 glow-soft">
                      {/* Top gradient accent */}
                      <div className={`h-px w-full mb-4 bg-gradient-to-r ${
                        isEven
                          ? "from-transparent to-primary/30"
                          : "from-primary/30 to-transparent"
                      }`} />

                      <div
                        className={`flex flex-col gap-1 mb-3 ${
                          isEven ? "md:items-end" : "md:items-start"
                        }`}
                      >
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full w-fit">
                          {exp.period.replace("Present", t("present"))}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground mt-1">
                          {exp.role[locale]}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          {exp.company}
                        </p>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {exp.description[locale]}
                      </p>

                      <div
                        className={`flex flex-wrap gap-1.5 ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-muted/50 text-muted-foreground text-xs px-2 py-0.5 border border-border/30"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for the other side on desktop */}
                  <div className="hidden md:block flex-1" />
                </MotionDiv>
              );
            })}
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
