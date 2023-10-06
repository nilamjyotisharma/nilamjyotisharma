import React from 'react'
import BaseLayout from '@/layouts/BaseLayout'
import Image from 'next/image'
import Link from 'next/link'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
// import { FaLaptopCode } from 'react-icons/fa';
import { GoLightBulb } from 'react-icons/go';
import { FcIdeas } from 'react-icons/fc';
import { BsCodeSlash } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';


export const metadata = {
  title : 'Home'
}


export default function Home() {



  return (
    <>
    <BaseLayout>
    <div className='h-screen mx-16 md:mx-24 lg:mx-36 my-24'>

    <div className=''>
      <div className='grid grid-flow-row lg:grid-cols-4 md:grid-cols-2 gap-4'>
       <div className='md:col-span-2 lg:col-span-2 lg:row-span-3 rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#333333] to-[#121212]  duration-200 hover:scale-95'>

        <div className='p-12 flex-row justify-center'>
          <div className='flex-row space-y-8 justify-center md:flex md:space-x-8 items-center'>
            <div>
              <Image className='rounded-tl-3xl rounded-br-3xl' src='/profile.png' width={400} height={500} alt='No image found' />
            </div>

            <div className='flex-row space-y-2'>
              <p className='text-neutral-400 uppercase'>A Web Developer</p>
              <h1 className='font-bold text-3xl md:text-4xl'>Nilam Jyoti Sharma</h1>
              <p className='text-neutral-400'>Crafting digital experiences one line of code at a time</p>
            </div>
          </div>
          <div className='flex md:justify-end justify-center text-4xl md:text-3xl mt-8 text-neutral-400 hover:text-white hover:scale-110 duration-200 cursor-pointer'>
            <Link href='/about'>
              <BsFillArrowRightCircleFill />
            </Link>
          </div>

        </div>

       </div>

       <div className='md:col-span-2 lg:col-span-2 lg:row-span-1 rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]'>
       <div>
        <h1></h1>
       </div>
          
       </div>
       <div className='md:col-span-1 rounded-3xl border-2 lg:row-span-2 border-neutral-900 bg-gradient-to-br from-[#333333] to-[#121212] duration-200 hover:scale-95'>

          <div className='flex-row px-4 py-8 lg:pb-0 space-y-16'>
            <div className='mb-8'>
              <Image className='mt-2 rounded-tl-3xl rounded-br-3xl' src='/sign.png' width={400} height={300} alt='No image found' />
            </div>
            
            <div className='flex justify-between px-4 items-middle'>
              
              <div className='flex-row items-stretch'>
                <p className='text-neutral-400 uppercase'>More About Me</p>
                <h1 className='font-bold text-2xl'>Credentials</h1>
              </div>
              
              <div className='text-4xl md:text-3xl text-neutral-400 hover:text-white hover:translate-x-4 duration-200 cursor-pointer'>
                <Link href='/'>
                  <BsFillArrowRightCircleFill />
                </Link>
              </div>
            </div>
            
          </div>

       </div>
       <div className='md:col-span-1 rounded-3xl border-2 lg:row-span-2 border-neutral-900 bg-gradient-to-br from-[#333333] to-[#121212] duration-200 hover:scale-95'>

       <div className='flex-row justify-center px-4 py-8 lg:pb-0 space-y-16'>
            <div className='mb-8 text-[7rem]'>
            <BsCodeSlash className='mx-auto'/>
              
            </div>
            
            <div className='flex justify-between px-4 items-middle'>
              
              <div className='flex-row'>
                <p className='text-neutral-400 uppercase'>ShowCase</p>
                <h1 className='font-bold text-2xl'>Projects</h1>
              </div>
              
              <div className='text-4xl md:text-3xl text-neutral-400 hover:text-white hover:translate-x-4 duration-200 cursor-pointer'>
                <Link href='/'>
                  <BsFillArrowRightCircleFill />
                </Link>
              </div>
            </div>
            
          </div>

       </div>
      </div>
    </div>

     <div>
        <div className="grid grid-cols-1 gap-4 my-4 md:grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-1 lg:col-span-1 rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#333333] to-[#121212] duration-200 hover:scale-95">

          <div className='flex-row justify-center px-4 py-8 lg:pb-4 space-y-16'>
            <div className=' text-[9rem]'>
              <GoLightBulb className='mx-auto'/>
              
            </div>
            
            <div className='flex justify-between px-4 items-middle'>
              
              <div className='flex-row'>
                <p className='text-neutral-400 uppercase'>expertise</p>
                <h1 className='font-bold text-2xl'>Skills</h1>
              </div>
              
              <div className='text-4xl md:text-3xl text-neutral-400 hover:text-white hover:translate-x-4 duration-200 cursor-pointer'>
                <Link href='/'>
                  <BsFillArrowRightCircleFill />
                </Link>
              </div>
            </div>
            
          </div>




          </div>
          <div className="md:col-span-2 lg:col-span-2 rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#333333] to-[#121212] duration-200 hover:scale-95">

          <div className='flex-row justify-center px-4 py-8 lg:pb-8 space-y-6'>
            <div className='mt-0 bg-gradient-to-b from-gray-600 to-[#010101] rounded-3xl py-1 px-2 text-[7rem]'>
              <div className='flex py-12 justify-evenly mx-auto'>
               <ImLinkedin2 className='text-7xl'/>
               <FaGithub className='text-7xl'/>

              </div>

              
            </div>
            
            <div className='flex justify-between px-4 items-middle'>
              
              <div className='flex-row'>
                <p className='text-neutral-400 uppercase'>specialization</p>
                <h1 className='font-bold text-2xl'>Services Offering</h1>
              </div>
              
              <div className='text-4xl md:text-3xl text-neutral-400 hover:text-white hover:translate-x-4 duration-200 cursor-pointer'>
                <Link href='/'>
                  <BsFillArrowRightCircleFill />
                </Link>
              </div>
            </div>
            
          </div>


          </div>
          <div className="md:col-span-1 lg:col-span-1 rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#333333] to-[#121212] duration-200 hover:scale-95">

          <div className='flex-row justify-center px-4 py-8 lg:pb-8 space-y-6'>
            <div className='mt-0 bg-gradient-to-b from-gray-600 to-[#010101] rounded-3xl py-1 px-2 text-[7rem]'>
              <div className='flex py-12 justify-evenly mx-auto'>
               <ImLinkedin2 className='text-7xl'/>
               <FaGithub className='text-7xl'/>

              </div>


              
            </div>
            
            <div className='flex justify-between px-4 items-middle'>
              
              <div className='flex-row'>
                <p className='text-neutral-400 uppercase'>stay with me</p>
                <h1 className='font-bold text-2xl'>Profiles</h1>
              </div>
              
              <div className='text-4xl md:text-3xl text-neutral-400 hover:text-white hover:translate-x-4 duration-200 cursor-pointer'>
                <Link href='/'>
                  <BsFillArrowRightCircleFill />
                </Link>
              </div>
            </div>
            
          </div>


          </div>
        </div>
     </div>
     <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1 rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#333333] to-[#121212] duration-200 hover:scale-95">

          <div className='flex-row space-y-8 lg:flex px-8 py-16 space-x-4'>
            <div className='flex-row items-center p-4 rounded-xl text-center justify-center bg-gradient-to-r from-[#4c4c4c] to-[#121212]'>
            <h1 className='font-bold text-4xl'>04</h1>
            <p className='text-neutral-400 uppercase'>Years of Experience</p>
            </div>


            <div className='flex-row items-center p-4 rounded-xl text-center justify-center bg-gradient-to-r from-[#4c4c4c] to-[#121212]'>
            <h1 className='font-bold text-4xl'>+125</h1>
            <p className='text-neutral-400 uppercase'>Clients Worldwide</p>

            </div>
            <div className='flex-row items-center p-4 rounded-xl text-center justify-center bg-gradient-to-r from-[#2c2c2c] to-[#121212]'>
            <h1 className='font-bold text-4xl'>+12</h1>
            <p className='text-neutral-400 uppercase'>Total Projects</p>


            </div>
          </div>




          </div>




          <div className="col-span-1 rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#333333] to-[#121212] duration-200 hover:scale-95">

          <div className='flex-row justify-start px-14 py-12 items-middle'>
              
              <div className='flex-row '>
                
                <h1 className='font-extrabold text-3xl lg:text-5xl'>Lets Work <br /><span className='text-gray-500'>Together</span></h1>
              </div>
              
              <div className='flex md:justify-end justify-center text-4xl md:text-3xl mt-8 text-neutral-400 hover:text-white hover:scale-110 duration-200 cursor-pointer'>
                <Link href='/'>
                  <BsFillArrowRightCircleFill />
                </Link>
              </div>
            </div>

          </div>
        </div>
     </div>

      
    </div>
    </BaseLayout>
      
    </>
  )
}
