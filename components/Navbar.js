import Link from 'next/link'
import { IoLogoLinkedin } from 'react-icons/io';
import { AiOutlineInstagram } from 'react-icons/ai';
import logo from '../public/logo.png';
import Image from 'next/image';

export default function Navbar() {
	return (
		<header className='w-screen sticky top-0 z-10 
				bg-light-gray text-white flex justify-center h-14'
		>
			<nav className='flex justify-between items-center mx-4 w-full max-w-7xl'>
				<div>
					<Link href='/'>
						<Image
							src={logo}
							width={100}
							height={100}
							alt="logo" />
					</Link>
				</div>
				<ul className='flex items-center'>
					<Link className='mr-5' href='/#about-section' scroll={false}>
						<li>ABOUT</li>
					</Link>
					<Link className='mr-5' href='/works'>
						<li>WORK</li>
					</Link>
					<Link className='mr-2' href='/'>
						<li>
							<IoLogoLinkedin className='icon'/>
						</li>
					</Link>
					<Link href='/'>
						<li>
							<AiOutlineInstagram className='icon'/>
						</li>
					</Link>
				</ul>
			</nav>
		</header>
	)
}