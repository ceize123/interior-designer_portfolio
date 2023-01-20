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
					<div className={`text-black text-5xl absolute ${strings.length > 1 ? 'bottom-8' : 'bottom-20'} pl-5`}>
						{strings.map((str, index) => {
							return <p key={index}>{str}</p>
						})}
					</div>
			</div>
		</Link>
	)
}