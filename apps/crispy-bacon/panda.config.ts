import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/src/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          primary: {
            bg: {
              value: "{colors.blue.500}",
            },
            fg: {
              value: "{colors.white}",
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  importMap: "@crispy-bacon/styled-system",
  outdir: "styled-system",
});
