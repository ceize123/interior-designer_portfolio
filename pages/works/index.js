import { createClient } from 'contentful'
import Card from '../../components/Card'

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID, // id
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	})

	const res = await client.getEntries({content_type: 'annWorks'})

	return {
		props: {
			works: res.items
		}
	}
}

export default function Works({ works }) {
	console.log(works)
	return (
	<>
		<main className='mt-20'>
			<section className='work-section'>
				<div className='grid md:grid-cols-3 sm:grid-cols-2 gap-8 sm:mx-4 mx-8'>
					{works.map((work) => {
						return (
							<div key={work.sys.id}>
								<Card work={work.fields} />
							</div>
						)
					})}
				</div>	
			</section>
		</main>
	</>
	)
}