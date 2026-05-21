import { createTheme, type PaletteMode } from "@mui/material/styles";
import { typography } from "./designTokens";
declare module "@mui/material/styles" {
  interface TypeText {
    tertiary?: string;
    grey?: string;
    quarternary?: string;
  }
}

export const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#5ec2de",
            },
            background: {
              default: "#ffffff",
              paper: "#f9f8f7",
            },
            text: {
              primary: "#1a1a1a",
              secondary: "#666666",
              tertiary: "#5ec2de",
              grey: "#bfc0c0",
              quarternary: "#ffff",
            },
            divider: "rgba(0, 0, 0, 0.12)",
          }
        : {
            primary: {
              main: "#5ec2de",
            },
            background: {
              // default: "#121212",
              // default: "#161922",
              default: "#191919",
              // paper: "#1e1e1e",
              // paper: "#262a33",
              paper: "#2c2c2c",
            },
            text: {
              primary: "#ffffff",
              secondary: "#b0b0b0",
              // tertiary: "#5ec2de",
              tertiary: "#5ccfe6",
              grey: "#bfc0c0",
              quarternary: "#b0b0b0",
            },
            divider: "rgba(255, 255, 255, 0.12)",
          }),
    },
    typography: {
      h1: {
        fontFamily: typography.families.medium,
        fontWeight: 500,
        fontSize: typography.sizes.h1,
        lineHeight: typography.lineHeights.h1,
      },
      h2: {
        fontFamily: typography.families.medium,
        fontSize: typography.sizes.h2,
        lineHeight: typography.lineHeights.h2,
      },
      h3: {
        fontFamily: typography.families.medium,
        fontSize: typography.sizes.h3,
        lineHeight: typography.lineHeights.h3,
      },
      h4: {
        fontFamily: typography.families.regular,
        fontSize: typography.sizes.h4,
        lineHeight: typography.lineHeights.h4,
      },
      h5: {
        fontFamily: typography.families.regular,
        fontSize: typography.sizes.h4,
        lineHeight: typography.lineHeights.h4,
      },
      h6: {
        fontFamily: typography.families.medium,
        fontSize: typography.sizes.body,
        lineHeight: typography.lineHeights.body,
      },
      body1: {
        fontFamily: typography.families.regular,
        fontSize: typography.sizes.body,
        lineHeight: typography.lineHeights.body,
      },
      button: {
        fontFamily: typography.families.medium,
        fontWeight: 500,
        textTransform: "none",
        fontSize: typography.sizes.button,
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
    },
  });
