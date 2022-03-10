/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import NProgress from 'nprogress';
// eslint-disable-next-line import/no-unresolved
import { route } from 'next/dist/server/router';
import { useRouter, Router } from 'next/router';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import * as ga from '../services/analytics';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const router = useRouter();

useEffect(() => {
  const handleRouteChange = (url) => {
    ga.pageview(url);
  };
  router.events.on('routeChangeComplete', handleRouteChange);
  return () => {
    router.events.off('routeChangeComplete', handleRouteChange);
  };
}, [router.events]);

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <>
      <Navbar />

      <Component {...pageProps} key={route} />
    </>
  );
}
