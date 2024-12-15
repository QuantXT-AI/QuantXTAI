import { XIcon } from "@/components/icons";

export const SITE_CONFIG = {
  url: "https://cryaistal.ai",
  title: "CryAIstal AI Trading Agent",
  description: "Precision Crypto Trading, Redefined by AI",
  twitterHandle: "cryaistal",
  whitepaperUrl: "https://google.com",
  caUrl: "https://pump.fun/xxxx",
  socialLinks: {
    aiX: "https://x.com/cryaistal",
    devX: "https://x.com",
  },
} as const;

export const NAV_LINKS = [
  {
    name: "Lorem Ipsum 1",
    href: "/#lorem-ipsum-1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Lorem Ipsum 2",
    href: "/#lorem-ipsum-2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Lorem Ipsum 3",
    href: "/#lorem-ipsum-3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    name: "X",
    icon: XIcon,
    href: SITE_CONFIG.socialLinks.devX,
  },
] as const;

export const CHARACTERS = [
  {
    theme: "dark",
    id: "good",
    name: "Good",
    primary: "#000",
    primaryForeground: "white",
    secondary: "#000",
    secondaryForeground: "black",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    responseStyleExample:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    customCopywriting: {
      product: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ],
      founder: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
    },
  },
  {
    theme: "dark",
    id: "evil",
    name: "Evil",
    primary: "#000",
    primaryForeground: "white",
    secondary: "#000",
    secondaryForeground: "black",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    responseStyleExample:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    customCopywriting: {
      product: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ],
      founder: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
    },
  },
] as const;

export const FAQ_OPTIONS = [
  "The Memecoin Philosophy",
  "Pre-Trading Checklist: 10-Second Rule",
  "Detailed Steps for Memecoin Analysis",
  "Market Cap & Liquidity-Based Strategy for Meme Coins",
  "Entry and Exit Strategies",
  "Psychological Guidelines",
  "Tools to Use",
] as const;

export const QUICK_CHAT_OPTIONS = [
  "Show me my top 5 fumbled bags (sold too early) 📉",
  "Show me my top 5 rekt positions (biggest losses) 💸",
  "Analyze my last 5 trades",
  "Get info on $ZEREBRO",
] as const;

export const FOUNDERS = [
  {
    name: "dev",
    imageSrc: "dev.jpg",
  },
] as const;
