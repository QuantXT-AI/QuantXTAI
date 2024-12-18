import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "hsl(var(--background))",
      //   foreground: "hsl(var(--foreground))",
      //   card: {
      //     DEFAULT: "hsl(var(--card))",
      //     foreground: "hsl(var(--card-foreground))",
      //   },
      //   popover: {
      //     DEFAULT: "hsl(var(--popover))",
      //     foreground: "hsl(var(--popover-foreground))",
      //   },
      //   primary: {
      //     DEFAULT: "hsl(var(--primary))",
      //     foreground: "hsl(var(--primary-foreground))",
      //   },
      //   secondary: {
      //     DEFAULT: "hsl(var(--secondary))",
      //     foreground: "hsl(var(--secondary-foreground))",
      //   },
      //   muted: {
      //     DEFAULT: "hsl(var(--muted))",
      //     foreground: "hsl(var(--muted-foreground))",
      //   },
      //   accent: {
      //     DEFAULT: "hsl(var(--accent))",
      //     foreground: "hsl(var(--accent-foreground))",
      //   },
      //   destructive: {
      //     DEFAULT: "hsl(var(--destructive))",
      //     foreground: "hsl(var(--destructive-foreground))",
      //   },
      //   border: "hsl(var(--border))",
      //   input: "hsl(var(--input))",
      //   ring: "hsl(var(--ring))",
      //   chart: {
      //     "1": "hsl(var(--chart-1))",
      //     "2": "hsl(var(--chart-2))",
      //     "3": "hsl(var(--chart-3))",
      //     "4": "hsl(var(--chart-4))",
      //     "5": "hsl(var(--chart-5))",
      //   },
      // },
      // borderRadius: {
      //   lg: "var(--radius)",
      //   md: "calc(var(--radius) - 2px)",
      //   sm: "calc(var(--radius) - 4px)",
      // },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        "roboto-mono": ["var(--font-roboto-mono)"],
        "clash-display": ["var(--font-clash-display)"],
        epilogue: ["var(--font-epilogue)"],
      },
      animation: {
        shake: "shake 0.5s ease-in-out",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%, 75%": { transform: "translate(-4px, 4px)" },
          "50%": { transform: "translate(4px, -4px)" },
        },
      },
      typography: () => ({
        DEFAULT: {
          css: {
            color: "white",
            h1: { color: "white" },
            h2: { color: "white" },
            h3: { color: "white" },
            a: { color: "white" },
            "a:hover": { color: "white" },
            strong: { color: "white" },
            code: { color: "white" },
            blockquote: {
              color: "white",
              borderLeftColor: "white",
            },
          },
        },
      }),
      backgroundImage: {
        "cryaistal": "url('/assets/components/overlay/overlay-landing.png')"
      }
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
