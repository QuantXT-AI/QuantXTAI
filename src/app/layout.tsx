import type { Metadata } from "next";
import { Epilogue, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";

import { SITE_CONFIG } from "@/config";

import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/providers/theme";

import Aos from "@/components/aos";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";
import SmoothScroll from "@/components/smoothScroll";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const fontRobotoMono = Roboto_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const fontClashDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/Clash-Display.ttf",
      weight: "400",
    },
  ],
  variable: "--font-clash-display",
});

const fontEpilogue = Epilogue({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-epilogue",
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
    url: SITE_CONFIG.url,
    images: [
      {
        url: "/previews.png",
        alt: "Preview",
      },
    ],
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
    <>
      <Aos />
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            geistMono.variable,
            fontRobotoMono.variable,
            fontClashDisplay.variable,
            fontEpilogue.variable,
            "bg-black font-roboto-mono antialiased ",
          )}
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
    </>
  );
}
