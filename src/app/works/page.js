
import ProjectCard from "../../components/projectCard"
import BaseLayout from "@/layouts/BaseLayout";
import Image from 'next/image';
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { BiSolidQuoteRight } from 'react-icons/bi';
import Credent from "../../components/credent";
import Link from 'next/link';

import ServiceCards from "@/components/serviceCard";
import Cards from "../../components/cards"


export const metadata = {
    title : 'Works'
  }
  


const Works = () => {

  const projects = [
    {
      image: '/aiImage1.jpg',
      title: 'AI Based Image Generation',
      desc: 'Machine Learning',
      details: 'This is a Machine Learning based project which is used to generate images of various anime faces. It uses a GAN model to generate images.',
      status: 'Completed',
      link: 'https://github.com/nilamjyotisharma',
      duration: 'July,2022-July,2023'
    },
    {
      image: '/medicine.jpg',
      title: 'Medicine Information Extraction',
      desc: 'Machine Learning',
      details: 'This is a Machine Learning based project which is used to extract information from the medicine images. It uses a CNN model to extract the information.',
      status: 'Completed',
      link: 'https://github.com/nilamjyotisharma',
      duration: 'July,2022-Oct,2022'
    },
    {
      image: '/grocery.jpg',
      title: 'Grocery Home Delivery Web Application',
      desc: 'MERN Stack Based Web Developement',
      details: 'This is a MERN Stack Based Web Application which is used to order grocery items online and get them delivered at home. It has a user friendly interface and is easy to use. It has a admin panel to manage the orders and products. It has a user panel to manage the orders and products.',
      status: 'In Progress',
      link: 'https://github.com/nilamjyotisharma',
      duration: 'Aug,2023-Present'
    },
    {
      image: '/portfolio.jpg',
      title: 'Portflio Website Using NEXT.JS',
      desc: 'Portflio Website Using NEXT.JS, Tailwind CSS',
      details: 'This is a Portflio Website Using NEXT.JS, Tailwind CSS. It is a very interesting project to work on. This website provides a digital canvas for showcasing skills, accomplishments, and creative works in an engaging and accessible manner.',
      status: 'Completed',
      link: 'https://github.com/nilamjyotisharma',
      duration: 'Oct,2023-Oct,2023'
    },
    {
      image: '/todo.jpg',
      title: 'Todo Website',
      desc: 'HTML, CSS, JS',
      details: 'This is a Todo Website. It is a very interesting project to work on. This website provides a digital canvas for showcasing skills, accomplishments, and creative works in an engaging and accessible manner.',
      status: 'Completed',
      link: 'https://github.com/nilamjyotisharma',
      duration: 'July,2023-July,2023'
    },
    {
      image: '/quize1.jpg',
      title: 'Quiz Website',
      desc: 'HTML, CSS, JS',
      details: 'This is a Quiz Website. It is a very interesting project to work on. This website provides a digital canvas for showcasing skills, accomplishments, and creative works in an engaging and accessible manner.',
      status: 'Completed',
      link: 'https://github.com/nilamjyotisharma',
      duration: 'July,2023-July,2023'
    }
  ]



  return (
    <BaseLayout>
      <>
      
        <div className="mx-4 md:mx-24 lg:mx-36 mt-24 overflow-hidden">
          <div className="grid grid-rows-7 md:grid-rows-5 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-7 lg:grid-flow-col-dense md:grid-flow-row-dense gap-4">

          
            <div className="duration-200 hover:scale-95 row-span-1 md:row-span-1 md:col-span-2 lg:col-span-4 lg:row-span-1 flex justify-center items-center">

              <BiSolidQuoteLeft className='text-neutral-100 dark:text-neutral-700 lg:text-[3rem] mb-12'/>
            <div>
              <h1 className='md:text-[4rem] lg:text-[3.5rem] text-white sm:text-4xl text-2xl uppercase font-bold'>All Projects</h1>
            </div>
            <BiSolidQuoteRight className='text-neutral-100 dark:text-neutral-700 lg:text-[3rem] mb-12' />
          
            </div>
            <div className="rounded-3xl dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 row-span-2 md:row-span-2 md:col-span-1 lg:col-span-2 lg:row-span-2 cursor-pointer">
              

              <div className="flex-col justify-center items-center p-4">
                <ProjectCard {...projects[0]} />
                
              </div>
            </div>
            <div className="rounded-3xl dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 row-span-2 md:row-span-2 md:col-span-1 lg:col-span-2 lg:row-span-2 cursor-pointer">
              <div className="flex-col justify-center items-center p-4">
              <ProjectCard {...projects[1]} />
              </div>
            </div>
            <div className="rounded-3xl dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 row-span-2 md:row-span-2 md:col-span-2 lg:col-span-3 lg:row-span-3 cursor-pointer">
              <div className="flex-col justify-center items-end p-4">
              <ProjectCard {...projects[2]} />
              </div>
            </div>
          </div>
          <div className="grid grid-rows-3 md:grid-rows-2 md:grid-cols-2 grid-flow-dense lg:grid-rows-2 lg:grid-cols-3 gap-4 my-4 cursor-pointer">
            <div className="rounded-3xl dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 row-span-1 md:col-span-2 lg:row-span-2 lg:col-span-2">
            <div className="flex-col justify-center items-end p-4">
            <ProjectCard {...projects[3]} />
              </div></div>
            <div className="rounded-3xl dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 row-span-1 md:col-span-1 lg:row-span-1 lg:col-span-1 cursor-pointer">
            <div className="flex-col justify-center items-end p-4">
            <ProjectCard {...projects[4]} />
              </div>
            </div>
            <div className="rounded-3xl dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 row-span-1 md:col-span-1 lg:row-span-1 lg:col-span-1 cursor-pointer">
            <div className="flex-col justify-center items-end p-4">
            <ProjectCard {...projects[5]} />
              </div>
            </div>
          </div>
          <div className="grid md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 md:grid-flow-col-dense gap-4">
            <div className="rounded-3xl dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 md:col-span-1 lg:col-span-1 lg:row-span-1">


          <Cards img1='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-32 h-32">
  <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
</svg>
' img2='' desc = 'main section' title='Home' link='/'/>

            </div>
            <div className="rounded-3xl dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 md:col-span-2 lg:col-span-2 lg:row-span-1">
            

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
            <div className="rounded-3xl dark:border-2 dark:border-neutral-900 dark:bg-gradient-to-br dark:from-[#212121] dark:to-[#121212] bg-white/50 duration-200 hover:scale-95 md:col-span-1 lg:col-span-1 lg:row-span-1">
            <Credent img1='/sign.png' img2='/sign_light.png' description='More About Me' header='Credentials' link='/credentials' />
            </div>
          </div>

        </div>

      </>

    </BaseLayout>
    
    
  )
}

export default Works