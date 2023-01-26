import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Links from '../components/Links'

export default function App({ Component, pageProps }) {
	return (
		<div className='layout'>
			<Navbar />
			<Component {...pageProps} />
			<div className='flex justify-end pr-4 text-gray'>
				<Links />
			</div>
			<Footer />
		</div>
	)
}
