import Link from 'next/link'
import Links from './Links'

export default function Navbar() {
	return (
		<header className='w-full fixed top-0 left-0 right-0 mx-auto z-10'>
			<nav className='flex justify-between items-center mt-5 mb-4 mx-4'>
				<div>
					<Link href='/'>
						<h1>ANN TSENG</h1>
					</Link>
				</div>
				<Links />
			</nav>
		</header>
	)
}