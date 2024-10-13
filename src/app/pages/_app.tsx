import { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/GlobalStyles';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
