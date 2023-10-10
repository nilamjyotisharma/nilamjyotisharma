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


export const metadata = {
    title : 'Credentials'
  }

const Page = () => {
  return (
    <BaseLayout>
    <>
    <div>
        <div className='mx-12 md:mx-12 lg:mx-44 h-screen my-24'>
            <div className='grid grid-rows-3 lg:grid-cols-4 lg:grid-rows-1 gap-4'>
                <div className='border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 row-span-2 lg:row-span-1 lg:col-span-3 lg:rounded-l-3xl flex items-center rounded-t-3xl lg:rounded-none'>
                <div className='flex-row justify-center items-center md:flex py-12 px-8 lg:p-8'>
                    <div className='px-2 my-4'>
                        <Image className='h-80 w-96 rounded-3xl' src='/profile.png' width={200} height={800} alt='No image found' />
                    </div>
                    <div className='flex-col space-y-8 px-2 md:px-8'>
                        <div>
                          <h1 className='md:text-3xl text-xl mt-4 font-bold'>Nilam Jyoti Sharma</h1>
                        </div>

                        <div className='flex-row space-y-4 md:space-y-2 text-neutral-400 font-semibold'>
                        <p className='flex items-center space-x-2'><MdEngineering className='text-4xl mr-4' />Backelor of Technology</p>
                        <p className='flex items-center space-x-2'><MdGppGood className='text-4xl mr-4' /> Electronics and Communication Engineering</p>
                        <p className='flex items-center space-x-2'><LiaLaptopCodeSolid className='text-4xl mr-4' /> Web Developer</p>
                        <p className='flex items-center space-x-2'><MdManageAccounts className='text-4xl mr-4' /> React Intern at XopunTech Pvt Ltd</p></div>
                    </div>
                </div>


                </div>
                <div className='border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 row-span-1 lg:col-span-1 lg:rounded-r-3xl lg:rounded-none flex justify-center items-center rounded-b-3xl'>
                    <div className='lg:flex-col flex space-x-4 md:space-x-12 md:space-y-0 lg:space-y-8 lg:space-x-0 px-2 md:py-12 text-center text-[2rem] md:text-[4rem]'>
                        <div className='duration-200 hover:scale-110 cursor-pointer text-neutral-300 hover:text-white'><BsLinkedin /></div>
                        <div className='duration-200 hover:scale-110 cursor-pointer text-neutral-300 hover:text-white'><BsGithub /></div>
                        <div className='duration-200 hover:scale-110 cursor-pointer text-neutral-300 hover:text-white'><BsInstagram /></div>
                        <div className='duration-200 hover:scale-110 cursor-pointer text-neutral-300 hover:text-white'><BsFacebook /></div>
                    </div>
                </div>
            </div>


            <div className='grid lg:grid-rows-2 lg:grid-cols-3 grid-rows-4 md:grid-cols-2
             gap-4 my-4'>
                <div className='rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 row-span-2 md:col-span-2 lg:row-span-2 lg:col-span-2'>
                    <div className='flex-col space-y-8 p-4 py-8 md:p-12'>
                      <div>
                      <h1 className='md:text-4xl text-3xl mt-4 font-bold uppercase'>About</h1>
                      </div>
                      <div>
                      <p className='text-neutral-400 text-xs md:text-sm'>
                      
                      I'm Nilam Jyoti Sharma, a dedicated web developer with a passion for creating interactive and user-friendly online experiences. With 4 years of experience in the field, I've had the privilege of working on a diverse range of projects, from crafting sleek and responsive front-end interfaces to architecting robust back-end systems. My expertise includes proficiency in technologies such as Next JS, React JS and JavaScript. I thrive on tackling complex challenges to deliver innovative solutions.
                      </p> <br />
                      <p className='text-neutral-400 text-xs md:text-sm'>
                      My journey in web development began from my BTech first year, and it has been an exciting and ever-evolving ride since then. I'm committed to staying at the forefront of industry trends and best practices to ensure that every project I work on meets the highest standards of quality, performance, and accessibility. I'm also a strong believer in the power of teamwork, and I enjoy collaborating with other developers, designers, and stakeholders to bring projects to life.
                      </p> <br/>
                      <p className='text-neutral-400 text-xs md:text-sm'>
                      When I'm not coding, you can often find me on spending times with my family, travelling, cooking, playing musical instruments etc, which fuels my creativity and problem-solving skills. I believe that effective web development is not just about lines of code but also about understanding the unique needs of each project and its users.
                      </p>

                      </div>
                    </div>
                </div>
                <div className='rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 row-span-1 md:col-span-1 lg:row-span-1 lg:col-span-1'>
                <div className='flex-col space-y-4 p-8'>
                      <div>
                      <h1 className='md:text-2xl text-3xl mt-4 font-bold uppercase'>Languages</h1>
                      </div>
                      <div className='flex-col space-y-1'>
                        
                        <div><h1 className='font-bold text-sm'>English</h1></div>
                        <div><p className='text-neutral-400 text-xs'>Professional Working Proficiency</p></div>
                        
                      </div>
                      <div className='flex-col space-y-1'>
                        
                        <div><h1 className='font-bold text-sm'>Hindi</h1></div>
                        <div><p className='text-neutral-400 text-xs'>Full Professional Proficiency</p></div>
                        
                      </div>
                      <div className='flex-col space-y-1'>
                        
                        <div><h1 className='font-bold text-sm'>Assamese</h1></div>
                        <div><p className='text-neutral-400 text-xs'>Native or Bilingual Proficiency</p></div>
                        
                      </div>
                    </div>


                </div>
                <div className='rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212] duration-200 hover:scale-95 row-span-1 md:col-span-1 lg:row-span-1 lg:col-span-1 flex items-center md:items-start'>
                  <div className='flex-col space-y-4 p-8'>
                    <div><h1 className='md:text-2xl text-3xl mt-4 font-bold uppercase'>skills</h1></div>
                    <div className='flex flex-wrap space-2 justify-start'>
                      <div><h1 className='md:text-sm text-xs m-1 px-4 py-2 bg-neutral-600 hover:text-black hover:bg-white duration-200 cursor-pointer hover:font-semibold rounded-xl'>Web Developement</h1></div>
                      <div><h1 className='md:text-sm text-xs m-1 px-4 py-2 bg-neutral-600 hover:text-black hover:bg-white duration-200 cursor-pointer hover:font-semibold rounded-xl'>JavaScript</h1></div>
                      <div><h1 className='md:text-sm text-xs m-1 px-4 py-2 bg-neutral-600 hover:text-black hover:bg-white duration-200 cursor-pointer hover:font-semibold rounded-xl'>React JS</h1></div>
                      <div><h1 className='md:text-sm text-xs m-1 px-4 py-2 bg-neutral-600 hover:text-black hover:bg-white duration-200 cursor-pointer hover:font-semibold rounded-xl'>Next JS</h1></div>
                      <div><h1 className='md:text-sm text-xs m-1 px-4 py-2 bg-neutral-600 hover:text-black hover:bg-white duration-200 cursor-pointer hover:font-semibold rounded-xl'>Tailwind</h1></div>
                    </div>
                  </div>



                </div>
            </div>


            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>
                <div className='rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 lg:col-span-1'>

                    <Abtexp mainHeader='experience' duration1='July 2022 - Oct 2022' ex1='Internship on Machine Learning' org1='NIELIT, Guwahati' duration2='Oct 2023 - Present' ex2='React Intern' org2='XopunTech Pvt Ltd' />

            
                </div>

            
                <div className='rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 lg:col-span-1'>

                    <Abtexp mainHeader='education' duration1='2004 - 2016' ex1='Matriculation' org1='Shankardev Vidya Niketan, Bhakatgaon' duration2='July 2019 - July 2023' ex2='Bachelor of Technology' org2='Central Institute of Technology, Kokrajhar' />

                </div>
            </div>
            
            <div>
        <div className="grid grid-cols-1 gap-4 my-4 md:grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-1 lg:col-span-1 rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212] duration-200 hover:scale-95">

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
                <Link href='/skills'>
                  <BsFillArrowRightCircleFill />
                </Link>
              </div>
            </div>
            
          </div>




          </div>
          <div className="md:col-span-2 lg:col-span-2 rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212] duration-200 hover:scale-95">

            <div className='flex-row justify-center px-4 py-8 lg:pb-8 space-y-6'>
                <WorkTogether link='/contact' />
            </div>
          </div>
          <div className="md:col-span-1 lg:col-span-1 rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212] duration-200 hover:scale-95">

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
        </div>
     </div>
        </div>
    </div>

    </>
    </BaseLayout>
    
  )
}

export default Page