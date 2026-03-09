import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Thiagoqdev", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/thiagovqueiroz", label: "LinkedIn" },
  { icon: Mail, href: "mailto:thiagoq.dev@gmail.com", label: "Email" },
];

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/30">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-primary/5"
                aria-label={link.label}
              >
                <link.icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground/70 flex items-center gap-1.5">
            {t("built_with")}{" "}
            <Heart className="h-3 w-3 text-red-500 fill-red-500" /> &{" "}
            <span className="gradient-text font-medium">Next.js</span>
          </p>

          <p className="text-sm text-muted-foreground/50">
            &copy; {currentYear} Thiago Queiroz. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
