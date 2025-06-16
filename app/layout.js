import { Inter, Manrope, JetBrains_Mono, Geist, Geist_Mono } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { baseUrl } from "@/utils/content";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Option 1: Current setup (recommended)
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  preload: true,
});

// Option 2: More modern/distinctive
// export const geist = Geist({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-geist",
//   preload: true,
// });

// export const geistMono = Geist_Mono({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-geist-mono",
//   preload: true,
// });

// Option 3: Developer-focused
// export const jetbrainsMono = JetBrains_Mono({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-jetbrains-mono",
//   preload: true,
// });

export function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

const description =
  "Crafting elegant solutions at the intersection of cloud architecture and full-stack development. Transforming complex challenges into seamless experiences through innovative engineering.";

export const metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Aakash Sondagar - Software Engineer",
    template: "%s | Aakash Sondagar - Software Engineer",
  },
  description: description,
  keywords: [
    "Aakash Sondagar",
    "Software Engineer",
    "Full Stack Developer", 
    "Solution Architect",
    "Cloud Architect",
    "Web Development",
    "System Design",
    "Cloud Solutions",
    "Microservices",
    "Software Architecture",
    "Tech Lead",
    "Mumbai",
    "Engineering Leadership",
    "Cloud Migration",
    "Scalable Systems",
    "Backend Development",
    "Frontend Development",
    "AWS",
    "GCP",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript"
  ].join(", "),
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  authors: [{ name: "Aakash Sondagar", url: baseUrl }],
  creator: "Aakash Sondagar",
  publisher: "Aakash Sondagar",
  category: "Technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Aakash Sondagar - Software Engineer",
    title: "Aakash Sondagar - Software Engineer",
    description: description,
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Aakash Sondagar - Software Engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakash Sondagar - Software Engineer",
    description: description,
    images: ["/favicon.png"],
    creator: "@AakashSondagar",
    site: "@AakashSondagar",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "your-google-verification-code", // Add your actual verification code
  // },
  other: {
    "msapplication-TileColor": "#6366f1",
    "theme-color": "#6366f1",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aakash Sondagar",
  url: baseUrl,
  image: `${baseUrl}/favicon.png`,
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Wohlig",
    url: "https://www.wohlig.com/"
  },
  description: description,
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Sardar Patel Institute of Technology",
    url: "https://www.spit.ac.in/"
  },
  knowsAbout: [
    "Software Engineering",
    "Cloud Architecture", 
    "Full Stack Development",
    "System Design",
    "Web Development",
    "React",
    "Next.js",
    "Node.js",
    "Google Cloud Platform",
    "AWS"
  ],
  sameAs: [
    "https://github.com/Aakash-Sondagar",
    "https://www.linkedin.com/in/aakash-sondagar",
    "https://x.com/AakashSondagar",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN"
  }
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vercel.com" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} antialiased tracking-tight relative`}
      >
        <ThemeProvider />
        <main className="mx-auto mb-14 w-full max-w-screen-sm flex-1 px-4 pt-8 pb-0 sm:py-14">
          <ViewTransitions>
            <Navbar />
            <div className="prose">{children}</div>
            <Footer />
          </ViewTransitions>
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;