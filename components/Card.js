import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Card({ work }) {
	const [active, setActive] = useState(false)
	const { slug, thumbnail, title } = work
	const strings = title.split('')

	useEffect(() => {
		setActive(true)
	}, [work])
	
	return (
		<Link href={`/works/${slug}`} >
			<div className='work-card relative cursor-pointer overflow-hidden'
				onMouseEnter={() => setActive(false)}
				onMouseLeave={() => setActive(true)}
			>
				<div className={`work-card-bg w-full ${!active && 'scale-105'}`}
					style={{background: `url(https:${thumbnail.fields.file.url}) 
							no-repeat center center / cover `}}
				>
				</div>
				{/* <div className={`text-black lg:text-5xl text-4xl absolute pl-5 sm:bottom-7 bottom-3`}>
					{strings.map((str, index) => {
						return <h2 key={index}>{str}</h2>
					})}
				</div> */}
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