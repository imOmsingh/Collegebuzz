import Userstate from '@/context/Usercontext/Userstate'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <>
    <Userstate>
      <Component {...pageProps} />
    </Userstate>
  </>
  )
}
