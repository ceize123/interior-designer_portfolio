import Link from 'next/link'
import { IoLogoLinkedin } from 'react-icons/io';
import { AiOutlineInstagram } from 'react-icons/ai';

export default function Links() {
	return (
		<ul className='flex items-center'>
			<Link className='mr-5' href='/#about-section'>
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
	)
}