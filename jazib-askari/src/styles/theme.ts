import { createTheme } from '@mui/material/styles';
import { typography } from './designTokens';

export const theme = createTheme({
  palette: {
    background: {
      default: "#ffffff", 
    },
  },
  typography: {

    h1: {
      fontFamily: typography.families.medium, // Force Medium
      fontWeight: 500, // Ensure Medium weight
      fontSize: typography.sizes.h1,
      lineHeight: typography.lineHeights.h1,
    },
    h2: {
      fontFamily: typography.families.medium, // Force Medium
      fontWeight: 500, // Ensure Medium weight
      fontSize: typography.sizes.h2,
      lineHeight: typography.lineHeights.h2,
    },
    h3: {
      fontFamily: typography.families.regular, // Force Medium
      fontSize: typography.sizes.h2,
      lineHeight: typography.lineHeights.h2,
    },
    body1: {
      fontFamily: typography.families.regular, // Force Regular
      fontSize: typography.sizes.body,
      lineHeight: typography.lineHeights.body,
    },
    button: {
      fontFamily: typography.families.medium, // Force Medium
      fontWeight: 500, // Ensure Medium weight
      textTransform: 'none',
      fontSize: typography.sizes.button,
    },
  },
});