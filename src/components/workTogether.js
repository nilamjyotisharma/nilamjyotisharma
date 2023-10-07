import React from 'react';
import Link from 'next/link';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';


const WorkTogether = ({link}) => {
  return (
    <>
      <div className='flex-row justify-start px-14 py-12 items-end'>
              
              <div className='flex-row'>
                
                <h1 className='font-extrabold text-3xl lg:text-5xl'>Lets <br /><span className='text-gray-600'>Work Together</span></h1>
              </div>
              
              <div className='flex md:justify-end justify-center text-4xl md:text-3xl mt-8 text-neutral-400 hover:text-white hover:scale-110 duration-200 cursor-pointer'>
                <Link href={link}>
                  <BsFillArrowRightCircleFill />
                </Link>
              </div>
            </div>

    </>
  )
}

export default WorkTogether