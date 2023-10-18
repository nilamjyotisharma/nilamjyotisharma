"use client"
import React from 'react'
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const SkilllComponent = ({skills}) => {


  // return(
  //   <>
  //     <div>
  //       <div>
  //           <Image src='/html.svg' width={400} height={500} alt='No image found' />
  //       </div>
  //       <div></div>
  //     </div>
  //   </>
  // )

    const [selected, setSelected] = useState(0);
    const firstTabRef = useRef(null);

    useEffect(() => {
        firstTabRef.current.focus();
    }, []);
  return (
    <>
        <div className='grid grid-cols-1 grid-rows-6 md:grid-cols-9 md:grid-rows-1 gap-4'>
                <div className='rounded-2xl md:rounded-l-3xl md:rounded-none duration-200 hover:scale-95 col-span-1 row-span-1 md:col-span-3 md:row-span-1 py-4 px-8 flex space-x-4 overflow-scroll md:overflow-hidden md:flex-col font-bold md:space-y-4 md:space-x-0'>

                
                    
                        {skills.map((skill, index) => (
                            <div 
                            key={index} 
                            onClick={() => setSelected(index)}
                            ref={index === 1 ? firstTabRef : null} 
                            className='bg-neutral-600 text-center md:p-2 p-4 rounded-xl duration-200 hover:scale-110 text-sm hover:bg-white cursor-pointer hover:text-black outline-none focus:bg-white my-2 items-center font-semibold'>{skill.title}</div>
                        ))}
                    
                </div>

                
                <div className='rounded-r-3xl border-2 border-neutral-900 bg-gradient-to-br from-[#212121] to-[#121212]  duration-200 hover:scale-95 col-span-1 row-span-5 md:col-span-6 md:row-span-1'>

                {skills.map((skill, index) => 
                            <div 
                            key={index} className={`flex-col items-center justify-center text-sm m-auto md:text-sm text-neutral-300 md:p-24 p-12 ${selected === index ? "" : "hidden"}`}
                            >{skill.desc}

                            <div className='bg-neutral-300 mt-12 text-center text-black font-bold p-4 rounded-2xl'>{skill.exp}s of Experience</div>
                            
                            </div>

                        
                        )}



                </div>
            </div>
    </>
  )
}

export default SkilllComponent