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
import ServiceCards from '../../components/serviceCard';


export const metadata = {
    title : 'About'
  }
  

const page = () => {
  return (
    <BaseLayout>
    <div className='mx-4 md:mx-24 lg:mx-36 mt-24 overflow-hidden'>
      <div>
        <div className='grid grid-col-1 lg:gap-y-1 gap-y-4 gap-x-4 lg:grid-cols-3 lg:grid-rows-3 lg:grid-flow-dense'>
          <div className='rounded-3xl flex justify-center dark:border-2  dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 row-span-2 lg:col-span-1 lg:row-span-3'>
            <div className='flex items-center px-4 my-4'>
            <Image className='h-80 w-96 rounded-3xl' src='/profile.png' width={800} height={800} alt='No image found' />
            </div>
          </div>
          <div className='flex items-center justify-center duration-200 hover:scale-95 row-span-2 lg:col-span-2 lg:row-span-1 '>
          <BiSolidQuoteLeft className='text-neutral-100 dark:text-neutral-700 lg:text-[3rem] mb-12'/>
            <div>
              <h1 className='md:text-[4rem] lg:text-[4.2rem] sm:text-4xl text-2xl drop-shadow-xl text-white uppercase font-bold'>About me</h1>
            </div>
            <BiSolidQuoteRight className='text-neutral-100 dark:text-neutral-700 lg:text-[3rem] mb-12' />
          </div>
          <div className='rounded-3xl dark:border-2  dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 row-span-2 lg:col-span-2 lg:row-span-2'>
          <div className='flex-row md:space-y-4 space-y-3 md:px-16 md:py-6 px-8 py-4'>
            {/* <div><BiSolidQuoteLeft className='text-neutral-400 text-[2rem] lg:text-[4rem]'/></div> */}
            <div className=''><h1 className='md:text-3xl text-2xl mt-4 font-bold'>Nilam Jyoti Sharma</h1></div>
            <div><p className='dark:text-neutral-400 text-neutral-600 text-xs md:text-sm'>Strong in design and integration with intuitive problem-solving skills. Proficient in JAVA, JAVASCRIPT, REACT JS and NEXT JS. Looking to start the career as an entry-level software engineer with a reputed firm driven
            by technology.</p></div>
            
          </div>



          </div>
        </div>
      </div>
      <div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>
          <div className='rounded-3xl dark:border-2  dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 lg:col-span-1'>

            <Abtexp mainHeader='experience' duration1='July 2022 - Oct 2022' ex1='Internship on Machine Learning' org1='NIELIT, Guwahati' duration2='Oct 2023 - Present' ex2='React Intern' org2='XopunTech Pvt Ltd' />

            
          </div>

            
          <div className='rounded-3xl dark:border-2  dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 lg:col-span-1'>

          <Abtexp mainHeader='education' duration1='2004 - 2016' ex1='Matriculation' org1='Shankardev Vidya Niketan, Bhakatgaon' duration2='July 2019 - July 2023' ex2='Bachelor of Technology' org2='Central Institute of Technology, Kokrajhar' />

          </div>
        </div>
      </div>
      <div>
        <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 md:grid-flow-row-dense gap-4 mt-4'>
          <div className='rounded-3xl dark:border-2  dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 md:col-span-1 lg:col-span-1'>
          {/* <div className='flex-row justify-center px-4 py-8 lg:pb-8 space-y-6'>
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
            
          </div> */}
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
          <div className='rounded-3xl dark:border-2  dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 md:col-span-2 lg:col-span-2'>
            <WorkTogether link='/' />
          </div>
          <div className='rounded-3xl dark:border-2  dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 md:col-span-1 lg:col-span-1'>

          <Credent img1='/sign.png' img2='/sign_light.png' description='More About Me' header='Credentials' link='/credentials' />
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