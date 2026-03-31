import { createTheme } from '@mui/material/styles';
import { typography } from './designTokens';

export const theme = createTheme({
  palette: {
    background: {
      default: "#f7f7f7", 
    },
  },
  typography: {
    fontFamily: typography.fontFamily,
    h1: {
      fontWeight: 500,
      fontSize: typography.sizes.h1,
      lineHeight: typography.lineHeights.h1,
    },
    h2: {
      fontWeight: 500,
      fontSize: typography.sizes.h2,
      lineHeight: typography.lineHeights.h2,
    },
    body1: {
      fontWeight: 500,
      fontSize: typography.sizes.body,
      lineHeight: typography.lineHeights.body,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  spacing: (factor: number) => `${factor * 8}px`, 
});