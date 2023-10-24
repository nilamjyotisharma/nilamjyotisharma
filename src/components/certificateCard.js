import React from 'react'
import Image from 'next/image';
import {BiLinkExternal} from 'react-icons/bi'
import Link from 'next/link';

const CertificateCard = (props) => {
  return (
    <>
        <div className='flex-col justify-center my-16 md:m-12 w-[18rem] md:w-[26rem]'>
            
                <div className='p-2 z-10'>
                    <Image className='rounded-xl w-full h-full hover:scale-105 cursor-pointer hover:-translate-y-16 duration-200' src={props.img} width={400} height={500} alt='No image found' />
                </div>

                <div className='dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white -mt-12 w-[18rem] md:w-[26rem] absolute p-4 shadow-2xl rounded-xl'>
                <div className='px-4'>
                    <h1 className='font-bold text-sm'>{props.header}</h1>
                    <p className='uppercase dark:text-neutral-400 text-neutral-600 text-xs h-4 my-2'>{props.desc}</p>
                </div>
                <div className='flex justify-between py-4 px-6'>
                    <p className='text-xs'>Issued by {props.org}</p>
                    <Link href={props.link} target='blank'>
                        <p className='text-sm flex cursor-pointer'>Watch<BiLinkExternal className='text-xl ml-1' /></p>
                    </Link>
                </div>
                </div>
                
            
            
            
        </div>

        
    </>
  )
}

export default CertificateCard