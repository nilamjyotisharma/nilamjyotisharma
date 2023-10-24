import { getImgProps } from 'next/dist/shared/lib/get-img-props'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Cards = (props) => {
  return (
    <>
        <div className='flex-row items-end px-4 py-8 lg:py-8 space-y-16'>
        <div className='flex justify-center text-[7rem] mt-1 rounded-tl-3xl rounded-br-3xl'>
        <div dangerouslySetInnerHTML={{ __html: props.img1 }} />
        <div dangerouslySetInnerHTML={{ __html: props.img2 }} />
          
        </div>
        
        <div className='flex justify-between px-4 items-middle'>
          
          <div className='flex-row'>
            <p className='text-neutral-500 dark:text-neutral-400 uppercase'>{props.desc}</p>
            <h1 className='font-bold text-2xl'>{props.title}</h1>
          </div>
          
          <div className='text-4xl md:text-4xl text-white hover:scale-105 drop-shadow-xl dark:text-neutral-400 hover:text-white hover:translate-x-4 duration-200 cursor-pointer'>
            <Link href={props.link}>
              <BsFillArrowRightCircleFill />
            </Link>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Cards

