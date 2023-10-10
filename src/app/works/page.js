import ProjectCard from "../../components/projectCard"
import BaseLayout from "@/layouts/BaseLayout";
import Image from 'next/image';
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { BiSolidQuoteRight } from 'react-icons/bi';
import Credent from "../../components/credent";
import Link from 'next/link';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { HiHome } from 'react-icons/hi2';
import { ImLinkedin2 } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';


export const metadata = {
    title : 'Works'
  }
  


const Works = () => {
  const projects = [
    {
      image: '/aiImage1.jpg',
      title: 'AI Based Image Generation',
      desc: 'Machine Learning',
      status: 'Completed',
      link: 'https://google.com'
    },
    {
      image: '/medicine.jpg',
      title: 'Medicine Information Extraction',
      desc: 'Machine Learning',
      status: 'Completed',
      link: 'https://google.com'
    },
    {
      image: '/grocery.jpg',
      title: 'Grocery Home Delivery Web Application',
      desc: 'MERN Stack Based Web Developement',
      status: 'In Progress',
      link: 'https://google.com'
    },
    {
      image: '/portfolio.jpg',
      title: 'Portflio Website Using NEXT.JS',
      desc: 'Portflio Website Using NEXT.JS, Tailwind CSS',
      status: 'Completed',
      link: 'https://google.com'
    },
    {
      image: '/todo.jpg',
      title: 'Todo Website',
      desc: 'HTML, CSS, JS',
      status: 'Completed',
      link: 'https://google.com'
    },
    {
      image: '/quize1.jpg',
      title: 'Quiz Website',
      desc: 'HTML, CSS, JS',
      status: 'Completed',
      link: 'https://google.com'
    }
  ]



  return (
    <BaseLayout>
      <>
      
        <div className="mx-2 md:mx-24 lg:mx-48">
          <div className="grid grid-rows-7 md:grid-rows-5 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-7 lg:grid-flow-col-dense md:grid-flow-row-dense gap-4">
            <div className="duration-200 hover:scale-95 row-span-1 md:row-span-1 md:col-span-2 lg:col-span-4 lg:row-span-1 flex justify-center items-center">

              <BiSolidQuoteLeft className='text-neutral-700 lg:text-[3rem] mb-12'/>
            <div>
              <h1 className='md:text-[4rem] lg:text-[3.5rem] sm:text-4xl text-2xl uppercase font-bold'>All Projects</h1>
            </div>
            <BiSolidQuoteRight className='text-neutral-700 lg:text-[3rem] mb-12' />
          
            </div>
            <div className="rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 row-span-2 md:row-span-2 md:col-span-1 lg:col-span-2 lg:row-span-2">
              

              <div className="flex-col justify-center items-center p-4">
                <ProjectCard {...projects[0]} />
              </div>
            </div>
            <div className="rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 row-span-2 md:row-span-2 md:col-span-1 lg:col-span-2 lg:row-span-2">
              <div className="flex-col justify-center items-center p-4">
                <ProjectCard {...projects[1]} />
              </div>
            </div>
            <div className="rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 row-span-2 md:row-span-2 md:col-span-2 lg:col-span-3 lg:row-span-3">
              <div className="flex-col justify-center items-end p-4">
                <ProjectCard {...projects[2]} />
              </div>
            </div>
          </div>
          <div className="grid grid-rows-3 md:grid-rows-2 md:grid-cols-2 grid-flow-dense lg:grid-rows-2 lg:grid-cols-3 gap-4 my-4">
            <div className="rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 row-span-1 md:col-span-2 lg:row-span-2 lg:col-span-2">
            <div className="flex-col justify-center items-end p-4">
                <ProjectCard {...projects[3]} />
              </div></div>
            <div className="rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 row-span-1 md:col-span-1 lg:row-span-1 lg:col-span-1">
            <div className="flex-col justify-center items-end p-4">
                <ProjectCard {...projects[4]} />
              </div>
            </div>
            <div className="rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 row-span-1 md:col-span-1 lg:row-span-1 lg:col-span-1">
            <div className="flex-col justify-center items-end p-4">
                <ProjectCard {...projects[5]} />
              </div>
            </div>
          </div>
          <div className="grid md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 md:grid-flow-col-dense gap-4">
            <div className="rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 md:col-span-1 lg:col-span-1 lg:row-span-1">

            <div className='flex-row justify-center px-4 py-8 lg:pb-4 space-y-16'>
            <div className=' text-[9rem]'>
              <HiHome className='mx-auto'/>
              
            </div>
            
            <div className='flex justify-between px-4 items-middle'>
              
              <div className='flex-row'>
                <p className='text-neutral-400 uppercase'>main section</p>
                <h1 className='font-bold text-2xl'>Home</h1>
              </div>
              
              <div className='text-4xl md:text-3xl text-neutral-400 hover:text-white hover:translate-x-4 duration-200 cursor-pointer'>
                <Link href='/'>
                  <BsFillArrowRightCircleFill />
                </Link>
              </div>
            </div>
            
          </div>



            </div>
            <div className="rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 md:col-span-2 lg:col-span-2 lg:row-span-1">
            <div className='flex-row justify-center px-4 py-8 lg:pb-8 space-y-6'>
            <div className='mt-0 py-1 px-2 text-[7rem]'>
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
                <Link href='/contact'>
                  <BsFillArrowRightCircleFill />
                </Link>
              </div>
            </div>
            
          </div>



            </div>
            <div className="rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 md:col-span-1 lg:col-span-1 lg:row-span-1">
            <Credent img='/sign.png' description='know more' header='Credentials' link='/credentials' />
            </div>
          </div>

        </div>

      </>




    </BaseLayout>
    
    
  )
}

export default Works