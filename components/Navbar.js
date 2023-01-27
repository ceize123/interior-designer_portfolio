import Link from 'next/link'
import Links from './Links'

export default function Navbar() {
	return (
		<header className='w-screen fixed top-0 left-0 right-0 z-10 
				bg-light-gray text-white flex justify-center h-14'
		>
			<nav className='flex justify-between items-center mx-4 w-full max-w-7xl'>
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