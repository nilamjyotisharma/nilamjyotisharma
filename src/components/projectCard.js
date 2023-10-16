"use client"
import { BsGithub } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import { FaLightbulb } from 'react-icons/fa6';
import { TbListDetails } from 'react-icons/tb';
import { BiSolidCheckCircle } from 'react-icons/bi';
import { BiSolidDevices } from 'react-icons/bi';
import { CgSandClock } from 'react-icons/cg';


const ProjectCard = (props) => {

    const[projectDetails,setProjectDetails] = useState(false);
    const showDetails = () => {
        setProjectDetails(!projectDetails);
    }

  return (
    <div onClick={showDetails}>

        {!projectDetails ? (
            <>
            <div className='flex items-center align-middle mb-8'><Image className="rounded-3xl" src={props.image} width={800} height={800} alt='No image found' /></div>
                <div className="px-2 flex justify-between mb-4">
                    <div className='flex-row space-y-4'>
                        <h1 className='text-neutral-400 text-xs uppercase'>{props.desc}</h1>
                        <h1 className='font-bold text-xl w-48 h-8 text-ellipsis whitespace-nowrap overflow-hidden'>{props.title}</h1>
                        {
                            props.status === 'Completed' ? (
                                <p className={`flex md:text-sm text-lg m-1 px-4 py-3 text-green-600  bg-white hover:scale-105 duration-200 cursor-pointer font-bold rounded-xl`}>{props.status}</p>
                            ) : (
                                <p className={`flex md:text-sm text-lg m-1 px-4 py-3 text-red-600  bg-white hover:scale-105 duration-200 cursor-pointer font-bold rounded-xl`}>{props.status}</p>
                            )
                        }
                        
                    </div>
                    {/* <div className='font-bold text-neutral-400 text-[3rem] hover:scale-110 hover:text-white duration-200 cursor-pointer left-0'><BsGithub /></div> */}
                    
                  
                </div>
            </>
            
        ) : (
            <>
        <div className='py-4 px-2 flex-row items-center space-y-8'>
            <div className='flex text-2xl font-bold p-4 text-neutral-100 rounded-xl'><FaLightbulb className='text-6xl mr-4' />{props.title}</div>

            <div className='flex text-neutral-300'><TbListDetails className='text-2xl mr-3' />{props.desc}</div>

            <div className='flex space-x-4 text-neutral-300'><div><BiSolidDevices className='text-2xl mr-4' /></div>{props.details}<div></div></div>


            <div className='flex text-neutral-300'><BiSolidCheckCircle className='text-2xl mr-3' />{props.status}</div>

            

            

            <div className='flex justify-between'>
            <div className='flex text-neutral-300'><CgSandClock className='text-2xl mr-3' />{props.duration}</div>
            <Link href={props.link} target='blank'>
            <div className='animate-bounce font-bold text-white text-[4rem] hover:scale-110 hover:text-white duration-200 cursor-pointer left-0 mt-4'><BsGithub /></div>
            </Link>
            </div>
            
            
        </div>
    </>
        )}
        
        
        {/* </Link> */}
    </div>
  )
}

export default ProjectCard