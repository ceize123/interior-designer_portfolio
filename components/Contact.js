import PersonalInfo from "./Personal-Info"

export default function Contact() {
	return (
		<section className='bg-yellow text-black contact-section flex justify-center'>
			<div className="w-full sm:py-10 py-6 px-10 flex justify-between items-center sm:flex-row flex-col max-w-7xl">
				<h1 className='md:text-6xl text-4xl mb-3 sm:mb-0'>Contact Me</h1>
				<div className="lg:mr-20 md:mr-12 sm:mr-5 mr-0">
					<PersonalInfo type='Phone' />
					<PersonalInfo type='Email' />
				</div>
			</div>
		</section>
	)
}