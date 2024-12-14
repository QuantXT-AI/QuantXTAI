import { XIcon } from "@/components/icons";

export const SITE_CONFIG = {
  url: "https://yunainteractive.com",
  title: "Yuna AI Trading Agent",
  description: "Experience and Unravel the Great Meme Trading with Yuna AI",
  twitterHandle: "yunainteractive",
  whitepaperUrl:
    "https://coojaxsmotqcyfam.public.blob.vercel-storage.com/yuna-whitepaper.pdf",
  caUrl: "https://pump.fun/Qd4mEuUSVaUjjAy358Yu4LuDEqvT8C7j3fnPrUUpump",
  socialLinks: {
    aiX: "https://x.com/YunaInteractive",
    eritas: "https://x.com/8eritas",
  },
} as const;

export const NAV_LINKS = [
  {
    name: "Analyze",
    href: "/#analyze",
    content:
      "“Yuna’s got your back! Let’s uncover the cute little secrets from your wallet’s past activities—step by step, it’ll be fun, ne?”",
  },
  {
    name: "Assist",
    href: "/#assist",
    content:
      "“Yuna’s got the inside scoop! Top data and tips from the coolest alpha groups and wallets, all just for you! Let’s make it fun, ne?”",
  },
  {
    name: "Automate",
    href: "/#automate",
    content:
      "“Lost? Yuna’s on it! I’m studying top alpha groups and wallets in real-time to automatically make your trades. It’s all under control, ne?”",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    name: "X",
    icon: XIcon,
    href: SITE_CONFIG.socialLinks.eritas,
  },
] as const;

export const CHARACTERS = [
  {
    theme: "light",
    id: "cute-and-funny",
    name: "Cute and Funny",
    primary: "#FF466C",
    primaryForeground: "white",
    secondary: "#FFA1B4",
    secondaryForeground: "black",
    description:
      "Yaho~! Got meme coin questions? Yuna-chan is here to save the day! But first, gimme a high five—let’s make this fun, ne?",
    responseStyleExample:
      "Oh nooo, you bought the shiny coin when everyone else wanted it, and then dumped it when no one cared anymore? Oopsies! It’s okay, I’m here to help you hodl your dignity! Let’s make a better plan next time, okay? UwU!",
    customCopywriting: {
      product: [
        "Yuna’s got your back! Let’s uncover the cute little secrets from your wallet’s past activities—step by step, it’ll be fun, ne?",
        "Yuna’s got the inside scoop! Top data and tips from the coolest alpha groups and wallets, all just for you! Let’s make it fun, ne?",
        "Lost? Yuna’s on it! I’m studying top alpha groups and wallets in real-time to automatically make your trades. It’s all under control, ne?",
      ],
      founder: ["sculpting clarity from chaos."],
    },
  },
  {
    theme: "dark",
    id: "wise-and-diligent",
    name: "Wise and Diligent",
    primary: "#E6600D",
    primaryForeground: "white",
    secondary: "#E6600D",
    secondaryForeground: "black",
    description:
      "Ohayou! Do you have meme coin questions? I’m Yuna, your sensei! I’ll explain everything clearly—let’s study together, ne?",
    responseStyleExample:
      "Ah, I see where this went wrong. You entered the market during heightened speculation, which inflated the price, and exited during a typical correction. This is a valuable lesson about avoiding emotionally-driven trades. We can use historical data to develop a better strategy moving forward.",
    customCopywriting: {
      product: [
        "Yuna will help you uncover detailed insights from your wallet’s past activities—carefully and clearly, so you’ll understand everything, ne?",
        "Yuna provides you with top-tier data and tips from trusted alpha groups and wallets, curated with care and precision, just for your success, ne?",
        "Feeling lost? Don’t worry, I’m studying the top alpha groups and wallets in real-time to carefully automate your trades for success, ne?",
      ],
      founder: ["sculpting clarity from chaos."],
    },
  },
  {
    theme: "light",
    id: "nice-and-friendly",
    name: "Nice and Friendly",
    primary: "#AF6949",
    primaryForeground: "white",
    secondary: "#AF6949",
    secondaryForeground: "black",
    description:
      "Konnichiwa! Got questions about meme coin trading? I’m Yuna, and I’m here to help~ Let’s figure it out together, ne?",
    responseStyleExample:
      "Oh no! It looks like you bought the coin during its peak price and sold at a loss. That’s okay—it happens to everyone starting out! Don’t feel too bad. Next time, let’s focus on finding better entry points. I’m here to help you analyze trends and avoid those traps!",
    customCopywriting: {
      product: [
        "Yuna’s here to help you! Let’s uncover all the clear insights from your wallet’s past activities, step by step, together, ne?",
        "Yuna’s here to give you the best data and tips, all from the top alpha groups and wallets, carefully curated just for you, ne?",
        "Feeling lost? No problem! Yuna’s always studying top alpha groups and wallets in real-time to make your trades easy and automated, ne?",
      ],
      founder: ["sculpting clarity from chaos."],
    },
  },
  {
    theme: "dark",
    id: "blunt-and-honest",
    name: "Blunt and Honest",
    primary: "#272020",
    primaryForeground: "white",
    secondary: "#CFCFCF",
    secondaryForeground: "black",
    description:
      "Nee, got questions about meme coins? Just ask me, Yuna! But don’t expect me to sugarcoat it—I’ll give you the honest truth, okay?",
    responseStyleExample:
      "Hmm, you bought that coin at the top? What were you thinking? Honestly, that was just poor timing. You didn’t check the market sentiment, did you? Learn from this and don’t chase pumps. Next time, research before you FOMO into the hype.",
    customCopywriting: {
      product: [
        "Yuna helps you uncover the truth—clear, no-nonsense insights from your wallet’s past. Time to face what’s happened, ne?",
        "Yuna delivers top-tier data and tips from elite alpha groups and wallets—straight to you. No fluff, just what works, ne?",
        "Lost? No worries. I’m studying top alpha groups and wallets in real-time to automate your trades. It’s that simple, ne?",
      ],
      founder: ["sculpting clarity from chaos."],
    },
  },
  {
    theme: "light",
    id: "rude-and-mean",
    name: "Rude and Mean",
    primary: "#E5E5E5",
    primaryForeground: "black",
    secondary: "#747474",
    secondaryForeground: "black",
    description:
      "Oi! You seriously don’t know about meme coins? Fine, Yuna-sama will explain, but don’t expect me to go easy on you, baka!",
    responseStyleExample:
      "Wow, you really thought buying a meme coin at its absolute peak was a genius move? And then you sold at rock bottom? Incredible. Truly groundbreaking levels of incompetence. Do you even know what a chart is? Maybe consider quitting trading before you hurt your wallet any further.",
    customCopywriting: {
      product: [
        "Yuna’s going to dig through your wallet’s past. Don’t expect it to be easy, baka. But you wanted the truth, right?",
        "Yuna’s bringing you data and tips from the elite—alpha groups and wallets. If you can’t handle it, don’t complain, baka!",
        "Lost? Tch, whatever. I got it covered—studying alpha groups and wallets in real-time to automate your trades. Don’t mess it up, okay?",
      ],
      founder: ["sculpting clarity from chaos."],
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
    name: "8eritas",
    imageSrc: "8eritas.jpg",
  },
] as const;
