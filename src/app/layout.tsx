import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://satyaninfotech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Satyan Infotech | IT Solutions Agency",
    template: "%s | Satyan Infotech",
  },
  description:
    "Satyan Infotech delivers web, mobile, and software development solutions with experienced developers, quality delivery, and dedicated support.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Satyan Infotech",
    title: "Satyan Infotech | IT Solutions Agency",
    description:
      "Professional web, mobile, and software development solutions for growing businesses.",
    url: siteUrl,
    images: [{ url: "/frontend/img/slider-2.webp", alt: "Satyan Infotech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Satyan Infotech | IT Solutions Agency",
    description:
      "Professional web, mobile, and software development solutions for growing businesses.",
    images: ["/frontend/img/slider-2.webp"],
  },
  icons: {
    icon: "/frontend/img/favicon-32x32.png",
    apple: "/frontend/img/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/frontend/final.css" />
        <link rel="manifest" href="/frontend/img/site.webmanifest" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
