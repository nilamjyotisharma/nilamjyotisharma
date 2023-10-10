import { BsGithub } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';


const ProjectCard = (props) => {
  return (
    <>
        {/* <Link href={`/works/ + ${props.title}`}> */}
        <div className='flex items-center mb-8'><Image className="rounded-3xl" src={props.image} width={800} height={800} alt='No image found' /></div>
                <div className="px-2 flex justify-between mb-4">
                    <div className='flex-row space-y-4'>
                        <h1 className='text-neutral-400 text-xs uppercase'>{props.desc}</h1>
                        <h1 className='font-bold text-xl w-40 h-8 text-ellipsis whitespace-nowrap overflow-hidden'>{props.title}</h1>
                        {
                            props.status === 'Completed' ? (
                                <p className={`flex md:text-sm text-lg m-1 px-4 py-3 text-green-600  bg-white hover:scale-105 duration-200 cursor-pointer font-bold rounded-xl`}>{props.status}</p>
                            ) : (
                                <p className={`flex md:text-sm text-lg m-1 px-4 py-3 text-red-600  bg-white hover:scale-105 duration-200 cursor-pointer font-bold rounded-xl`}>{props.status}</p>
                            )
                        }
                        
                    </div>
                    <div className='font-bold text-neutral-400 text-[3rem] hover:scale-110 hover:text-white duration-200 cursor-pointer left-0'><BsGithub /></div>
                    <div></div>
                  
                </div>
        {/* </Link> */}
    </>
  )
}

export default ProjectCard