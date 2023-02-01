import { createClient } from 'contentful'
import Card from '../../components/Card'
import Skeleton from '../../components/Skeleton'

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID, // id
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	})

	const res = await client.getEntries({content_type: 'annWorks'})

	return {
		props: {
			works: res.items
		},
		revalidate: 10
	}
}

export default function Works({ works }) {
	if (!works) return <Skeleton />
	return (
	<>
		<main>
			<section className='work-section py-10'>
				<div className='grid md:grid-cols-3 sm:grid-cols-2 gap-10 sm:mx-12 mx-8'>
					{works.map((work, idx) => {
						return (
							<div key={work.sys.id}>
								<Card work={work.fields} num={idx} />
							</div>
						)
					})}
				</div>	
			</section>	
		</main>
	</>
	)
}