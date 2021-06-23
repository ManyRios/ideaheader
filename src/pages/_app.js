import Head from 'next/head'
import {GlobalStyles} from '../styles'

import 'bootstrap/dist/css/bootstrap.min.css' 

export default function MyApp({ Component, pageProps }) {
    return (
      
        <>
          <Head>
            {/*Fixing title on next/head */}
            <title>Ideamarket-Header</title>
          </Head>
          <GlobalStyles/>
          <Component {...pageProps} />

        </>
    
      
    )
  }