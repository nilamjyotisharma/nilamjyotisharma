import BaseLayout from '@/layouts/BaseLayout';
import Image from 'next/image';
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { BiSolidQuoteRight } from 'react-icons/bi';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import Abtexp from '../../components/abtexp';
import Credent from '../../components/credent';
import { ImLinkedin2 } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';
import WorkTogether from '../../components/workTogether';


export const metadata = {
    title : 'About'
  }
  

const page = () => {
  return (
    <BaseLayout>
    <div className='mx-8 md:mx-12 lg:mx-44 h-screen my-24'>
      <div>
        <div className='grid grid-col-1 lg:gap-y-1 gap-y-4 gap-x-4 lg:grid-cols-3 lg:grid-rows-3 lg:grid-flow-dense'>
          <div className='rounded-3xl flex justify-center border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 row-span-2 lg:col-span-1 lg:row-span-3'>
            <div className='flex items-center px-4 my-4'>
            <Image className='h-80 w-96 rounded-3xl' src='/profile.png' width={800} height={800} alt='No image found' />
            </div>
          </div>
          <div className='flex items-center justify-center duration-200 hover:scale-95 row-span-2 lg:col-span-2 lg:row-span-1 '>
          <BiSolidQuoteLeft className='text-neutral-700 lg:text-[3rem] mb-12'/>
            <div>
              <h1 className='md:text-[4rem] lg:text-[4.2rem] sm:text-4xl text-2xl uppercase font-bold'>About me</h1>
            </div>
            <BiSolidQuoteRight className='text-neutral-700 lg:text-[3rem] mb-12' />
          </div>
          <div className='rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 row-span-2 lg:col-span-2 lg:row-span-2'>
          <div className='flex-row md:space-y-4 space-y-3 md:px-16 md:py-6 px-8 py-4'>
            {/* <div><BiSolidQuoteLeft className='text-neutral-400 text-[2rem] lg:text-[4rem]'/></div> */}
            <div className=''><h1 className='md:text-3xl text-2xl mt-4 font-bold'>Nilam Jyoti Sharma</h1></div>
            <div><p className='text-neutral-400 text-xs md:text-sm'>Strong in design and integration with intuitive problem-solving skills. Proficient in JAVA, JAVASCRIPT, REACT JS and NEXT JS. Looking to start the career as an entry-level software engineer with a reputed firm driven
            by technology.</p></div>
            <div className='flex md:justify-end justify-center text-4xl md:text-3xl mt-8 text-neutral-400 hover:text-white hover:scale-110 duration-200 cursor-pointer'>
            <Link href='/about'>
              <BsFillArrowRightCircleFill />
            </Link>
          </div>
          </div>



          </div>
        </div>
      </div>
      <div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>
          <div className='rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 lg:col-span-1'>

            <Abtexp mainHeader='experience' duration1='July 2022 - Oct 2022' ex1='Internship on Machine Learning' org1='NIELIT, Guwahati' duration2='Oct 2023 - Present' ex2='React Intern' org2='XopunTech Pvt Ltd' />

            
          </div>

            
          <div className='rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 lg:col-span-1'>

          <Abtexp mainHeader='education' duration1='2004 - 2016' ex1='Matriculation' org1='Shankardev Vidya Niketan, Bhakatgaon' duration2='July 2019 - July 2023' ex2='Bachelor of Technology' org2='Central Institute of Technology, Kokrajhar' />

          </div>
        </div>
      </div>
      <div>
        <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 md:grid-flow-row-dense gap-4 mt-4'>
          <div className='rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 md:col-span-1 lg:col-span-1'>
          <div className='flex-row justify-center px-4 py-8 lg:pb-8 space-y-6'>
            <div className='mt-0 py-1 px-2 text-[7rem]'>
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
                <Link href='/contact'>
                  <BsFillArrowRightCircleFill />
                </Link>
              </div>
            </div>
            
          </div>
          </div>
          <div className='rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 md:col-span-2 lg:col-span-2'>
            <WorkTogether link='/' />
          </div>
          <div className='rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 md:col-span-1 lg:col-span-1'>

            <Credent img='/sign.png' description='More About Me' header='Credentials' link='/credentials' />
          </div>
        </div>
      </div>

      <div>

      </div>

    </div>
    </BaseLayout>
  )
}

export default page