export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '48px',
};

export const typography = {
  // We now provide two distinct family strings
  families: {
    regular: "Europa Regular, sans-serif",
    medium: "Europa Medium, sans-serif",
  },

  sizes: {
    h1: 'clamp(3rem, 8vw, 4.5rem)',
    h2: 'clamp(2.5rem, 6vw, 3.5rem)', 
    body: 'clamp(1.125rem, 2vw, 1.25rem)',
    button: '1rem',
  },
  
  lineHeights: {
    h1: 1.1,
    h2: 1.2,
    body: 1.5,
  },
};