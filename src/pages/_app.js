import '@/styles/global.css'
import { Comfortaa } from 'next/font/google'

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['700']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={comfortaa.className}>
      <Component {...pageProps} />
    </main>
  )
}
