import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Credent = ({img, description, header, link}) => {
  return (
    <>
      <div className='flex-row items-end px-4 md:py-2 py-8 lg:py-12 space-y-20'>
            <div className='mb-8'>
              <Image className='mt-2 rounded-tl-3xl rounded-br-3xl' src={img} width={400} height={300} alt='No image found' />
            </div>
            
            <div className='flex justify-between px-4 items-middle'>
              
              <div className='flex-row items-stretch'>
                <p className='text-neutral-400 uppercase'>{description}</p>
                <h1 className='font-bold text-2xl'>{header}</h1>
              </div>
              
              <div className='text-4xl md:text-3xl text-neutral-400 hover:text-white hover:translate-x-4 duration-200 cursor-pointer'>
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