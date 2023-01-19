import Image from "next/image"
import React from "react"

const Contact = () => {
  return (
    <div className='relative justify-center  '>
      <img
        className='w-[100%] h-[200px] md:h-[250px] xl:h-[300px] object-cover overflow-hidden rounded-lg'
        src='images/Virtual.svg'
        alt=''
      />
      <div className='absolute top-[20%] xl:top-[30%] left-4 md:left-12  space-y-4 '>
        <h2 className='text-xl xl:text-4xl md:text-3xl font-semibold'>
          JOIN US NOW
        </h2>
        <p className='text-xs md:text-sm'>
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Quo,
          ea.
        </p>
        <button className='text-xs md:text-sm border-2 border-white  px-4 py-2 rounded-full hover:border-blue-400 transition-all duration-300'>
          Join Us
        </button>
      </div>
    </div>
  )
}

export default Contact
