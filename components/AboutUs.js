import React from "react"

const AboutUs = () => {
  return (
    <div className='grid md:grid-cols-2 my-24 gap-16 md:gap-8 items-center'>
      <div>
        <img
          className='rounded-2xl xl:h-[380px]'
          src='images/aboutusHero.jpg'
          alt='About us image'
        />
      </div>
      <div className='space-y-3 md:space-y-2 xl:space-y-5 '>
        <div className='flex flex-col gap-1 '>
          <h1 className='font-semibold text-xl text-cyan-400'>ABOUT US</h1>
          <span className=' text-3xl font-semibold md:text-2xl xl:text-4xl'>
            DISCOVER MORE
          </span>
          <span className='text-3xl font-semibold md:text-2xl xl:text-4xl'>
            COLLECT AND SELL
          </span>
          <span className=' text-3xl font-semibold md:text-2xl xl:text-4xl'>
            RARE NFTS
          </span>
        </div>
        <p className='text-sm text-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          repellendus quisquam, ea adipisci magnam sapiente labore veritatis
          facilis.
        </p>
        <div className='flex flex-wrap gap-2'>
          <div className='keyword '>Wide range of platforms</div>
          <div className='keyword '>World class artists</div>
          <div className='keyword '>Any type of assets</div>
          <div className='keyword '>Fast Payments</div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
