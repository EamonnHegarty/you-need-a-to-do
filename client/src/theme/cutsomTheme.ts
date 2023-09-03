import { createTheme, ThemeOptions } from '@mui/material';

export const customTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#6ca6c1',
      main: '#35718e',
      dark: '#00465e',
    },
    background: {
      paper: '#333333',
      default: '#242424',
    },
  },
});
