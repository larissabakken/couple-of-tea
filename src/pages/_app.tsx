import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import Header from '@/components/header'
import Footer from '@/components/footer'

import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
