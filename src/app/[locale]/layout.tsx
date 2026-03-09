import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NeuralNetworkBackground } from "@/components/shared/neural-network-bg";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";

  return {
    title: isEn
      ? "Thiago Queiroz | Software Engineer"
      : "Thiago Queiroz | Engenheiro de Software",
    description: isEn
      ? "Portfolio of Thiago Queiroz - Software Engineer specialized in AI and Machine Learning"
      : "Portfólio de Thiago Queiroz - Engenheiro de Software especializado em IA e Machine Learning",
    openGraph: {
      title: isEn
        ? "Thiago Queiroz | Software Engineer"
        : "Thiago Queiroz | Engenheiro de Software",
      description: isEn
        ? "Portfolio of Thiago Queiroz - Software Engineer specialized in AI and Machine Learning"
        : "Portfólio de Thiago Queiroz - Engenheiro de Software especializado em IA e Machine Learning",
      type: "website",
      locale: locale === "en" ? "en_US" : "pt_BR",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {/* Full-page AI neural network background */}
      <NeuralNetworkBackground />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
