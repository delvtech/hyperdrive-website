import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
          DEFAULT: "#2EFCB6",
          fade: "#BDFFD7",
          500: "#2EFCB6",
          600: "#11CC89",
          700: "#086644",
          800: "#043322",
          900: "#021A11",
          950: "#001B14",
        },
        neutral: {
          100: "#FFFFFF",
          200: "#F5F7FA",
          300: "#D3D5DA",
          400: "#8A92A3",
          DEFAULT: "#69696B",
          500: "#565E6F",
          600: "#4A5263",
          700: "#242429",
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
          DEFAULT: "#fff",
          600: "#DBDBEB",
          inverse: "#000",
        },
        teal: {
          400: "#69EAE9",
          DEFAULT: "#44E8E8",
          600: "#0FC2C2",
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
        caption: ["0.688rem", { lineHeight: "1.5" }],
        "caption-lg": ["0.812rem", { lineHeight: "1.5" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        body: ["1rem", { lineHeight: "1.5" }],
        "body-lg": ["1.125rem", { lineHeight: "1.5" }],
        h1: ["5.125rem", { lineHeight: "1.2" }],
        h2: ["4.5625rem", { lineHeight: "1.2" }],
        h3: ["3.6875rem", { lineHeight: "1.2" }],
        h4: ["2.9375rem", { lineHeight: "1.2" }],
        "h4.5": ["2.6562rem", { lineHeight: "1.2" }],
        h5: ["2.375rem", { lineHeight: "1.2" }],
        h6: ["1.875rem", { lineHeight: "1.2" }],
        h7: ["1.5rem", { lineHeight: "1.2" }],
      },
    },
  },
  plugins: [
    plugin(
      ({ matchUtilities, theme, addUtilities, addComponents, addVariant }) => {
        addComponents({
          ".inner-container": {
            display: "block",
            maxWidth: theme("maxWidth.7xl"),
            paddingLeft: "2vw",
            paddingRight: "2vw",
            marginLeft: "auto",
            marginRight: "auto",
            boxSizing: "border-box",

            [`@media (max-width: ${theme("screens.lg")})`]: {
              maxWidth: theme("maxWidth.3xl"),
              paddingLeft: "5vw",
              paddingRight: "5vw",
            },
          },

          ".gradient-text": {
            backgroundClip: "text",
            color: "transparent",
            backgroundImage:
              "linear-gradient(to right, var(--tw-gradient-stops))",
            "--tw-gradient-from": `${theme("colors.aquamarine.DEFAULT")} var(--tw-gradient-from-position)`,
            "--tw-gradient-to": `${theme("colors.sky")} var(--tw-gradient-to-position)`,
            "--tw-gradient-stops":
              "var(--tw-gradient-from), var(--tw-gradient-to)",
          },

          ".spaced-mono": {
            fontFamily: theme("fontFamily.mono"),
            fontSize: theme("fontSize.body-sm"),
            textTransform: "uppercase",
            letterSpacing: theme("letterSpacing.widest"),
          },

          ".button": {
            fontFamily: theme("fontFamily.mono"),
            fontSize: theme("fontSize.body-sm"),
            fontWeight: theme("fontWeight.medium"),
            textTransform: "uppercase",
            display: "inline-flex",
            gap: theme("spacing.2"),
            padding: `0 ${theme("spacing.8")}`,
            height: theme("spacing.12"),
            border: "1px solid",
            justifyContent: "center",
            alignItems: "center",
            letterSpacing: theme("letterSpacing.widest"),
            whiteSpace: "nowrap",
            color: theme("colors.neutral.100"),
            backdropFilter: "blur(var(--tw-backdrop-blur))",
            "--tw-backdrop-blur": theme("backdropBlur.DEFAULT"),
            transition: "all 0.1s",

            "&.button-sm": {
              fontSize: theme("fontSize.caption-lg"),
              lineHeight: theme("lineHeight.caption-lg"),
              height: theme("spacing.10"),
            },

            "&.button-primary": {
              borderColor: theme("colors.aquamarine.DEFAULT"),
              backgroundColor: theme("colors.aquamarine.DEFAULT"),
              color: theme("colors.content.inverse"),

              "&:hover": {
                borderColor: theme("colors.aquamarine.600"),
                backgroundColor: theme("colors.aquamarine.300"),
              },
            },

            "&.button-primary-alt": {
              borderColor: theme("colors.teal.600"),
              backgroundColor: theme("colors.teal.600"),
              color: theme("colors.content.inverse"),

              "&:hover": {
                borderColor: theme("colors.teal.700"),
                backgroundColor: theme("colors.teal.400"),
              },
            },
          },

          ".card": {
            borderRadius: theme("borderRadius.DEFAULT"),
            border: "1px solid",
            borderColor: "rgb(255 255 255 / 0.15)",
            background: "rgb(219 219 235 / 0.08)",
            padding: theme("spacing.8"),
            backdropFilter: "var(--tw-backdrop-blur)",
            "--tw-backdrop-blur": `blur(${theme("backdropBlur.DEFAULT")})`,

            [`@media (max-width: ${theme("screens.lg")})`]: {
              padding: theme("spacing.5"),
            },
          },
        });

        addUtilities({
          /*
        Adds clipped corners that scale with the element without distorting. This is
        achieved by using polygon and calc() to get values that are relative to the
        element's width and height.
        */
          ".clip-corners": {
            clipPath: `polygon(
            0.00px 0.00px,

            calc(100% - 53.50px) 0.00px,
            100% 43.00px,

            100% 100%,

            66.00px 100%,
            0.00px calc(100% - 51.00px)
          )`,
          },

          ".clip-corners-inner": {
            clipPath: `polygon(
            0.00px 0.00px,

            calc(100% - 40.45px) 0.00px,
            100% 32.54px,

            100% 100%,

            52.76px 100%,
            0.00px calc(100% - 43.21px)
          )`,
          },

          ".clip-corners-rounded": {
            clipPath: `polygon(
            0.00px 12.00px,
            0.04px 11.00px,
            0.17px 10.00px,
            0.38px 9.00px,
            0.68px 8.00px,
            1.09px 7.00px,
            1.61px 6.00px,
            2.25px 5.00px,
            3.00px 4.06px,
            4.00px 3.06px,
            5.00px 2.25px,
            6.00px 1.61px,
            7.00px 1.09px,
            8.00px 0.68px,
            9.00px 0.38px,
            10.00px 0.17px,
            11.00px 0.04px,
            12.00px 0.00px,

            calc(100% - 44.00px) 0.02px,
            calc(100% - 44.68px) 0.00px,
            calc(100% - 43.00px) 0.12px,
            calc(100% - 42.00px) 0.30px,
            calc(100% - 41.00px) 0.58px,
            calc(100% - 39.89px) 1.00px,
            calc(100% - 39.00px) 1.43px,
            calc(100% - 38.00px) 2.03px,
            calc(100% - 37.16px) 2.65px,
            calc(100% - 4.48px) 28.94px,
            calc(100% - 4.00px) 29.34px,
            calc(100% - 3.32px) 30.00px,
            calc(100% - 3.00px) 30.35px,
            calc(100% - 2.47px) 31.00px,
            calc(100% - 1.78px) 32.00px,
            calc(100% - 1.23px) 33.00px,
            calc(100% - 0.79px) 34.00px,
            calc(100% - 0.46px) 35.00px,
            calc(100% - 0.22px) 36.00px,
            calc(100% - 0.07px) 37.00px,
            100% 38.00px,

            100% calc(100% - 12.00px),
            calc(100% - 0.04px) calc(100% - 11.00px),
            calc(100% - 0.17px) calc(100% - 10.00px),
            calc(100% - 0.38px) calc(100% - 9.00px),
            calc(100% - 0.68px) calc(100% - 8.00px),
            calc(100% - 1.09px) calc(100% - 7.00px),
            calc(100% - 1.61px) calc(100% - 6.00px),
            calc(100% - 2.00px) calc(100% - 5.36px),
            calc(100% - 2.25px) calc(100% - 5.00px),
            calc(100% - 3.00px) calc(100% - 4.06px),
            calc(100% - 4.00px) calc(100% - 3.06px),
            calc(100% - 5.00px) calc(100% - 2.25px),
            calc(100% - 6.00px) calc(100% - 1.61px),
            calc(100% - 7.00px) calc(100% - 1.09px),
            calc(100% - 8.00px) calc(100% - 0.68px),
            calc(100% - 9.00px) calc(100% - 0.38px),
            calc(100% - 10.00px) calc(100% - 0.17px),
            calc(100% - 11.00px) calc(100% - 0.04px),
            calc(100% - 12.00px) 100%,

            57.05px 100%,
            56.00px calc(100% - 0.05px),
            55.00px calc(100% - 0.18px),
            54.00px calc(100% - 0.39px),
            53.00px calc(100% - 0.70px),
            52.00px calc(100% - 1.11px),
            51.00px calc(100% - 1.64px),
            50.00px calc(100% - 2.29px),
            49.45px calc(100% - 2.72px),
            4.40px calc(100% - 39.61px),
            3.95px calc(100% - 40.00px),
            3.00px calc(100% - 40.96px),
            2.18px calc(100% - 42.00px),
            1.55px calc(100% - 43.00px),
            1.04px calc(100% - 44.00px),
            0.65px calc(100% - 45.00px),
            0.35px calc(100% - 46.00px),
            0.15px calc(100% - 47.00px),
            0.03px calc(100% - 48.00px),
            0.00px calc(100% - 48.90px)
          )`,
          },

          ".clip-none": {
            clipPath: "none",
          },
        });

        matchUtilities(
          {
            "text-shadow": (value: string) => ({
              textShadow: value,
            }),
          },
          {
            values: {
              ...theme("textShadow"),
              sm: "0 1px 2px var(--tw-shadow-color)",
              DEFAULT: "0 2px 4px var(--tw-shadow-color)",
              lg: "0 8px 16px var(--tw-shadow-color)",
            },
          },
        );

        matchUtilities(
          {
            "bg-gradient": (angle) => ({
              "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
            }),
          },
          {
            values: {
              ...theme("bgGradientDeg"),
              10: "10deg", // bg-gradient-10
              15: "15deg",
              20: "20deg",
              25: "25deg",
              30: "30deg",
              45: "45deg",
              60: "60deg",
              90: "90deg",
              120: "120deg",
              135: "135deg",
            },
          },
        );

        addVariant("hocus", ["&:hover", "&:focus"]);
        addVariant("hocus-visible", ["&:hover", "&:focus-visible"]);
        addVariant("group-hocus", [".group:hover &", ".group:focus-within &"]);
        addVariant("group-hocus-visible", [
          ".group:hover &",
          ".group:has(:focus-visible) &",
        ]);
      },
    ),
  ],
} satisfies Config;
