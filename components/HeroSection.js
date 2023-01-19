import Image from "next/image"
import React from "react"
import logo from "../public/images/EthLogo.png"

const HeroSection = () => {
  return (
    <div className='grid md:grid-cols-2 py-4 md:mt-24 xl:mt-28'>
      <div className='flex flex-col gap-4 p-8 justify-center'>
        <div className='flex flex-col gap-2  font-extrabold text-2xl md:text-4xl  xl:text-5xl'>
          <span>DISCOVER </span>
          <span>COLLECT SELL </span>
          <span>DIGITAL NFT.</span>
        </div>
        <p className='text-gray-400 text-sm md:text-xl lg:text-2xl'>
          Generate 10,000+ Nft collection Only by uploading the laters, and get
          ready to sell your collection
        </p>
        <div className='space-x-2 md:space-x-6'>
          <button className='btn '>Get Started</button>
          <button className='border-2 border-white  px-3 py-2 md:p-4 rounded-full hover:border-blue-400 transition-all duration-300'>
            Join Discord
          </button>
        </div>
      </div>
      <div className=' flex justify-center items-center '>
        {/* <div className='bg-gray-400 rounded-full absolute bottom-0  md:h-52 md:w-52 lg:h-[400px] lg:w-[400px] '></div> */}
        <div
          className='mt-12 md:mt-0 bg-cyan-200 py-6 px-12 rounded-full bg-opacity-20 backdrop-filter backdrop-blur-lg'
          style={{
            boxShadow: "-5rem 0 20rem #046",
          }}
        >
          <img
            className=' h-[280px] xl:h-[400px] object-cover '
            src='images/EthLogo.png'
            alt='Eth logo'
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
