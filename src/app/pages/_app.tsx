import { AppProps } from 'next/app';
import { UserContextProvider } from '../context/UserContext';
import { Layout } from '../components/Layout/Layout';
import { GlobalStyles } from '../styles/GlobalStyles';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <UserContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContextProvider>
    </>
  );
}
