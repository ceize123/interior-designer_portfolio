import Link from 'next/link'

export default function Card({ work }) {
	const strings = work.title.split(' ')
	const { slug, thumbnail } = work
	return (
		<Link href={`/works/${slug}`} >
			<div className='work-card relative cursor-pointer' style={{
				background: `url(https:${thumbnail.fields.file.url}) 
				no-repeat center center / cover `}}
			>
				{/* ${strings.length > 1 ? 'sm:bottom-8 bottom-3' : 'sm:bottom-20 bottom-10'}  */}
				<div className={`text-black lg:text-5xl text-4xl absolute pl-5 sm:bottom-7 bottom-3`}>
						{strings.map((str, index) => {
							return <p key={index}>{str}</p>
						})}
					</div>
			</div>
		</Link>
	)
}