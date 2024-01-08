import React from 'react';
import BaseLayout from '@/layouts/BaseLayout';
import Abtexp from '../../components/abtexp';
import Image from 'next/image';
import Link from 'next/link';
import { GoLightBulb } from 'react-icons/go';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';
import WorkTogether from '../../components/workTogether';
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs';
import { MdEngineering, MdGppGood } from 'react-icons/md';
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import { MdManageAccounts } from 'react-icons/md';
import Cards from '@/components/cards';
import ServiceCards from '@/components/serviceCard';


export const metadata = {
    title : 'Credentials'
  }

const Page = () => {
  return (
    <BaseLayout>
    <>
    <div>
        <div className='mx-4 md:mx-12 lg:mx-44 my-24'>
            <div className='grid grid-rows-3 lg:grid-cols-4 lg:grid-rows-1 gap-4'>
                <div className='dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 row-span-2 lg:row-span-1 lg:col-span-3 lg:rounded-l-3xl flex items-center rounded-t-3xl lg:rounded-none'>
                <div className='flex-row justify-center items-center md:flex py-12 px-8 lg:p-8'>
                    <div className='px-2 my-4'>
                        <Image className='h-80 w-96 rounded-3xl' src='/profile.png' width={200} height={800} alt='No image found' />
                    </div>
                    <div className='flex-col space-y-8 px-2 md:px-8'>
                        <div>
                          <h1 className='md:text-3xl text-xl mt-4 font-bold'>Nilam Jyoti Sharma</h1>
                        </div>

                        <div className='flex-row space-y-4 md:space-y-4 dark:text-neutral-400 text-neutral-600 font-medium'>
                        <p className='flex items-center space-x-2'><MdEngineering className='text-4xl mr-4' />Bachelor of Technology</p>
                        <p className='flex items-center space-x-2'><MdGppGood className='text-4xl mr-4' /> Electronics and Communication Engineering</p>
                        <p className='flex items-center space-x-2'><LiaLaptopCodeSolid className='text-4xl mr-4' /> Web Developer</p>
                        <p className='flex items-center space-x-2'><MdManageAccounts className='text-4xl mr-4' /> React Intern at XopunTech Pvt Ltd</p></div>
                    </div>
                </div>


                </div>
                <div className='dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 row-span-1 lg:col-span-1 lg:rounded-r-3xl lg:rounded-none flex justify-center items-center rounded-b-3xl'>
                    <div className='lg:flex-col flex space-x-4 md:space-x-12 md:space-y-0 lg:space-y-8 lg:space-x-0 px-2 md:py-12 text-center text-[2rem] md:text-[4rem]'>
                    <Link href='https://www.linkedin.com/in/nilam-jyoti-sharma-2912681aa/' target='blank'>
                        <div className='duration-200 hover:scale-110 cursor-pointer text-neutral-700 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-white'><BsLinkedin /></div>
                    </Link>
                    <Link href='https://github.com/nilamjyotisharma' target='blank'>
                        <div className='duration-200 hover:scale-110 cursor-pointer text-neutral-700 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-white'><BsGithub /></div>
                      </Link>
                      <Link href='https://www.instagram.com/___nilam.____/' target='blank'>
                        <div className='duration-200 hover:scale-110 cursor-pointer text-neutral-700 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-white'><BsInstagram /></div>
                      </Link> 
                      <Link href='https://www.facebook.com/nilamjyoti.sharma/' target='blank'>
                        <div className='duration-200 hover:scale-110 cursor-pointer text-neutral-700 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-white'><BsFacebook /></div>
                      </Link>
                    </div>
                </div>
            </div>


            <div className='grid lg:grid-rows-2 lg:grid-cols-3 grid-rows-4 md:grid-cols-2
             gap-4 my-4'>
                <div className='rounded-3xl dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 row-span-2 md:col-span-2 lg:row-span-2 lg:col-span-2'>
                    <div className='flex-col space-y-8 p-4 py-8 md:p-12'>
                      <div>
                      <h1 className='md:text-4xl text-3xl mt-4 font-bold uppercase'>About</h1>
                      </div>
                      <div>
                      <p className='dark:text-neutral-400 text-neutral-600 text-xs md:text-sm'>
                      
                      I'm Nilam Jyoti Sharma, a dedicated web developer with a passion for creating interactive and user-friendly online experiences. With 4 years of experience in the field, I've had the privilege of working on a diverse range of projects, from crafting sleek and responsive front-end interfaces to architecting robust back-end systems. My expertise includes proficiency in technologies such as Next JS, React JS and JavaScript. I thrive on tackling complex challenges to deliver innovative solutions.
                      </p> <br />
                      <p className='dark:text-neutral-400 text-neutral-600 text-xs md:text-sm'>
                      My journey in web development began from my BTech first year, and it has been an exciting and ever-evolving ride since then. I'm committed to staying at the forefront of industry trends and best practices to ensure that every project I work on meets the highest standards of quality, performance, and accessibility. I'm also a strong believer in the power of teamwork, and I enjoy collaborating with other developers, designers, and stakeholders to bring projects to life.
                      </p> <br/>
                      <p className='dark:text-neutral-400 text-neutral-600 text-xs md:text-sm'>
                      When I'm not coding, you can often find me on spending times with my family, travelling, cooking, playing musical instruments etc, which fuels my creativity and problem-solving skills. I believe that effective web development is not just about lines of code but also about understanding the unique needs of each project and its users.
                      </p>

                      </div>
                    </div>
                </div>
                <div className='rounded-3xl dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 row-span-1 md:col-span-1 lg:row-span-1 lg:col-span-1'>
                <div className='flex-col space-y-4 p-8'>
                      <div>
                      <h1 className='md:text-2xl text-3xl mt-4 font-bold uppercase'>Languages</h1>
                      </div>
                      <div className='flex-col space-y-1'>
                        
                        <div><h1 className='font-bold text-sm'>English</h1></div>
                        <div><p className='dark:text-neutral-400 text-neutral-600 text-xs'>Professional Working Proficiency</p></div>
                        
                      </div>
                      <div className='flex-col space-y-1'>
                        
                        <div><h1 className='font-bold text-sm'>Hindi</h1></div>
                        <div><p className='dark:text-neutral-400 text-neutral-600 text-xs'>Full Professional Proficiency</p></div>
                        
                      </div>
                      <div className='flex-col space-y-1'>
                        
                        <div><h1 className='font-bold text-sm'>Assamese</h1></div>
                        <div><p className='dark:text-neutral-400 text-neutral-600 text-xs'>Native or Bilingual Proficiency</p></div>
                        
                      </div>
                    </div>


                </div>
                <div className='rounded-3xl dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 row-span-1 md:col-span-1 lg:row-span-1 lg:col-span-1 flex items-center md:items-start'>
                  <div className='flex-col space-y-4 p-8'>
                    <div><h1 className='md:text-2xl text-3xl mt-4 font-bold uppercase'>skills</h1></div>
                    <div className='flex flex-wrap space-2 justify-start'>
                      <div><h1 className='md:text-sm text-xs m-1 px-4 py-2 dark:bg-neutral-600 bg-white hover:text-black hover:bg-white duration-200 cursor-pointer hover:font-semibold rounded-xl'>Web Developement</h1></div>
                      <div><h1 className='md:text-sm text-xs m-1 px-4 py-2 dark:bg-neutral-600 bg-white hover:text-black hover:bg-white duration-200 cursor-pointer hover:font-semibold rounded-xl'>JavaScript</h1></div>
                      <div><h1 className='md:text-sm text-xs m-1 px-4 py-2 dark:bg-neutral-600 bg-white hover:text-black hover:bg-white duration-200 cursor-pointer hover:font-semibold rounded-xl'>React JS</h1></div>
                      <div><h1 className='md:text-sm text-xs m-1 px-4 py-2 dark:bg-neutral-600 bg-white hover:text-black hover:bg-white duration-200 cursor-pointer hover:font-semibold rounded-xl'>Next JS</h1></div>
                      <div><h1 className='md:text-sm text-xs m-1 px-4 py-2 dark:bg-neutral-600 bg-white hover:text-black hover:bg-white duration-200 cursor-pointer hover:font-semibold rounded-xl'>Tailwind</h1></div>
                    </div>
                  </div>



                </div>
            </div>


            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>
                <div className='rounded-3xl dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 lg:col-span-1'>

                    <Abtexp mainHeader='experience' duration1='July 2022 - Oct 2022' ex1='Internship on Machine Learning' org1='NIELIT, Guwahati' duration2='Oct 2023 - Present' ex2='React Intern' org2='XopunTech Pvt Ltd' />

            
                </div>

            
                <div className='rounded-3xl dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 lg:col-span-1'>

                    <Abtexp mainHeader='education' duration1='2004 - 2016' ex1='Matriculation' org1='Shankardev Vidya Niketan, Bhakatgaon' duration2='July 2019 - July 2023' ex2='Bachelor of Technology' org2='Central Institute of Technology, Kokrajhar' />

                </div>
            </div>
            
            <div>
        <div className="grid grid-cols-1 gap-4 my-4 md:grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-1 lg:col-span-1 rounded-3xl dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95">

          <Cards img1='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-32 h-32">
  <path fill-rule="evenodd" d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z" clip-rule="evenodd" />
</svg>' img2='' desc = 'certifications' title='Certificates' link='/certificate'/>




          </div>
          <div className="md:col-span-2 lg:col-span-2 rounded-3xl dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 to-[#121212] duration-200 hover:scale-95">

            <div className='flex-row justify-center px-4 py-8 lg:pb-8 space-y-6'>
                <WorkTogether link='/contact' />
            </div>
          </div>
          <div className="md:col-span-1 lg:col-span-1 rounded-3xl dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95">

          

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
        </div>
    </div>

    </>
    </BaseLayout>
    
  )
}

export default Page