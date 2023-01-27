import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export default function Drawing({ ary, aryIdx }) {
	useEffect(() => {
		AOS.init({
			offset: 150,
			duration : 1000
		});
	}, []);
	return (
		ary.map((item, idx) => {
			return (
				<div key={item.sys.id} className='md:grid md:grid-cols-8 items-center md:gap-4 flex flex-col'>
					{idx % 2 === 0 ?
						<div className={`col-span-4 ${aryIdx % 2 !== 0 ? 'md:order-last md:ml-3': ''}`}>
							<h2 className='lg:text-5xl text-3xl leading-snug'>{item.fields.description}</h2>
						</div>
						: <div className={`col-span-3 ${aryIdx % 2 === 0 ? 'md:order-last': ''}`}>
							<p className='font-bold leading-10 md:text-lg text-sm '>{item.fields.description}</p>
						</div>
					}
					<div className={`
							${idx % 2 === 0 ? 'col-span-4' : 'col-span-5'}`
					}>
						<Image
							src={`https:${item.fields.file.url}`}
							width='0'
							height='0'
							sizes='100vw'
							className='w-full h-auto'
							alt={item.fields.title}
							data-aos='fade-up'
						/>
					</div>
				</div>
			)
		})
	)
}