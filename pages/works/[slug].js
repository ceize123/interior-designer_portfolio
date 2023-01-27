import { createClient } from 'contentful'
import Skeleton from '../../components/Skeleton'
import Drawing from '../../components/Drawing-Sec'
import ImageTemp from '../../components/Image-Temp'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID, // id
	accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

// after nextjs runs this, it generates different paths and pages
export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: 'annWorks'
	})

	const paths = res.items.map((item) => {
		return {
			params: {slug: item.fields.slug}
		}
	})

	return {
		paths,
		fallback: true
	}
}

// for each one of different paths, it runs getStaticProps
export async function getStaticProps({params}) {
	const { items } = await client.getEntries({
		content_type: 'annWorks',
		'fields.slug': params.slug
	})

	if (!items.length) {
		return {
			redirect: {
				destination: '/',
				permanent: false // not a permanent redirect, because in the future, there might have this url
			}
		}
	}

	return {
		props: { work: items[0] },
		revalidate: 10
	}
}

export default function WorkDetails({ work }) {
	useEffect(() => {
		setTimeout(() => {
			AOS.init({
				offset: 150,
				duration : 1000
			});
		}, 3000)
	}, [work])
	if (!work) return <Skeleton />

	const { title, banner, year, overview, sketches } = work.fields
	const sketchDrawings = sketches.slice(1)
	let secAry = []

	const getSections = (data) => {
		const ary = Object.keys(data)
		for (const item of ary) {
			if (/sec.*Drawing/i.test(item)) {
				secAry.push(data[item])
			}
		}
	}
	getSections(work.fields)

	console.log(work.fields)
	return (
	<main className='mt-14 border-x-2 border-light-gray px-14'>
		<section className='banner flex justify-center md:py-20 py-12'>
				<div className='max-w-4xl w-full' data-aos='fade-up'>
					<ImageTemp data={banner} />
				<div className='ml-5 mb-6'>
					<h3 className='text-3xl mt-5'>{title}</h3>
					<h4 className='text-1xl mt-2 text-light-gray'>{year}</h4>
				</div>
				<p className='font-bold leading-8'>{overview}</p>	
			</div>	
		</section>
		<section className='md:py-20 py-12'>
			<div className='md:grid md:grid-cols-8 md:gap-2 flex flex-col'>
				<div className='md:col-span-5'>
					<div data-aos='fade-up'>
						<ImageTemp data={sketches[0]} />
					</div>	
					<p className='font-bold leading-8 md:w-2/3'>{sketches[0].fields.description}</p>	
				</div>
				<div className='lg:col-span-2 md:col-span-3 md:self-center flex justify-center md:block' data-aos='fade-up'>
					{sketchDrawings.map((item, idx) => {
						return (
							<div key={idx} className='md:w-full w-1/3' data-aos='fade-up'>
								<ImageTemp data={item} />
							</div>
						)
					})}
				</div>	
			</div>	
		</section>
		<section className='md:py-20 py-12'>
			{secAry.map((item, idx) => {
				return (
					<div key={idx} className='mt-16'>
						<Drawing ary={item} aryIdx={idx} />
					</div>
				)	
			})}	
		</section>	
	</main>
	)
}