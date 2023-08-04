import React from "react"
import { FiMoon } from "react-icons/fi"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-2'>
      <div className='text-2xl font-extrabold text-grad'>SPACE</div>
      <ul className=' gap-4 font-semibold text-sm hidden lg:flex md:text-lg lg:text-xl'>
        <li>
          <a href='#'>HOME</a>
        </li>
        <li>
          <a href='#'>MARKETPLACE</a>
        </li>
        <li>
          <a href='#'>BLOG</a>
        </li>
        <li>
          <a href='#'>ROAD MAP</a>
        </li>
      </ul>

      <button className='bg-blue-400 p-2 px-4 mt-2 md:p-4 md:text-base text-sm rounded-full hover:bg-blue-600 transition-all duration-300 md:mt-1'>
        Connect Wallet
      </button>
    </div>
  )
}

export default Navbar
