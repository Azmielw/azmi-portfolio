import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}