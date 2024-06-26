/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        eggplant: {
          100: "#F3E9ED",
          200: "#DAC7CE",
          300: "#C1A5AF",
          400: "#8E6172",
          DEFAULT: "#753F53",
          500: "#753F53",
          600: "#462632",
          700: "#231319",
          800: "#170D11",
          900: "#0C0608",
        },
        aquamarine: {
          100: "#E8FFF7",
          200: "#D0FFEE",
          300: "#A1FFDD",
          400: "#73FFCD",
          DEFAULT: "#15FFAB",
          fade: "#BDFFD7",
          500: "#15FFAB",
          600: "#11CC89",
          700: "#086644",
          800: "#043322",
          900: "#021A11",
        },
        neutral: {
          100: "#FFFFFF",
          200: "#F5F7FA",
          300: "#D3D5DA",
          400: "#8A92A3",
          DEFAULT: "#565E6F",
          500: "#565E6F",
          600: "#4A5263",
          700: "#2D323E",
          800: "#1B1E26",
          900: "#0F1117",
          950: "#05060B",
          icon: "#2E3747",
        },
        midnight: {
          100: "#4C618C",
          DEFAULT: "#222C40",
        },
        content: {
          DEFAULT: "#A4ABBA",
        },
        sky: "#14D3F9",
        pacific: "#00A7CC",
        "non-photo-blue": "#95ECFF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        chakra: ["Chakra Petch", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      fontSize: {
        caption: ["0.688rem", { lineHeight: 1.5 }],
        "caption-lg": ["0.812rem", { lineHeight: 1.5 }],
        "body-sm": ["0.875rem", { lineHeight: 1.5 }],
        body: ["1rem", { lineHeight: 1.5 }],
        "body-lg": ["1.125rem", { lineHeight: 1.5 }],
        h1: ["5.75rem", { lineHeight: 1.2 }],
        h2: ["4.5625rem", { lineHeight: 1.2 }],
        h3: ["3.6875rem", { lineHeight: 1.2 }],
        h4: ["2.9375rem", { lineHeight: 1.2 }],
        h5: ["2.375rem", { lineHeight: 1.2 }],
        h6: ["1.875rem", { lineHeight: 1.2 }],
        h7: ["1.5rem", { lineHeight: 1.2 }],
      },
      width: {
        inner: "1440px",
      },
    },
  },
  plugins: [],
};
