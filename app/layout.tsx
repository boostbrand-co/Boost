import type { Metadata } from "next";
/**
 * Fonts are self-hosted via @fontsource-variable so the site makes zero
 * third-party font requests at runtime. This is faster than next/font/google,
 * removes a render-blocking external origin, and keeps the build reproducible
 * in restricted environments.
 */
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { Header } from "@/components/nav/header";
import { Footer } from "@/components/nav/footer";
import { jsonLd, organizationSchema } from "@/lib/seo";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "BOOST® · Marketing you can actually watch work",
    template: "%s",
  },
  description: site.description,
  icons: { icon: "/favicon.ico" },
  openGraph: { siteName: "BOOST®", type: "website", locale: "en_US" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organizationSchema)} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
