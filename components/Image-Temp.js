import Image from 'next/image'

export default function ImageTemp({ data }) {
	return (
		<Image
			src={`https:${data.fields.file.url}`}
			width='0'
			height='0'
			sizes='100vw'
			className='w-full h-auto'
			alt={data.fields.title}
		/>
	)

}