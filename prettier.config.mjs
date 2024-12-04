/**
 * @type {import('prettier').Config}
 */
const config = {
  arrowParens: "always",
  printWidth: 80,
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,
  importOrder: [
    "^next",
    "^next/(.*)$",
    "^@/config",
    "^@/env",
    "^@/app/(.*)$",
    "^@/data/(.*)$",
    "^@/lib/(.*)$",
    "^@/providers/(.*)$",
    "^@/components/(.*)$",
    "^@/hooks/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};

export default config;
