import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  Container,
} from '@mui/material';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="xl">
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
