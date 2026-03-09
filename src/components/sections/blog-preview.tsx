"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "@/lib/animations";

// Placeholder blog posts - will be replaced with real MDX content later
const placeholderPosts = [
  {
    slug: "introducao-transformers",
    title: {
      pt: "Introdu\u00e7\u00e3o aos Transformers: A Revolu\u00e7\u00e3o do NLP",
      en: "Introduction to Transformers: The NLP Revolution",
    },
    excerpt: {
      pt: "Uma vis\u00e3o geral da arquitetura transformer e como ela revolucionou o processamento de linguagem natural.",
      en: "An overview of the transformer architecture and how it revolutionized natural language processing.",
    },
    date: "2025-01-15",
    readTime: 8,
    tags: ["AI", "NLP", "Deep Learning"],
  },
  {
    slug: "clean-architecture-nodejs",
    title: {
      pt: "Clean Architecture com Node.js na Pr\u00e1tica",
      en: "Clean Architecture with Node.js in Practice",
    },
    excerpt: {
      pt: "Como implementar princ\u00edpios de Clean Architecture em projetos Node.js para c\u00f3digo mais manuten\u00edvel.",
      en: "How to implement Clean Architecture principles in Node.js projects for more maintainable code.",
    },
    date: "2024-12-20",
    readTime: 12,
    tags: ["Node.js", "Architecture", "Best Practices"],
  },
  {
    slug: "deploy-ml-models",
    title: {
      pt: "Deploy de Modelos ML: Do Jupyter ao Produ\u00e7\u00e3o",
      en: "Deploying ML Models: From Jupyter to Production",
    },
    excerpt: {
      pt: "Um guia pr\u00e1tico para levar seus modelos de machine learning do notebook para um ambiente de produ\u00e7\u00e3o escal\u00e1vel.",
      en: "A practical guide to taking your machine learning models from notebook to a scalable production environment.",
    },
    date: "2024-11-05",
    readTime: 15,
    tags: ["Machine Learning", "DevOps", "MLOps"],
  },
];

export function BlogPreview() {
  const t = useTranslations("blog");

  return (
    <section id="blog" className="py-24 md:py-32 section-divider">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {placeholderPosts.map((post) => (
            <MotionDiv key={post.slug} variants={staggerItem}>
              <div className="group h-full glass-card rounded-xl overflow-hidden glow-soft">
                {/* Top gradient accent */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                <div className="p-5">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 text-primary text-xs px-2 py-0.5 border border-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title.pt}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt.pt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-3 border-t border-border/30">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-primary/60" />
                      {new Date(post.date).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-primary/60" />
                      {post.readTime} {t("min_read")}
                    </span>
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>

        {/* View all link */}
        <MotionDiv
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex justify-center mt-12"
        >
          <Button
            variant="outline"
            className="gap-2 border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 rounded-full transition-all"
          >
            {t("view_all")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </MotionDiv>
      </div>
    </section>
  );
}
