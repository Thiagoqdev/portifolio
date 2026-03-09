"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { projects } from "@/data/projects";

const filterCategories = [
  { key: "filter_all", value: "all" },
  { key: "filter_ai", value: "ai-ml" },
  { key: "filter_web", value: "web" },
  { key: "filter_backend", value: "backend" },
  { key: "filter_fullstack", value: "fullstack" },
] as const;

export function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale() as "pt" | "en";
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-32 section-divider">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        {/* Filters */}
        <MotionDiv
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filterCategories.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(129,140,248,0.3)]"
                  : "border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5"
              }`}
            >
              {t(filter.key)}
            </Button>
          ))}
        </MotionDiv>

        {/* Projects grid */}
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <MotionDiv key={project.slug} variants={staggerItem}>
              <div className="group h-full glass-card rounded-xl overflow-hidden glow-soft">
                {/* Image header */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-gradient-to/10 to-[#f472b6]/10" />
                  {/* Decorative grid pattern */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "radial-gradient(rgba(129, 140, 248, 0.3) 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }} />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-transparent to-transparent" />
                  {/* Project icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-500" />
                      <Sparkles className="relative h-10 w-10 text-primary/40 group-hover:text-primary/60 transition-colors duration-300" />
                    </div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-background/50 backdrop-blur-sm text-xs text-primary border-primary/20">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title[locale]}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {project.description[locale]}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-muted/50 text-muted-foreground text-xs px-2 py-0.5 border border-border/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge
                        variant="secondary"
                        className="bg-muted/50 text-muted-foreground text-xs px-2 py-0.5 border border-border/30"
                      >
                        +{project.tags.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-2 border-t border-border/30">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        <Github className="h-4 w-4" />
                        {t("view_code")}
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {t("live_demo")}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
