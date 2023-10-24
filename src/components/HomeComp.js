import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
// import { FaLaptopCode } from 'react-icons/fa';
import { PiCertificateLight } from 'react-icons/pi';
import { FcIdeas } from 'react-icons/fc';
import { BsCodeSlash } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';
import Credent from '../components/credent';
import WorkTogether from '../components/workTogether';
import SmallTiles from '../components/smallTiles';
import TypeAnimate from '@/components/typeAnimate';
import Cards from '@/components/cards';
import ServiceCards from './serviceCard';

const HomeComp = () => {
  return (
    <>
        <div className='mx-4 md:mx-24 lg:mx-36 mt-24 overflow-hidden'>

<div className=''>
  <div className='grid grid-flow-row lg:grid-cols-4 md:grid-cols-2 gap-4'>
   <div className='md:col-span-2 lg:col-span-2 lg:row-span-3 rounded-3xl shadow-xl dark:border-neutral-900 bg-white/50 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212]  duration-200 hover:scale-95 flex justify-center items-center'>

    <div className='p-4 md:px-8 flex-row justify-center'>
      <div className='flex-row space-y-8 justify-center md:flex md:space-x-6 md:space-y-0 items-center'>
        <div>
          <Image className='rounded-3xl md:rounded-tl-3xl md:rounded-br-3xl md:rounded-none' src='/profile.png' width={400} height={500} alt='No image found' />
        </div>

        <div className='flex-row space-y-3'>
          <p className='text-neutral-600 dark:text-neutral-400 uppercase'>A Web Developer</p>
          <h1 className='font-bold text-3xl md:text-4xl'>Nilam Jyoti Sharma</h1>
          <p className='text-neutral-600 dark:text-neutral-400 text-lg'>Crafting digital experiences one line of code at a time</p>
        </div>
      </div>
      <div className='flex mx-4 md:justify-end justify-center text-4xl md:text-4xl mt-8 drop-shadow-xl text-white dark:text-neutral-400 hover:text-white hover:scale-110 duration-200 cursor-pointer'>
        <Link href='/about'>
          <BsFillArrowRightCircleFill />
        </Link>
      </div>

    </div>

   </div>

   <div className='md:col-span-2 lg:col-span-2 lg:row-span-1 rounded-3xl dark:border-2 dark:border-neutral-900 bg-white/50 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212]'>
   <div className='flex justify-center py-2'>
      <TypeAnimate />
   </div>
      
   </div>
   <div className='md:col-span-1 rounded-3xl dark:border-2 lg:row-span-2 dark:border-neutral-900 bg-white/50 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] duration-200 hover:scale-95'>

      <Credent img1='/sign.png' img2='/sign_light.png' description='More About Me' header='Credentials' link='/credentials' />
   </div>
   <div className='md:col-span-1 rounded-3xl dark:border-2 lg:row-span-2 shadow-xl dark:border-neutral-900 bg-white/50 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] duration-200 hover:scale-95'>

    
      <Cards img1='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="w-32 h-32">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
</svg>' img2='' desc = 'showcase' title='Projects' link='/works'/>

   </div>
  </div>
</div>

 <div>
    <div className="grid grid-cols-1 gap-4 my-4 md:grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4">
      <div className="md:col-span-1 lg:col-span-1 rounded-3xl dark:border-2  dark:border-neutral-900 bg-white/50  dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] duration-200 hover:scale-95">

      

      <Cards img1='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-32 h-32">
  <path fill-rule="evenodd" d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z" clip-rule="evenodd" />
</svg>' img2='' desc = 'certifications' title='Certificates' link='/certificate'/>

      </div>
      <div className="md:col-span-2 lg:col-span-2 rounded-3xl dark:border-2  dark:border-neutral-900 bg-white/50 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] duration-200 hover:scale-95">


      <ServiceCards img1='<svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M13.5 3a.5.5 0 01.5.5V11H2V3.5a.5.5 0 01.5-.5h11zm-11-1A1.5 1.5 0 001 3.5V12h14V3.5A1.5 1.5 0 0013.5 2h-11zM0 12.5h16a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 12.5z" />
    </svg>' img2='<svg
      viewBox="0 0 20 20"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 01-2-2V8a2 2 0 012-2h6zm-5.75 14H3a2 2 0 01-2-2V2c0-1.1.9-2 2-2h12a2 2 0 012 2v4a2 2 0 012 2v10a2 2 0 01-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 100-2 1 1 0 000 2z" />
    </svg>' desc = 'specialization' title='Services Offering' link='/contact'/>


      </div>
      <div className="md:col-span-1 lg:col-span-1 rounded-3xl dark:border-2 dark:border-neutral-900 bg-white/50 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] duration-200 hover:scale-95">

      

      <ServiceCards img1='<svg
      viewBox="0 0 900 1000"
      fill="currentColor"
      height="1em"
      width="0.6em"
      {...props}
    >
      <path d="M204 152c0 26.667-9.667 49.333-29 68s-44.333 28-75 28c-29.333 0-53.333-9.333-72-28S0 178.667 0 152c0-28 9.333-51 28-69s43.333-27 74-27 55 9 73 27 27.667 41 29 69M6 942V324h192v618H6m306-420c0-57.333-1.333-123.333-4-198h166l10 86h4c40-66.667 103.333-100 190-100 66.667 0 120.333 22.333 161 67s61 111 61 199v366H708V600c0-89.333-32.667-134-98-134-46.667 0-79.333 24-98 72-4 8-6 24-6 48v356H312V522" />
    </svg>' img2='<svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="0.7em"
      {...props}
    >
      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
    </svg>' desc = 'stay with me' title='Profile' link='/contact'/>



      </div>
    </div>
 </div>
 <div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-span-1 rounded-3xl dark:border-2 dark:border-neutral-900 bg-white/50 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] duration-200 hover:scale-95 lg:flex lg:items-center lg:justify-center">

      <div className='flex-row space-y-8 lg:space-y-0 lg:flex lg:justify-center lg:px-8 py-12 lg:py-0 lg:space-x-4'>

        <div className='flex-row text-center space-y-2'>
          <h1 className='font-bold text-4xl'>04</h1>
          <p className='text-neutral-400 uppercase'>Years of Experience</p>
        </div>


        <div className='flex-row text-center space-y-2'>
          <h1 className='font-bold text-4xl'>+125</h1>
          <p className='text-neutral-400 uppercase'>Clients Worldwide</p>
        </div>
        <div className='flex-row text-center space-y-2'>
          <h1 className='font-bold text-4xl'>+12</h1>
          <p className='text-neutral-400 uppercase'>Total Projects</p>
        </div>
      </div>


      </div>




      <div className="col-span-1 rounded-3xl dark:border-2 dark:border-neutral-900 bg-white/50 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] duration-200 hover:scale-95">
        <WorkTogether link='/contact' />

      
      </div>
    </div>
 </div>

  
</div>


    </>
  )
}

export default HomeComp