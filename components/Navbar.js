import Link from 'next/link'
import Links from './Links'

export default function Navbar() {
	return (
		<header className='w-screen fixed top-0 left-0 right-0 z-10 bg-light-gray text-white flex justify-center'>
			<nav className='flex justify-between items-center mt-5 mb-4 mx-4 w-full'>
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