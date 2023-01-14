import Link from 'next/link'
import { IoLogoLinkedin } from "react-icons/Io";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center w-full header mt-5 mb-4 mx-4">
			<div>
				<Link href="/">
					<h1>ANN TSENG</h1>
				</Link>
			</div>
			<div className="flex items-center">
				<Link href="/">
					<h1 className="mr-5">ABOUT</h1>
				</Link>
				<Link href="/">
					<h1 className="mr-5">WORK</h1>
				</Link>
				<Link href="/">
					<IoLogoLinkedin className="icon"/>
				</Link>
				<Link href="/">
					<AiOutlineInstagram className="icon"/>
				</Link>
			</div>
		</nav>
	)
}