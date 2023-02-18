import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from '@/store/store';

export default function App({ Component, pageProps }: AppProps) {
  return  <Provider store={store}>
  <div>
    <Component {...pageProps} /> 
  </div>
</Provider>
}


