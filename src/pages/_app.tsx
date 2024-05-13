import '../styles/globals.css';
import  AppProps  from 'next/app'; // Correct way to import AppProps
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from '../components/Layout';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
