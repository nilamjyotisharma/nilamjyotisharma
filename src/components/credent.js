import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Credent = ({img1, img2, description, header, link}) => {
  return (
    <>
      <div className='flex-row items-end px-4 md:py-0 py-8 lg:py-12 space-y-20'>
            <div className=''>
              <Image className='dark:flex hidden rounded-tl-3xl rounded-br-3xl' src={img1} width={400} height={300} alt='No image found' />
              <Image className='dark:hidden flex rounded-tl-3xl rounded-br-3xl' src={img2} width={400} height={300} alt='No image found' />
            </div>
            
            <div className='flex justify-between px-4 items-middle'>
              
              <div className='flex-row items-stretch'>
                <p className='text-neutral-500 dark:text-neutral-400 uppercase'>{description}</p>
                <h1 className='font-bold text-2xl'>{header}</h1>
              </div>
              
              <div className='text-4xl md:text-4xl text-white hover:scale-105 drop-shadow-xl dark:text-neutral-400 hover:text-white hover:translate-x-4 duration-200 cursor-pointer'>
                <Link href={link}>
                  <BsFillArrowRightCircleFill />
                </Link>
              </div>
            </div>
            </div>
    </>
  )
}

export default Credent