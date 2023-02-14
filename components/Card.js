import Link from 'next/link'
import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Card({ work, num }) {
	const [active, setActive] = useState(false)
	const { slug, thumbnail, title } = work
	const strings = title.split('')

	useEffect(() => {
		setActive(true)
		setTimeout(() => {
			AOS.init({
				offset: 150,
				duration : 1000
			})
		}, 1500)
	}, [work])
	
	return (
		<Link href={`/works/${slug}`} >
			<div className='work-card relative cursor-pointer overflow-hidden bg-light-gray'
				onMouseEnter={() => setActive(false)}
				onMouseLeave={() => setActive(true)}
				data-aos='fade-up'
				data-aos-delay={50 * num}
			>
				<div className={`work-card-bg w-full ${!active ? 'scale-110' : ''}`}
					style={{background: `url(https:${thumbnail[0].fields.file.url}) 
							no-repeat center center / cover `}}
				>
				</div>
				<div className={`text-yellow lg:text-5xl text-4xl 
								absolute pl-5 w-1/2 sm:bottom-7 bottom-3
				`}>
					<h2>
						{strings.map((char, index) => {
							return <span key={index} className={`${active && 'active effect'}`}>{char}</span>
						})}
					</h2>
				</div>
			</div>
		</Link>
	)
}