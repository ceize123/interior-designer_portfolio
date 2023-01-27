import ImageTemp from './Image-Temp'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Drawing({ ary, aryIdx }) {
	useEffect(() => {
		setTimeout(() => {
			AOS.init({
				offset: 150,
				duration : 1000
			})
		}, 1500)
	}, [ary])
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
					<div className={`${idx % 2 === 0 ? 'col-span-4' : 'col-span-5'}`} data-aos='fade-up'>
						<ImageTemp data={item} />
					</div>
				</div>
			)
		})
	)
}