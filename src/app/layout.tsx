import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Ethixweb India | Digital Agency, Web Engineering & Performance Growth",
  description:
    "We run the tech. You run the business. Ethixweb builds high-conversion websites, modern web apps, and automated digital operations for growing Indian enterprises.",
  keywords: [
    "Ethixweb",
    "Digital Agency India",
    "Web Development India",
    "Next.js Developers India",
    "SEO Services India",
    "Conversion Rate Optimisation",
    "Performance Marketing India",
    "AI Automation",
  ],
  authors: [{ name: "Ethixweb" }],
  creator: "Ethixweb",
  metadataBase: new URL("https://ethixweb.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ethixweb.com",
    siteName: "Ethixweb",
    title: "Ethixweb | We Run the Tech. You Run the Business.",
    description:
      "High-speed websites, web applications, CRM integrations, and digital operations engineered for Indian enterprises.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethixweb | We Run the Tech. You Run the Business.",
    description:
      "High-speed websites, web applications, CRM integrations, and digital operations engineered for Indian enterprises.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-cream-100 text-charcoal font-sans antialiased selection:bg-brand-redSubtle selection:text-brand-redDeep flex flex-col min-h-screen">
        {/* Accessible skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-charcoal text-white rounded font-mono text-xs focus:ring-2 focus:ring-brand-red"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
