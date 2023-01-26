import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Links from '../components/Links'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
	const router = useRouter()

	return (
		<div className={`layout w-full ${router.route === '/' && 'bg-light-gray text-white'}`}>
			<div className='container mx-auto'>
				<Navbar />
				<Component {...pageProps} />
				<div className='flex justify-end pr-4 text-gray'>
					<Links />
				</div>
				<Footer />
			</div>
		</div>
	)
}
