import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createEmotionCache } from '../utils/create-emotion-cache';
import { theme } from '../theme';
import { AuthContextProvider } from '../context/AuthContext.tsx';
import ProtectedRoute from '../components/ProtectedRoute.tsx';
import { useRouter } from 'next/router';

const clientSideEmotionCache = createEmotionCache();

const noAuthRequired = ['/', '/login', '/register'];



const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AuthContextProvider>
    <CacheProvider value={emotionCache}>
      {noAuthRequired.includes(router.pathname) ? (
        <>
            <Head>
            <title>
              Barista CRM
            </title>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </LocalizationProvider>
        </>

      ) : ((
        <ProtectedRoute>
        <Head>
        <title>
          Barista CRM
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </LocalizationProvider>

          </ProtectedRoute>

      ))}
      
    </CacheProvider>
    </AuthContextProvider>
  );
};

export default App;
