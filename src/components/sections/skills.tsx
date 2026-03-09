"use client";

import { useTranslations, useLocale } from "next-intl";
import { Brain, Monitor, Server, Cloud, Database, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Monitor,
  Server,
  Cloud,
  Database,
  Workflow,
};

export function Skills() {
  const t = useTranslations("skills");
  const locale = useLocale() as "pt" | "en";

  return (
    <section id="skills" className="py-24 md:py-32 section-divider">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((category) => {
            const IconComponent = iconMap[category.icon];
            return (
              <MotionDiv
                key={category.title.en}
                variants={staggerItem}
                className={
                  category.gridSpan === "wide"
                    ? "md:col-span-2 lg:col-span-2"
                    : ""
                }
              >
                <div className="group h-full glass-card rounded-xl overflow-hidden glow-soft">
                  {/* Top gradient line */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-4">
                      {IconComponent && (
                        <div className="rounded-xl bg-primary/10 p-2.5 ring-1 ring-primary/20 group-hover:ring-primary/40 group-hover:bg-primary/15 transition-all duration-300">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                      )}
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {category.title[locale]}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill.name}
                          variant="secondary"
                          className="bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 px-3 py-1.5 text-sm border border-border/50 hover:border-primary/20 hover:shadow-[0_0_10px_rgba(129,140,248,0.1)]"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionDiv>
            );
          })}
        </MotionDiv>
      </div>
    </section>
  );
}
