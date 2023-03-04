/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import rabbit from '../public/rabbit.png'
import Link from 'next/link'
import PersonalInfo from '../components/Personal-Info'
import bgUrl from '../assets/images/bg.png'
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [scaleRate, setScaleRate] = useState(1)
  const [opacityRate, setOpacityRate] = useState(1)
  const [reached, setReached] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const scroll = () => {
      console.log(window.scrollY)
      const aboutSecTop = ref.current.getBoundingClientRect()['top']
      const height = ref.current.getBoundingClientRect()['height']
      if (aboutSecTop < 0) {
        setReached(true)
        setOpacityRate((height + aboutSecTop) / height)
      } else setReached(false)

      setScaleRate(window.scrollY / 1200 + 1)
    }
    window.addEventListener('scroll', scroll)
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [])
  return (
    <>
      <div className='w-full sticky top-14'>
        <div className='pixel w-full h-screen fixed top-14 left-0 flex flex-wrap z-10'>
          {[...Array(100).keys()].map((i) => {
            return (
              <div
                key={i}
                className={`w-[10%] transition 
				${reached ? 'bg-light-gray/50 backdrop-blur-xl' : 'opacity-0'}`}
              >
                {/* {i} */}
              </div>
            )
          })}
        </div>
        <div className='absolute w-full'>
          <Image
            src={bgUrl}
            width='0'
            height='0'
            sizes='100vw'
            alt='background'
            className='w-full h-auto'
            style={{
              transform: `scale(${scaleRate})`,
              //   opacity: `${reached ? opacityRate : '1'}`,
            }}
          />
        </div>
      </div>
      <section className='hero-section h-screen relative flex flex-col justify-center -mt-14 z-20'>
        <div>
          <h1 className='xl:text-8xl lg:text-7xl sm:text-4xl text-3xl inline sm:ml-20 ml-4 tracking-wider'>
            INTERIOR.FURNITURE
          </h1>
          {scaleRate}
        </div>
        <div className='mt-14'>
          <div className='text-center'>
            <button className='relative after:bg-yellow'>
              <Link href='/works'>My WORK</Link>
            </button>
            <div className='absolute bottom-8 left-0 right-0 mx-auto w-4 leading-3 bg-yellow'>
              <Link
                href='/#intro-section'
                className='flex flex-col items-center'
                scroll={false}
              >
                <span>•</span>
                <span>•</span>
                <span>•</span>
              </Link>
            </div>
          </div>
          <div className='absolute right-2 bottom-14 md:w-1/3 sm:w-1/2 w-2/3'>
            <span className='block text-sm'>
              Effectively bring artistically and business professional solutions
              to clients.
            </span>
            <span className='block text-sm'>
              Worked on individual projects and as well as collaborated with
              others as a team
            </span>
          </div>
        </div>
      </section>
      <main className='relative z-10'>
        <section
          ref={ref}
          className='md:text-5xl sm:text-3xl text-2xl md:mx-16 mx-5 leading-normal h-screen flex items-center'
          id='intro-section'
        >
          <div className='leading-normal'>
            <h3>
              I focus on using effectively optimize the space to improving
              people's everyday lives in all aspects.
            </h3>
            <h3>
              Use the power of interior design to evokes happiness and soothes
              the soul that help people live better.
            </h3>
          </div>
        </section>
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
                      Sourced many products such as lighting, furniture, and
                      fabrics for many different budgets and sciences
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
      </main>
    </>
  )
}
