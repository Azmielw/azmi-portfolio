import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://azmi-portfolio-three.vercel.app"),

  title: {
    default: "AZMI ELWAHEDI — Creative Designer & Digital Creator",
    template: "%s — AZMI ELWAHEDI",
  },

  description:
    "Portfolio of Azmi Elwahedi — Creative Designer & Digital Creator focused on branding, social media, UI/UX, visual design and digital experiences.",

verification: {
  google: "QnamQA_Ps3kFN9u6268GWquDGZJGK12k7deB12-YYdo",
},

  keywords: [
    "Azmi Elwahedi",
    "Creative Designer",
    "Digital Creator",
    "Branding",
    "Social Media Design",
    "UI/UX Design",
    "Visual Design",
    "Creative Direction",
    "E-Commerce Design",
  ],

  authors: [
    {
      name: "Azmi Elwahedi",
    },
  ],

  creator: "Azmi Elwahedi",

  openGraph: {
    title: "AZMI ELWAHEDI — Creative Designer & Digital Creator",
    description:
      "Creative Designer & Digital Creator focused on branding, social media, UI/UX and digital experiences.",
    url: "https://azmi-portfolio-three.vercel.app",
    siteName: "AZMI ELWAHEDI",
    type: "website",
    images: [
  {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "AZMI ELWAHEDI — Creative Designer & Digital Creator",
  },
],
  },

  twitter: {
    card: "summary_large_image",
    title: "AZMI ELWAHEDI — Creative Designer & Digital Creator",
    description:
      "Creative Designer & Digital Creator focused on branding, social media, UI/UX and digital experiences.",
      images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Azmi Elwahedi",
  url: "https://azmi-portfolio-three.vercel.app",
  jobTitle: "Creative Designer & Digital Creator",
  email: "azmielw@gmail.com",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     <body className="min-h-full flex flex-col">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
  {children}
  <GoogleAnalytics gaId="G-VB72CCT5N9" />
</body>
    </html>
  );
}