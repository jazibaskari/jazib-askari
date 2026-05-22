export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "48px",
};

export const typography = {
  families: {
    regular: "Europa Regular, sans-serif",
    medium: "Europa Medium, sans-serif",
    ppNeueMontreal: '"PPNeueMontreal", sans-serif', // <-- Added Montreal token
  },
  sizes: {
    h1: "clamp(3rem, 8vw, 4.5rem)",
    h2: "clamp(2.5rem, 6vw, 3.5rem)",
    h3: "clamp(2rem, 4vw, 3rem)",
    h4: "clamp(1.25rem, 2.5vw, 1.5rem)",
    h5: "clamp(1.25rem, 1.5vw, 1rem)",
    body: "clamp(1rem, 2vw, 1.125rem)",
    button: "1rem",
  },
  lineHeights: {
    h1: 1.1,
    h2: 1.2,
    h3: 1.2,
    h4: 1.2,
    body: 1.5,
  },
};
