/* eslint-disable react/no-unescaped-entities */

// https://stackoverflow.com/questions/71397201/access-child-components-ref-inside-parent-component-in-functional-component
export default function QuoteSection({ innerRef }) {
  return (
    <section
      ref={innerRef}
      className='md:text-5xl sm:text-3xl text-2xl md:mx-16 mx-5 leading-normal h-screen flex items-center'
      id='intro-section'
    >
      <div className='leading-normal'>
        <h3>
          I focus on using effectively optimize the space to improving people's
          everyday lives in all aspects.
        </h3>
        <h3>
          Use the power of interior design to evokes happiness and soothes the
          soul that help people live better.
        </h3>
      </div>
    </section>
  )
}
