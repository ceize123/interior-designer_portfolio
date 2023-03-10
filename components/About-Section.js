import Image from 'next/image'
import rabbit from '../public/rabbit.png'
import PersonalInfo from './Personal-Info'

export default function AboutSection() {
  return (
    <section className='pt-20 pb-12 about-section' id='about-section'>
      <div className='flex flex-col items-center'>
        <Image src={rabbit} width={100} height={100} alt='rabbit' />
        <div className='flex mt-12 sm:flex-row flex-col'>
          <PersonalInfo type='Phone' />
          <PersonalInfo type='Email' />
          <PersonalInfo type='Location' />
        </div>
      </div>
      <div className='mt-12'>
        <div className='flex sm:justify-between pb-12 sm:flex-row flex-col md:mx-16 mx-10'>
          <div className='mb-5 sm:mb-0'>
            <h2 className='text-yellow md:text-6xl text-4xl'>EDU.</h2>
            <div>
              <div className='my-5'>
                <h4>INTERIOR DECORATING</h4>
                <ul>
                  <li>HUMBER COLLEGE</li>
                  <li>EXPECTED 2023</li>
                </ul>
              </div>
              <div>
                <h4>GRAPHIC COMMUNICATIONS</h4>
                <ul>
                  <li>SHIH_HSUIN UNIVERSITY</li>
                  <li>2014-2018</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='mb-5 sm:mb-0'>
            <h2 className='text-yellow md:text-6xl text-4xl'>SKILLS</h2>
            <ul className='list-disc mt-5'>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Auto Cad</li>
              <li>Sketchup</li>
            </ul>
          </div>
          <div>
            <h2 className='text-yellow md:text-6xl text-4xl'>LANG.</h2>
            <ul className='list-disc mt-5'>
              <li>English</li>
              <li>Mandarin</li>
            </ul>
          </div>
        </div>
        <div className='md:pt-12 pt-5 md:mx-16 ml-10 mr-5'>
          <h2 className='text-yellow md:text-6xl text-4xl'>EXPERIENCE</h2>
          <div className='flex flex-col sm:flex-row'>
            <div className='mr-12'>
              <div className='my-5'>
                <h4>SET DECORATOR ASSISTANT</h4>
                <h4>Freelance, Taiwan 2015-2019</h4>
              </div>
              <ul className='list-disc'>
                <li>
                  Designed and decorated sets and set elements for
                  advertising,music video and film
                </li>
                <li>
                  Created Sketchup models and 3D realistic renderings for
                  clients to be able to visualize the space
                </li>
                <li>
                  Sourced many products such as lighting, furniture, and fabrics
                  for many different budgets and sciences
                </li>
              </ul>
            </div>
            <div className='mr-12'>
              <div className='my-5'>
                <h4>DISPLAY DESIGNER</h4>
                <h4>Penshugen, Taiwan 2019-2021</h4>
              </div>
              <ul className='list-disc'>
                <li>
                  Worked extensively with clients and vendors throughout the
                  design process
                </li>
                <li>Created display sets using minor carpentry skills</li>
                <li>
                  Contributed CAD drawings of each set and drafted detailed
                  dimensional drawings for a scene shop to build from
                </li>
                <li>
                  Created necessary design, documentation, and management of
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
