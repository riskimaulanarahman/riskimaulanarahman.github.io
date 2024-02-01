import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { store, persistor } from '@/store/store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <MantineProvider withGlobalStyles withNormalizeCSS>
            <Head>
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
              />
              <meta
                name="description"
                content="I have worked as a software developer with 6 years of experience. And 12 years of information technology experience. I have liked information technology since 2007—more. Programming languages that I have learned such as Javascript, PHP, and Python. I have also handled several DBMS such as Postgresql, MySQL, Oracle DB, SQLite, and MongoDB. As a developer, I have built some applications with a framework, such as Node.js with Express, Nest.js, Next.js, React.js, Laravel. As a full-stack developer, As a developer, I have dominant abilities in backend development. I have been using Linux for more than 10 years. And understand the concept of computer networks."
              />
              <meta
                name="keywords"
                content="Fullstack Developer, React.js, Vue.js, Node.js, Golang, Nest.js, Python"
              />

              <link rel="manifest" href="/manifest.json" />
              {/* <link
                href="/icons/Icon-App-20x20.png"
                rel="icon"
                type="image/png"
                sizes="20x20"
              />
              <link
                href="/icons/Icon-App-40x40.png"
                rel="icon"
                type="image/png"
                sizes="40x40"
              />
              <link
                rel="apple-touch-icon"
                href="/icons/Icon-App-20x20.png"
              ></link> */}
              <meta name="theme-color" content="#317EFB" />
            </Head>
            <Component {...pageProps} />
          </MantineProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
