import React from 'react';
import Link from 'next/link';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsCodeSlash } from 'react-icons/bs';


const SmallTiles = ({icon, description, heading, link}) => {
  return (
    <>
        <div className='flex-row justify-center px-4 py-8 lg:pb-0 space-y-16'>
            <div className='mx-auto mb-8 text-[7rem]'>
            {/* <{icon} /> */}
              
            </div>
            
            <div className='flex justify-between px-4 items-middle'>
              
              <div className='flex-row'>
                <p className='text-neutral-400 uppercase'>{description}</p>
                <h1 className='font-bold text-2xl'>{heading}</h1>
              </div>
              
              <div className='text-4xl md:text-3xl text-neutral-400 hover:text-white hover:translate-x-4 duration-20{0 cursor-pointer'>
                <Link href={link}>
                  <BsFillArrowRightCircleFill />
                </Link>
              </div>
            </div>
            
          </div>
    </>
  )
}

export default SmallTiles