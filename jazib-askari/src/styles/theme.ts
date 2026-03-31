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
});