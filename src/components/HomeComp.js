"use client";
import React from 'react';
import { HeroParallax } from './ui/hero-parallax';
import Image from 'next/image';
import { FlipWords } from "./ui/flip-words";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
import { HoverEffect } from "./ui/card-hover-effect";
import Link from 'next/link';
import MyServiceCard from './myServiceCard';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import SocialIcon from './SocialIcon';
import { designations } from './data/words';
import { skills } from './data/skills';




// Small utility to highlight the content of specific section of a testimonial content
export const Highlights = ({
  children,
  className
}) => {
  return (
    (<span
      className={cn(
        "font-bold bg-gradient-to-r from-[#6B32EE] to-[#E50879] text-white px-1 py-0.5",
        className
      )}>
      {children}
    </span>)
  );
};







const HomeComp = () => {
  return (
    <div className='bg-indigo-50'>
      {/* <HeroParallax products={products} /> */}
      <div className='px-40 font-bold text-[3.7rem] pt-[12rem] pb-[14rem] items-center flex justify-between -mt-28 bg-cover bg-center' 
    style={{
      backgroundImage: "url('/home_hero_bg_2.jpg')", // Add the path to your background image here
    }}>
        <div>
          
          <h1><span className="bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent">Nilam Jyoti Sharma,</span></h1>
          
          <h1 className='w-[44rem] text-[2.7rem]'>Turning <span className="bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent">Code</span> Into <span className='bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent'>Experiences</span></h1>
          <h1 className='text-[1.5rem] text-neutral-400 font-normal'><FlipWords className={'text-3xl'} words={designations} /></h1>



          {/* <div className="flex justify-center md:justify-start space-x-8 mt-4 md:mt-8 text-2xl md:text-[2.5rem]">
              
              <SocialIcon href='https://www.linkedin.com/in/nilam-jyoti-sharma-2912681aa/' icon={BsLinkedin} />
              <SocialIcon href='https://github.com/nilamjyotisharma' icon={BsGithub} />
              <SocialIcon href='https://www.instagram.com/___nilam.____/' icon={BsInstagram} />
              <SocialIcon href='https://www.facebook.com/nilamjyoti.sharma/' icon={BsFacebook} />

          </div> */}
          
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
            <Image className='w-[23rem] h-[30rem] -mt-12 rounded-[6rem] shadow-lg' src='/prof2.jpeg' width={600} height={600} alt='No image found' />
          </div>
          
        </div>
        
      </div>


      <div className='px-64 -mt-36'>
      <div className='px-24 bg-white shadow-2xl text-xl py-12 rounded-3xl flex justify-between space-x-12 font-semibold text-neutral-600'>




        <div className='flex flex-col items-center'>
          
          <span className='bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent text-[3.5rem] py-4  font-bold'>1+</span><br/>
          <span className='bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent text-[3.5rem] pb-5 pt-2 font-bold'>Years</span><br/>
          <h className="text-center">Of Experience in MERN, Spring boot, NextJs, Devops</h>
        </div>

        <div className='flex flex-col items-center'>
          
          <span className='bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent text-[3.5rem] py-4 font-bold'>12+</span><br/>
          <span className='bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent text-[3.5rem] pb-5 pt-2 font-bold'>Projects</span><br/>
          <h className="text-center">In Multiple Domain Like MERN, Spring boot, NextJs, Devops</h>
        </div>



      </div>
        
      </div>

      <div className='py-12'>
       <div className="text-center flex flex-col justify-center">
       <h className="text-center font-semibold text-lg text-neutral-600 uppercase">About Me</h><br/>
       <h className="text-center font-extrabold text-3xl bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent">My Soft Skills</h><br/>

       <h className='w-[46rem] text-center mx-auto font-medium text-neutral-500'>Strong in design and integration with intuitive problem-solving skills. Proficient in JAVA, JAVASCRIPT, REACT JS and NEXT JS. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology</h>

      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={skills} />
      </div>

       </div>
      </div>



      <div className='py-12'>
       <div className="text-center flex flex-col justify-center">
       <h className="text-center font-semibold text-lg text-neutral-600">My Services</h><br/>
       <h className="text-center font-extrabold text-3xl bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent">The Available Software Services</h><br/>

       <h className='w-[46rem] text-center mx-auto font-medium text-neutral-500'>We bring your ideas to life by crafting immersive digital experiences across web and mobile platforms. With a seamless blend of creativity and technology, our websites and Android apps are designed to captivate users and elevate your brand. Let us turn your vision into a reality that resonates and endures.</h>

      <div className="px-48">
        <MyServiceCard />
      </div>
      

       </div>
      </div>





      <div className='bg-cover bg-center'
      style={{
      backgroundImage: "url('/conbg.jpg')",
    }}
    >
        <div className='flex justify-between px-44 items-center pt-64 pb-16'>
          <div>
          <Image className='w-[22rem] h-[30rem] -mt-24 rounded-full' src='/profile1.jpeg' width={800} height={800} alt='No image found' />
          </div>
          <div className='text-left font-medium text-[2rem] text-neutral-800'>

            If You Have Any <span className="bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent">Project</span> In Your Mind<br/>DM now ! <br/><br/>
            <Link href={"mailto:nilamjyotisharma2000@gmail.com"}><button className='px-16 font-semibold py-2 text-2xl rounded-xl text-white bg-gradient-to-r from-[#6B32EE] to-[#E50879] hover:text-white duration-300'>Let's talk</button></Link>
          </div>
        </div>
      </div>


      
    </div>

    
  )
}







export default HomeComp



