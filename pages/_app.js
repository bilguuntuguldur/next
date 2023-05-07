import "react-toggle/style.css" 
import '@/styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import useSWR, { SWRConfig } from 'swr'
import {ThemeProvider} from "context/theme-context"
import Router from "next/router"
import NProgress from "nprogress"
import "nprogress/nprogress.css"

Router.onRouteChangeStart = (url) => {
  NProgress.start();
}

Router.onRouteChangeCompleted = (url) => {
  NProgress.done();
}

Router.onRouteChangeError = (url) => {
  NProgress.done();
}

const fetcher = async url => {
  const res = await fetch(url)
 
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    // Attach extra info to the error object.
    error.info = await res.json()
    error.status = res.status
    throw error
  }
 
  return res.json()
}

export default function App({ Component, pageProps }) {
  return  <SWRConfig 
    value={{
      refreshInterval: 60000,
      fetcher
    }}
  >
    <ThemeProvider>
      <Component {...pageProps} />  
    </ThemeProvider>
  </SWRConfig>
}
