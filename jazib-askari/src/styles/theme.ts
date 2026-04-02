import { createTheme, type PaletteMode } from '@mui/material/styles';
import { typography } from './designTokens';
declare module '@mui/material/styles' {
  interface TypeText {
    tertiary?: string;
    grey?: string;
  }
}
export const getTheme = (mode: PaletteMode) => 
  createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: "#4CAF50",
            },
            background: {
              default: "#ffffff",
              paper: "#f7f7f7",
            },
            text: {
              primary: "#1a1a1a",
              secondary: "#666666",
              tertiary: "#4CAF50",
              grey: "#bfc0c0",  
            },
            divider: "rgba(0, 0, 0, 0.12)",
          }
        : {
            primary: {
              main: "#4CAF50",
            },
            background: {
              default: "#121212",
              paper: "#1e1e1e",
            },
            text: {
              primary: "#ffffff",
              secondary: "#b0b0b0",
              tertiary: "#4CAF50", 
              grey: "#bfc0c0", 
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
        fontWeight: 500,
        fontSize: typography.sizes.h2,
        lineHeight: typography.lineHeights.h2,
      },
      h3: {
        fontFamily: typography.families.regular,
        fontSize: typography.sizes.h2,
        lineHeight: typography.lineHeights.h2,
      },
      body1: {
        fontFamily: typography.families.regular,
        fontSize: typography.sizes.body,
        lineHeight: typography.lineHeights.body,
      },
      button: {
        fontFamily: typography.families.medium,
        fontWeight: 500,
        textTransform: 'none',
        fontSize: typography.sizes.button,
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none', 
          },
        },
      },
    },
  });