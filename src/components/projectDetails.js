import React from 'react';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

const ProjectDetails = (props) => {
  return (
    <>
        <div className='p-1 flex-row items-center space-y-8'>
            <div className='text-lg font-bold p-4 bg-white text-neutral-700 rounded-xl'><h>{props.title}</h></div>
            <div className='text-neutral-400'><p>{props.desc}</p>
            <p>Status: {props.status}</p></div>

            <div className='flex justify-evenly'>
            <div><p className='p-2 mt-4 bg-neutral-800 text-neutral-300 font-bold rounded-xl'>{props.duration}</p></div>
            <Link href={props.link}>
            <div className='font-bold text-neutral-400 text-[3rem] hover:scale-110 hover:text-white duration-200 cursor-pointer left-0 mt-4'><BsGithub /></div>
            </Link>
            </div>
            
            
        </div>
    </>
  )
}

export default ProjectDetails