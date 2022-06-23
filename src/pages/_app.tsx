import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from 'src/store/store';
// import '../../scss/main.scss';
import '../scss/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
