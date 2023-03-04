import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import bgUrl from '../assets/images/bg.png'
import HeroSection from '../components/Hero-Section'
import QuoteSection from '../components/Quote-Section'
import AboutSection from '../components/About-Section'

export default function Home() {
  const [scaleRate, setScaleRate] = useState(1)
  const [reached, setReached] = useState(false)
  const ref = useRef(null)
  const ary = Array(50)
    .fill(null)
    .map((_, i) => i)
  const [randomDark, setRandomDark] = useState(ary)
  const [randomLight, setRandomLight] = useState(ary)

  useEffect(() => {
    const scroll = () => {
      const aboutSecTop = ref.current.getBoundingClientRect()['top']
      if (aboutSecTop < 0) {
        setReached(true)
        if (aboutSecTop % 10 === 0) {
          setRandomDark(ary.sort(() => 0.5 - Math.random()).slice(0, 20))
          setRandomLight(ary.sort(() => 0.5 - Math.random()).slice(0, 10))
        }
      } else setReached(false)

      setScaleRate(window.scrollY / 1200 + 1)
    }
    window.addEventListener('scroll', scroll)
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [ary])
  return (
    <>
      <div className='w-full sticky top-14'>
        <div className='pixel w-full h-screen fixed top-14 left-0 flex flex-wrap z-10'>
          {ary.map((i) => {
            return (
              <div
                key={i}
                className={`w-[10%] transition 
				        ${reached ? 'backdrop-blur-md' : 'opacity-0'}`}
                style={{
                  backgroundColor: `${
                    randomDark.includes(i)
                      ? 'rgba(0, 0, 0, 0.5)'
                      : randomLight.includes(i)
                      ? 'rgba(85, 85, 85, 0.5)'
                      : 'rgba(34, 34, 34, 0.5)'
                  }`,
                }}
              ></div>
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
            }}
          />
        </div>
      </div>
      <HeroSection />
      <main className='relative z-10'>
        <QuoteSection innerRef={ref} />
        <AboutSection />
      </main>
    </>
  )
}
