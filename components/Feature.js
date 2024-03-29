import React from "react"
import {
  AiFillEuroCircle,
  AiFillAlipayCircle,
  AiFillCodeSandboxCircle,
} from "react-icons/ai"

const Feature = () => {
  return (
    <div>
      <h2 className='text-center text-xl text-cyan-400 font-semibold  '>
        KEY FEATURES
      </h2>
      <h2 className='text-center text-4xl font-semibold '>ACCESS THE FUTURE</h2>

      {/* parent grid div */}
      <div className='my-8 grid grid-cols-1 gap-4 md:grid-cols-3'>
        {/* Metaverse section */}
        <div className='bg-black bg-opacity-30 p-8 rounded-2xl space-y-4 hover:cursor-pointer'>
          <AiFillAlipayCircle className='text-[70px]  fill-pink-600 ' />
          <h2 className='text-[clamp(1.125rem_,_2vh_,_2rem)]  font-semibold hover:cursor-pointer '>
            FUELING THE METAVERSE
          </h2>
          <p className='text-[clamp(1.125rem_,_2vh_,_2rem)] text-gray-400'>
            The Metaverse Is The Next Generation Of The Internet. As One Of Its
            Earliest Explorers, You Will Help Fuel Its Expansion.
          </p>
        </div>

        {/* OFFERING section */}

        <div className='bg-black bg-opacity-30 p-8  rounded-2xl space-y-4 hover:cursor-pointer'>
          <AiFillCodeSandboxCircle className='text-[70px]  fill-cyan-500 ' />
          <h2 className='text-[clamp(1.2rem_,_2vh_,_2.5rem)] font-semibold '>
            INITIAL METAVERSE OFFERING
          </h2>
          <p className='text-[clamp(1.125rem_,_2vh_,_2rem)] text-gray-400'>
            The Metaverse Is The Next Generation Of The Internet. As One Of Its
            Earliest Explorers, You Will Help Fuel Its Expansion.
          </p>
        </div>

        {/* incubation section */}

        <div className='bg-black bg-opacity-30 p-8 rounded-2xl space-y-4 hover:cursor-pointer'>
          <AiFillEuroCircle className='text-[70px] fill-purple-500' />
          <h2 className='text-[clamp(1.2rem_,_2vh_,_2.5rem)] font-semibold '>INCUBATION</h2>
          <p className='text-[clamp(1.125rem_,_2vh_,_2rem)] text-gray-400'>
            The Metaverse Is The Next Generation Of The Internet. As One Of Its
            Earliest Explorers, You Will Help Fuel Its Expansion.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Feature
