import Image from 'next/image'
import React from 'react'
import { designations } from './data/words'
import { FlipWords } from './ui/flip-words'
import SocialIcon from './SocialIcon'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { personalInfo } from './data/personalInfo'
import ServiceCards from './serviceCard'
import MyServiceCard from './myServiceCard'
import { education } from './data/education'
import { Timeline } from './ui/timeline'
import { workexperience } from './data/workexperience'

const AboutHeroSection = () => {
  return (
    <div>
      <div className='px-32 font-bold text-[2.7rem] pt-[12rem] pb-[14rem] items-center flex flex-row-reverse justify-between -mt-28 bg-cover bg-center'>
        <div>
          <h className="text-center font-semibold text-lg text-neutral-600 uppercase">About Me</h><br/>
          <h1>My Name Is <span className="bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent">Nilam Jyoti Sharma,</span></h1>
          <h1 className='text-[1.5rem] text-neutral-400 font-normal'><FlipWords className={'text-2xl'} words={designations} /></h1>

          
          <h1 className='w-[40rem] text-neutral-500 font-medium text-lg'>Strong in design and integration with intuitive problem-solving skills. Proficient in JAVA, SPRING-BOOT JAVASCRIPT, REACT JS and NEXT JS. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.</h1>


          <div className='py-8'>
            <div className='flex space-x-12'>
            {personalInfo.map((data, index) => (
              <div key={index} className='flex flex-col justify-between text-left'>
                <h className = 'uppercase text-lg'>{data?.key}</h>
                <h className='text-neutral-500 font-normal text-sm'>{data?.value}</h>
              </div>
            )
            )}
              
            </div>
          </div>
          
        </div>
        <div>
          <div className='text-sm bg-white px-4 py-3 rounded-lg shadow-xl text-neutral-700 absolute z-10 text-center -ml-28 mt-12'>
            <h><span className="bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent">1+ Years</span><br/> of Work Experience</h>
          </div>

          <div className='text-sm bg-white px-4 py-3 rounded-lg shadow-xl text-neutral-700 absolute z-10 text-center ml-72 mt-44'>
            <h><span className="bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent">12+ Projects</span><br/> in MERN, Spring Boot</h>
          </div>

          <div className='text-sm bg-white px-4 py-3 rounded-lg shadow-xl text-neutral-700 absolute z-10 text-center -ml-28 mt-80'>
            <h><span className="bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent">2+ Software Services</span><br/>Available Online</h>
          </div>
          <div className='z-0'>
            <Image className='w-[23rem] h-[30rem] -mt-12 rounded-[6rem] shadow-lg' src='/profile1.jpeg' width={600} height={600} alt='No image found' />
          </div>
          
        </div>
        
      </div>

      <div>
        <div className='flex space-x-16 px-8'>
            <div className='w-1/2 flex flex-col'>
            <h className="text-center font-extrabold text-3xl bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent">My Education</h><br/>
            <h1 className='w-[40rem] text-center text-neutral-500 font-normal text-lg'>I hold a Bachelor's degree in Electronics and Communication Engineering, where I gained a solid foundation in engineering principles and hands-on experience through projects and internships.</h1>
              <Timeline data={education} />
            </div>
            <div className='w-1/2 flex flex-col'>
            <h className="text-center font-extrabold text-3xl bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent">My Work Experience</h><br/>
            <h1 className='w-[40rem] text-center text-neutral-500 font-normal text-lg'>I have almost a year of experience as a Software Engineer, specializing in developing and maintaining web and mobile applications using technologies like React.js, Next.js, and React Native.</h1>
              <Timeline data={workexperience} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHeroSection
