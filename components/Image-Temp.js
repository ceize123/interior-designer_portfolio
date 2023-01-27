import Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ImageTemp({ data }) {
	useEffect(() => {
		AOS.init({
			offset: 150,
			duration : 1000
		});
	}, []);
	return (
		<Image
			src={`https:${data.fields.file.url}`}
			width='0'
			height='0'
			sizes='100vw'
			className='w-full h-auto'
			alt={data.fields.title}
			data-aos='fade-up'
		/>
	)

}