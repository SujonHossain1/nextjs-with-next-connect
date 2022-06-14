import type { AppProps } from 'next/app';
// import '../../scss/main.scss';
import '../scss/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
