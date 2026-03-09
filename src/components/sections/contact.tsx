"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Send, Mail, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";

export function Contact() {
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 section-divider">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <MotionDiv
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              {t("description")}
            </p>

            <div className="space-y-4">
              <div className="glass-card rounded-xl p-4 flex items-center gap-4 glow-soft">
                <div className="rounded-xl bg-primary/10 p-2.5 ring-1 ring-primary/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t("info.email")}
                  </p>
                  <a
                    href="mailto:thiagoq.dev@gmail.com"
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    thiagoq.dev@gmail.com
                  </a>
                </div>
              </div>

              <div className="glass-card rounded-xl p-4 flex items-center gap-4 glow-soft">
                <div className="rounded-xl bg-primary/10 p-2.5 ring-1 ring-primary/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t("info.location")}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Campina Grande, PB - Brasil
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-4 flex items-center gap-4 glow-soft">
                <div className="rounded-xl bg-emerald-500/10 p-2.5 ring-1 ring-emerald-500/20">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t("info.availability")}
                  </p>
                  <p className="text-sm font-medium text-emerald-400">
                    {t("info.available")}
                  </p>
                </div>
              </div>
            </div>
          </MotionDiv>

          {/* Contact Form */}
          <MotionDiv
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="glass-card rounded-xl overflow-hidden glow-soft">
              {/* Top gradient accent */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground mb-1.5 block"
                      >
                        {t("form.name")}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full rounded-lg border border-border/50 bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground mb-1.5 block"
                      >
                        {t("form.email")}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-border/50 bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-foreground mb-1.5 block"
                    >
                      {t("form.subject")}
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="w-full rounded-lg border border-border/50 bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground mb-1.5 block"
                    >
                      {t("form.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-lg border border-border/50 bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-5 rounded-lg font-medium transition-all hover:shadow-[0_0_25px_rgba(129,140,248,0.35)] shine-effect"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        {t("form.sending")}
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        {t("form.success")}
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        {t("form.send")}
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
