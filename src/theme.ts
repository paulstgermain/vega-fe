// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    primary: {
      main: '#247599',
      light: 'rgb(79, 144, 173)',
      dark: 'rgb(25, 81, 107)',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#dc2273',
      light: 'rgb(227, 78, 143)',
      dark: 'rgb(154, 23, 80)',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#892fa1',
      light: 'rgb(160, 88, 179)',
      dark: 'rgb(95, 32, 112)',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#1d887b',
      light: 'rgb(74, 159, 149)',
      dark: 'rgb(20, 95, 86)',
      contrastText: '#FFFFFF',
    },
    divider: 'rgba(0,0,0,0.12)',
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.61)',
      disabled: 'rgba(0,0,0,0.38)',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontFamily: 'Exo',
      fontWeight: 600,
    },
    h2: {
      fontFamily: 'Exo',
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'Exo',
    },
    h5: {
      fontFamily: 'Exo',
    },
    h6: {
      fontFamily: 'Exo',
    },
    h4: {
      fontFamily: 'Exo',
    },
  },
});

export default theme;