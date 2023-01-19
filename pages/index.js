import Image from 'next/image'
import rabbit from '../public/rabbit.png'

export default function Home() {
	return (
	<>
		<section className='hero-section h-screen relative flex flex-col justify-center'>
			<div>
				<h1 className='text-8xl bg-pink inline pr-5 ml-20'>INTERIOR.FURNITURE</h1>
			</div>
			<div className='mt-14'>
				<div className='text-center'>
					<button className='relative'>My WORK</button>
				</div>	
				<div className='absolute right-2 bottom-14 w-1/3'>	
					<span className='block text-sm'>Effectively bring artistically and business professional solutions to clients.</span>	
					<span className='block text-sm'>Worked on individual projects and as well as collaborated with others as a team</span>	
				</div>	
			</div>	
		</section>
		<main>
			<section className='text-5xl mx-16 leading-normal h-screen'>
				<h4>
					I focus on using effectively optimize the space to improving people's everyday lives in all aspects.
				</h4>
				<h4>
					Use the power of interior design to evokes happiness and soothes the soul that help people live better.	
				</h4>
			</section>	
			<section className='my-10'>
				<div className='flex flex-col items-center'>
					<Image src={rabbit}
							width={100}
							height={100}
							alt='rabbit' />
					<div className='flex mt-12'>
						<p className='mx-5'>(437) 97101353</p>
						<p className='mx-5'>ann1212123@gmail.com</p>
						<p className='mx-5'>Toronto,ON</p>
					</div>
				</div>
				<div className='mx-16 mt-12'>
					<div className='flex justify-between pb-12'>
						<div>
							<h2 className='text-yellow text-6xl'>EDU.</h2>
							<div>
								<div>
									<h4 className='font-bold'>INTERIOR DECORATING</h4>
									<p>HUMBER COLLEGE</p>
									<p>EXPECTED 2023</p>
								</div>	
								<div>
									<h4 className='font-bold'>GRAPHIC COMMUNICATIONS</h4>
									<p>SHIH_HSUIN UNIVERSITY</p>
									<p>2014-2018</p>
								</div>	
							</div>
						</div>
						<div>
							<h2 className='text-yellow text-6xl'>SKILLS</h2>
							<ul>
								<li>Adobe Illustrator</li>
								<li>Adobe Photoshop</li>
								<li>Auto Cad</li>
								<li>Sketchup</li>
							</ul>	
						</div>
						<div>
							<h2 className='text-yellow text-6xl'>LANG.</h2>
							<ul>
								<li>English</li>
								<li>Mandarin</li>
							</ul>		
						</div>
					</div>	
					<div className='pt-12'>
						<h2 className='text-yellow text-6xl'>EXPERIENCE</h2>
						<div className='flex'>
							<div className='mr-12'>
								<div className='my-5'>
									<h4 className='font-bold'>SET DECORATOR ASSISTANT</h4>	
									<p className='font-bold'>Freelance, Taiwan 2015-2019</p>	
								</div>	
								<ul className='list-disc'>
									<li>Designed and decorated sets and set elements for advertising,music video and film</li>
									<li>Created Sketchup models and 3D realistic renderings for clients to be able to visualize the space</li>
									<li>Sourced many products such as lighting, furniture, and fabrics for many different budgets and sciences</li>
								</ul>	
							</div>
							<div className='mr-12'>
								<div className='my-5'>
									<h4 className='font-bold'>DISPLAY DESIGNER</h4>	
									<p className='font-bold'>Penshugen, Taiwan   2019-2021</p>	
								</div>	
								<ul className='list-disc'>
									<li>Worked extensively with clients and vendors throughout the design process</li>
									<li>Created display sets using minor carpentry skills</li>
									<li>Contributed CAD drawings of each set and drafted detailed dimensional drawings for a scene shop to build from</li>
									<li>Created necessary design, documentation, and management of</li>
								</ul>	
							</div>
						</div>	
					</div>
				</div>
			</section>
		</main>
		<footer className='bg-black text-center py-12'>
			<p>All work © Jhiih-Yuan (Ann) Tseng 2022.  Please do not distribute images without permission.</p>
		</footer>
	</>
	)
}