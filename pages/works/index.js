import { createClient } from 'contentful'

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
		<main>
			<section>
				123
			</section>
		</main>
	</>
	)
}