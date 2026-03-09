"use client";

import { useTranslations } from "next-intl";
import { Download, Briefcase, FolderGit2, Code2, GraduationCap, Award, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { fadeInUp, slideInLeft, staggerContainer, viewportConfig } from "@/lib/animations";

const stats = [
  { icon: Briefcase, value: "3+", key: "experience" },
  { icon: FolderGit2, value: "15+", key: "projects" },
  { icon: Code2, value: "25+", key: "technologies" },
];

const education = [
  {
    degree: { pt: "Bacharelado em Engenharia de Software", en: "Bachelor's in Software Engineering" },
    school: "UniCesumar",
    period: "2022 - 2026",
    status: { pt: "Em andamento", en: "In progress" },
  },
  {
    degree: { pt: "Especializa\u00e7\u00e3o em IA & Machine Learning", en: "Specialization in AI & Machine Learning" },
    school: "Future IT Valley",
    period: "2025 - 2026",
    status: { pt: "Em andamento", en: "In progress" },
  },
  {
    degree: { pt: "Especializa\u00e7\u00e3o em Programa\u00e7\u00e3o de Computadores", en: "Specialization in Computer Programming" },
    school: "Unip\u00ea",
    period: "2023 - 2024",
    status: { pt: "Conclu\u00edda", en: "Completed" },
  },
];

const certifications = [
  "AWS Cloud Practitioner",
  "Banco de Dados SQL & NoSQL",
  "Forma\u00e7\u00e3o Front-end (Oracle/Alura)",
  "Forma\u00e7\u00e3o Full Stack (RecodePro)",
];

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-24 md:py-32 section-divider">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual element */}
          <MotionDiv
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative mx-auto lg:mx-0"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-orbit" style={{ "--orbit-radius": "140px", "--orbit-duration": "25s" } as React.CSSProperties}>
                <div className="h-2 w-2 rounded-full bg-primary/60" />
              </div>
              <div className="absolute inset-0 animate-orbit" style={{ "--orbit-radius": "120px", "--orbit-duration": "18s" } as React.CSSProperties}>
                <div className="h-1.5 w-1.5 rounded-full bg-gradient-to/60" />
              </div>
              <div className="absolute inset-0 animate-orbit" style={{ "--orbit-radius": "100px", "--orbit-duration": "30s" } as React.CSSProperties}>
                <div className="h-1 w-1 rounded-full bg-[#f472b6]/60" />
              </div>

              {/* Main card - glass morphism */}
              <div className="absolute inset-8 rounded-2xl glass-card flex items-center justify-center glow-soft">
                <div className="text-center p-4">
                  <div className="relative mb-3">
                    <div className="text-6xl md:text-7xl font-bold gradient-text-animated">TQ</div>
                  </div>
                  <p className="text-foreground/80 text-sm font-medium tracking-wide">Software Engineer</p>
                  <div className="flex items-center justify-center gap-1.5 mt-2">
                    <Brain className="h-3.5 w-3.5 text-primary" />
                    <p className="text-primary text-xs font-mono">GenAI & LLM</p>
                  </div>
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-0 right-0 w-16 h-16">
                <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-primary/40 to-transparent" />
                <div className="absolute top-0 right-0 h-8 w-px bg-gradient-to-b from-primary/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16">
                <div className="absolute bottom-0 left-0 w-8 h-px bg-gradient-to-r from-gradient-to/40 to-transparent" />
                <div className="absolute bottom-0 left-0 h-8 w-px bg-gradient-to-t from-gradient-to/40 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass-card rounded-xl px-3 py-2 shadow-lg animate-float-delayed">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-foreground">AWS Certified</span>
                </div>
              </div>
            </div>
          </MotionDiv>

          {/* Bio text */}
          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-5"
          >
            <MotionDiv variants={fadeInUp}>
              <p className="text-muted-foreground leading-relaxed text-base">{t("bio_1")}</p>
            </MotionDiv>
            <MotionDiv variants={fadeInUp}>
              <p className="text-muted-foreground leading-relaxed text-base">{t("bio_2")}</p>
            </MotionDiv>
            <MotionDiv variants={fadeInUp}>
              <p className="text-muted-foreground leading-relaxed text-base">{t("bio_3")}</p>
            </MotionDiv>

            <MotionDiv variants={fadeInUp}>
              <Button
                variant="outline"
                className="mt-4 gap-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40 rounded-full transition-all hover:shadow-[0_0_20px_rgba(129,140,248,0.1)]"
              >
                <Download className="h-4 w-4" />
                {t("download_cv")}
              </Button>
            </MotionDiv>
          </MotionDiv>
        </div>

        {/* Stats */}
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20"
        >
          {stats.map((stat) => (
            <MotionDiv key={stat.key} variants={fadeInUp}>
              <div className="glass-card rounded-xl p-6 flex items-center gap-4 glow-soft">
                <div className="rounded-xl bg-primary/10 p-3 ring-1 ring-primary/20">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{t(`stats.${stat.key}`)}</p>
                </div>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>

        {/* Education & Certifications */}
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-20"
        >
          <MotionDiv variants={fadeInUp} className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
              <GraduationCap className="h-4 w-4 text-primary" />
              <h3 className="text-lg font-semibold gradient-text">
                Forma\u00e7\u00e3o & Certifica\u00e7\u00f5es
              </h3>
            </div>
          </MotionDiv>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Education */}
            <MotionDiv variants={fadeInUp} className="space-y-3">
              {education.map((edu) => (
                <div key={edu.school} className="glass-card rounded-xl p-4 glow-soft">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-medium text-foreground text-sm">{edu.degree.pt}</p>
                      <p className="text-xs text-muted-foreground mt-1">{edu.school} &bull; {edu.period}</p>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`text-xs shrink-0 ${
                        edu.status.en === "Completed"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : "bg-primary/10 text-primary border-primary/20"
                      } border`}
                    >
                      {edu.status.pt}
                    </Badge>
                  </div>
                </div>
              ))}
            </MotionDiv>

            {/* Certifications */}
            <MotionDiv variants={fadeInUp}>
              <div className="h-full glass-card rounded-xl p-5 glow-soft">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Certifica\u00e7\u00f5es</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <Badge
                      key={cert}
                      variant="secondary"
                      className="bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 px-3 py-1.5 text-sm border border-border/50 hover:border-primary/20"
                    >
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            </MotionDiv>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
