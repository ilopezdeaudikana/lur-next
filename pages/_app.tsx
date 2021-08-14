import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Layout } from '../layout/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
