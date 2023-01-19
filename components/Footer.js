import Link from "next/link"
import React from "react"
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"

const Footer = () => {
  return (
    <div className='flex mt-24 pb-8 gap-2 md:gap-4 xl:gap-48 overflow-hidden'>
      <div className='flex-1 space-y-4 relative'>
        <h2 className='text-xl md:text-3xl xl:text-4xl font-extrabold'>
          SPACE.
        </h2>
        <div className='flex gap-4'>
          <a
            href='https://github.com/NotSugat'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillGithub className='text-sm md:text-xl ' />
          </a>
          <a href='https://twitter.com/notsugat' target='_blank'>
            <AiOutlineTwitter className='text-sm md:text-xl' />
          </a>
          <a href='' target='_blank' rel='noreferrer'>
            <BsFacebook className='text-sm md:text-xl' />
          </a>
        </div>
        <p className='text-xs md:text-sm text-gray-400 absolute bottom-0'>
          All Right Reserved &copy; 2023
        </p>
      </div>

      {/* Marketplace */}
      <div className='hidden md:block space-y-2 md:space-y-4 '>
        <h2 className='text-sm md:text-lg font-semibold'>MARKETPLACE</h2>
        <ul className='space-y-2'>
          <li>
            <Link href='#' className='links'>
              About us
            </Link>
          </li>
          <li>
            <Link href='#' className='links'>
              Our Team
            </Link>
          </li>
          <li>
            <Link href='#' className='links'>
              Team Details
            </Link>
          </li>
          <li>
            <Link href='#' className='links'>
              Cart Page
            </Link>
          </li>
        </ul>
      </div>

      {/* Company */}
      {/* Marketplace */}
      <div className='space-y-2 md:space-y-4'>
        <h2 className='text-sm md:text-lg font-semibold'>COMPANY</h2>
        <ul className='space-y-2'>
          <li>
            <Link href='#' className='links'>
              Wallet
            </Link>
          </li>
          <li>
            <Link href='#' className='links'>
              Create page
            </Link>
          </li>
          <li>
            <Link href='#' className='links'>
              Login page
            </Link>
          </li>
          <li>
            <Link href='#' className='links'>
              Registration
            </Link>
          </li>
        </ul>
      </div>

      {/* SERVICES */}
      {/* Marketplace */}
      <div className='space-y-2 md:space-y-4'>
        <h2 className='text-sm md:text-lg font-semibold'>SERVICES</h2>
        <ul className='space-y-2'>
          <li>
            <Link href='#' className='links'>
              Contact us
            </Link>
          </li>
          <li>
            <Link href='#' className='links'>
              Shop Page
            </Link>
          </li>
          <li>
            <Link href='#' className='links'>
              Shop details
            </Link>
          </li>
          <li>
            <Link href='#' className='links'>
              Collectors
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
