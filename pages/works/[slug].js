import { createClient } from 'contentful'
import Image from 'next/image'
import Skeleton from '../../components/Skeleton'

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
	if (!work) return <Skeleton />

	const { title, thumbnail } = work.fields
	console.log(work)
	return (
	<main className='mt-20'>
		<p>{title}</p>
		<Image
			src={`https:${thumbnail.fields.file.url}`}
			width={thumbnail.fields.file.details.image.width}	
			height={thumbnail.fields.file.details.image.height}
			alt={thumbnail.fields.title}
		/>
	</main>
	)
}