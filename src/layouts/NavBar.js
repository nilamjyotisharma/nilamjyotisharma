"use client"
import Link from 'next/link'
// import React from 'react';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';
import clsx from "clsx";





const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleMenu = () => {
        setClick(!click);
    }

    
  return (
    <div className='max-w-screen-4xl'>
    <div className='w-screen-4xl mx-4 md:mx-12 my-8 flex justify-between lg:justify-evenly'>
        
        <Link href="/">
        <Image className='h-12 w-36 -m-2 left-0 flex lg:justify-around'
        src="/logo1.png"
        width={300}
        height={0}
        alt="Picture of the author"
        />
        </Link>
        <ul className='hidden lg:inline-flex justify-center gap-12 text-neutral-500'>
        
            <Link href="/"><li className={`hover:text-white duration-300`}>Home</li></Link>
            <Link href="/about"><li className='hover:text-white duration-300'>About</li></Link>
            <Link href="/works"><li className='hover:text-white duration-300'>Works</li></Link>
            <Link href="/contact"><li className='hover:text-white duration-300'>Contact</li></Link>
           
        </ul>

        {/* for small display */}

        <div
          className={clsx(
            " fixed h-full w-screen lg:hidden bg-black/80 backdrop-blur-sm top-0 right-0 -translate-x-full  transition-all z-10",
            click && "translate-x-0 duration-300"
          )}
        >
          <section className="text-neutral-300 bg-neutral-900 flex-col absolute left-0 top-0 h-screen p-8 gap-4 z-30 w-4/5 flex">
            <RxCross2
              onClick={() => setClick(false)}
              className="mt-0 mb-8 text-4xl p-1 bg-neutral-700 rounded-full cursor-pointer"
            />

            <ul className='flex-row space-x-10 font-semibold text-xl'>
            <Link href="/"><li className={`hover:text-white`}>Home</li></Link>
            <Link href="/about"><li className='hover:text-white'>About</li></Link>
            <Link href="/works"><li className='hover:text-white'>Works</li></Link>
            <Link href="/contact"><li className='hover:text-white'>Contact</li></Link>
           
            </ul>
          </section>
        </div>

        
        <div className='hidden lg:inline-flex'>
        <Link href={"mailto:nilamjyotisharma2000@gmail.com"}><button className='-mt-2 px-6 font-semibold py-2 rounded-xl bg-neutral-600 text-white hover:bg-white hover:text-black duration-300'>Let's talk</button></Link>
        </div>
        <div className={`${click === true ? "hidden lg:inline-flex" : "inline lg:inline-flex"} inline-flex lg:hidden`}>
            <FiMenu onClick={handleMenu} className='text-4xl font-bold' />
        </div>
        {/* <div className={`${click === false ? "hidden lg:inline-flex" : "inline lg:inline-flex text-2xl"} inline-flex lg:hidden`}>
            <RxCross2 onClick={handleMenu} className='text-4xl font-bold' />
        </div> */}
    </div>
        
    </div>
  )
}

export default NavBar