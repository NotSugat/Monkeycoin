import React from "react"
import { AiOutlineSecurityScan } from "react-icons/ai"
import { MdPayment, MdOutlineVerifiedUser } from "react-icons/md"

const StatsSection = () => {
  return (
    <div className='my-24 md:mt-48'>
      <div className='flex justify-evenly  bg-[#B6B6C6] p-10 gap-x-4  bg-opacity-20 items-center rounded-t-[24px] '>
        <div>
          <h1 className='text-2xl md:text-4xl lg:text-5xl font-extrabold '>
            1.5K+
          </h1>
          <p className='text-[clamp(1.125rem_,_2vh_,_2rem)] '>Collection</p>
        </div>
        <div>
          <h1 className='text-2xl md:text-4xl lg:text-5xl font-extrabold'>
            105K+
          </h1>
          <p className='text-[clamp(1.125rem_,_2vh_,_2rem)] '>Artworks</p>
        </div>
        <div>
          <h1 className='text-2xl md:text-4xl lg:text-5xl font-extrabold'>
            3.5K+
          </h1>
          <p className='text-[clamp(1.125rem_,_2vh_,_2rem)] '>Artist</p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3  gap-2 mt-2'>
        <div className='bg-[#B6B6C6] p-10 space-y-4 md:rounded-bl-[24px] bg-opacity-20 '>
          <AiOutlineSecurityScan className='fill-green-300 text-4xl' />
          <h1 className='text-2xl font-bold mt-4'>STRONG SECURITY</h1>
          <p className='text-[clamp(1.125rem_,_2vh_,_2rem)]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quam
            quisquam illo.
          </p>
        </div>
        <div className='bg-[#B6B6C6] p-10 space-y-4  bg-opacity-20'>
          <MdPayment className='fill-purple-800 text-4xl' />
          <h1 className='text-2xl font-bold mt-4'>STRONG SECURITY</h1>
          <p className='text-[clamp(1.125rem_,_2vh_,_2rem)]' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quam
            quisquam illo.
          </p>
        </div>
        <div className='bg-[#B6B6C6] p-10 space-y-4  bg-opacity-20 rounded-b-[24px] md:rounded-br-[24px] md:rounded-bl-none'>
          <MdOutlineVerifiedUser className='fill-pink-300 text-4xl' />
          <h1 className='text-2xl font-bold mt-4 '>STRONG SECURITY</h1>
          <p className='text-[clamp(1.125rem_,_2vh_,_2rem)]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quam
            quisquam illo.
          </p>
        </div>
      </div>
    </div>
  )
}

export default StatsSection
