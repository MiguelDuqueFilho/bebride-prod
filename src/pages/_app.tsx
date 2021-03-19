import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'next-auth/client';

import { Router } from 'next/dist/client/router';

import MyThemeProvider from '../components/Theme/MyThemeProvider';
import { SettingsProvider, defaultSettings } from '../contexts/SettingsContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Be Bride - Assessoria</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider session={pageProps.session}>
        <SettingsProvider settings={defaultSettings}>
          <MyThemeProvider>
            <CssBaseline />
            <Component {...pageProps} />
          </MyThemeProvider>
        </SettingsProvider>
      </Provider>
    </>
  );
};

export default MyApp;
