import type { Metadata } from "next";
import localFont from "next/font/local";

import { SITE_CONFIG } from "@/config";

import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/providers/theme";

import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const sansation = localFont({
  src: [
    {
      path: "./fonts/Sansation-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Sansation-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Sansation-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Sansation-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Sansation-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Sansation-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-sansation",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    site: `@${SITE_CONFIG.twitterHandle}`,
    creator: `@${SITE_CONFIG.twitterHandle}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(sansation.variable, geistMono.variable, "antialiased")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
