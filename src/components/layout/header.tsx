"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useLocale } from "next-intl";

const navItems = [
  { href: "#about", key: "about" },
  { href: "#projects", key: "projects" },
  { href: "#skills", key: "skills" },
  { href: "#experience", key: "experience" },
  { href: "#blog", key: "blog" },
  { href: "#contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll spy
      const sections = navItems.map((item) => item.key);
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = () => {
    const newLocale = locale === "pt" ? "en" : "pt";
    router.replace(pathname, { locale: newLocale });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-500 ${
        isScrolled
          ? "glass border-border/30 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="group text-lg font-bold tracking-tight transition-colors hover:text-primary"
        >
          <span className="gradient-text-animated">TQ</span>
          <span className="ml-1 hidden sm:inline text-foreground/70 group-hover:text-foreground transition-colors">.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeSection === item.key
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(item.key)}
              {activeSection === item.key && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary" />
              )}
            </a>
          ))}

          {/* Locale Switcher */}
          <Button
            variant="ghost"
            size="sm"
            onClick={switchLocale}
            className="ml-3 gap-1.5 text-muted-foreground hover:text-foreground rounded-full border border-transparent hover:border-border/50 transition-all"
          >
            <Globe className="h-3.5 w-3.5" />
            <span className="text-xs uppercase font-semibold">
              {locale === "pt" ? "EN" : "PT"}
            </span>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={switchLocale}
            className="gap-1.5 text-muted-foreground rounded-full"
          >
            <Globe className="h-3.5 w-3.5" />
            <span className="text-xs uppercase font-semibold">
              {locale === "pt" ? "EN" : "PT"}
            </span>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background/95 backdrop-blur-xl border-border/30">
              <SheetTitle className="gradient-text text-lg">Menu</SheetTitle>
              <nav className="flex flex-col gap-1 mt-6">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                      activeSection === item.key
                        ? "text-primary bg-primary/10 border-l-2 border-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {t(item.key)}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
