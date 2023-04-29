import { Provider } from 'react-redux'
import { store,persistor } from '../app/store'
import '../styles/globals.css'
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
import NextNProgress from 'nextjs-progressbar';
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }) => {

  return <>
    <NextNProgress color='white' />
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
      </PersistGate>
    </Provider>
    </QueryClientProvider>
  </>
}

export default MyApp
