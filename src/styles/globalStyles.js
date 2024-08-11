const globalStyles = {
  colors: {
    primary: '#1A237E',
    secondary: '#FFD700',
    background: '#FFFFFF',
    text: '#000000',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  spacing: (factor) => `${0.5 * factor}rem`, // spacing(2) == 1rem
}

export default globalStyles;