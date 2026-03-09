import { MotionDiv } from "@/components/motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <MotionDiv
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="mb-16 text-center"
    >
      {/* AI-themed decorative element */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
        <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-gradient-to/50" />
      </div>

      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl gradient-text-animated inline-block">
        {title}
      </h2>
      <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>

      {/* Bottom line */}
      <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </MotionDiv>
  );
}
