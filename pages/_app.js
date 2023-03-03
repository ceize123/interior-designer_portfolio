import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <div
      className={`layout w-full ${
        router.route === '/' ? 'bg-light-gray text-white' : ''
      }`}
    >
      <Navbar />
      <div className='container mx-auto'>
        <Component {...pageProps} />
      </div>
      {router.route !== '/' && <Contact />}
      <Footer />
    </div>
  )
}
