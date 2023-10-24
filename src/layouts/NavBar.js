"use client"
import Link from 'next/link'
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import clsx from "clsx";
import Button from '@/components/button';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';





const NavBar = () => {

    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => 
    setMounted(true)
    , []);


    const [click, setClick] = useState(false);
    const handleMenu = () => {
        setClick(!click);
    }

    const renderThemeChanger =() => {

      if(!mounted) return null;

      const currentTheme = theme == 'system' ? systemTheme : theme;

      if(currentTheme == 'dark') {
        return(
          
            <Button className='font-semibold py-2 rounded-xl bg-neutral-600 text-white hover:bg-white hover:text-black duration-300' onClick={() => setTheme('light')}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>


            </Button>
        )
      }
      else{

        return(
          
            <Button className='font-semibold py-2 rounded-xl bg-gradient-to-br from-pink-400 to-indigo-500 lg:bg-gradient-to-br lg:from-white lg:to-white text-white md:text-black hover:scale-105 duration-300' onClick={() => setTheme('dark')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>
            </Button>
          
        )

      }


      
      
      
    
    }

    
  return (
    <div className='max-w-screen-4xl'>
    <div className='w-screen-4xl mx-4 md:mx-12 my-8 flex justify-between lg:justify-evenly'>
        
        <Link href="/">
        <Image className='h-12 w-36 -m-2 left-0 dark:flex hidden lg:justify-around'
        src="/logo1.png"
        width={300}
        height={0}
        alt="Picture of the author"
        />
        <Image className='h-12 w-36 -m-2 left-0 dark:hidden flex lg:justify-around'
        src="/logo_light.png"
        width={300}
        height={0}
        alt="Picture of the author"
        />

        </Link>
        <ul className='hidden lg:inline-flex justify-center gap-12 font-semibold text-gray-700 dark:text-neutral-500'>
        
            <Link href="/"><li className={`hover:text-white duration-300 drop-shadow-2xl ${pathname === '/' ? 'text-white' : ''} hover:scale-105`}>Home</li></Link>
            <Link href="/about"><li className={`hover:text-white duration-300 drop-shadow-2xl ${pathname === '/about' ? 'text-white' : ''} hover:scale-105`}>About</li></Link>
            <Link href="/works"><li className={`hover:text-white duration-300 drop-shadow-2xl ${pathname === '/works' ? 'text-white' : ''} hover:scale-105`}>Works</li></Link>
            <Link href="/contact"><li className={`hover:text-white duration-300 drop-shadow-2xl ${pathname === '/contact' ? 'text-white' : ''} hover:scale-105`}>Contact</li></Link>
           
        </ul>

        {/* for small display */}

        <div
          className={clsx(
            " fixed h-full w-screen lg:hidden bg-black/80 backdrop-blur-sm top-0 right-0 -translate-x-full  transition-all z-10",
            click && "translate-x-0 duration-300"
          )}
        >
          <section className="dark:text-neutral-300 text-indigo-500 bg-gradient-to-br from-pink-100 via-white to-indigo-200 dark:bg-gradient-to-br dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900 flex-col absolute left-0 top-0 h-screen p-8 gap-4 z-30 w-4/5 flex">
            <RxCross2
              onClick={() => setClick(false)}
              className="mt-0 mb-8 text-4xl p-1 bg-white dark:bg-neutral-700 rounded-full cursor-pointer"
            />

            <ul className='flex-row space-x-10 font-semibold text-xl'>
            <Link href="/"><li className={`hover:text-white duration-300 ${pathname === '/' ? 'text-pink-700 dark:text-white' : ''} hover:scale-105`}>Home</li></Link>
            <Link href="/about"><li className={`hover:text-white duration-300 ${pathname === '/about' ? 'text-pink-700 dark:text-white' : ''} hover:scale-105`}>About</li></Link>
            <Link href="/works"><li className={`hover:text-white duration-300 ${pathname === '/works' ? 'text-pink-700 dark:text-white' : ''} hover:scale-105`}>Works</li></Link>
            <Link href="/contact"><li className={`hover:text-white duration-300 ${pathname === '/contact' ? 'text-pink-700 dark:text-white' : ''} hover:scale-105`}>Contact</li></Link>
           
            </ul>
            <div className='flex-col space-y-4 font-semibold text-xl'>
            <div>{renderThemeChanger()}</div>
            <div><Link href={"mailto:nilamjyotisharma2000@gmail.com"}><button className='px-6 font-semibold py-2 rounded-xl bg-gradient-to-br from-pink-400 to-indigo-500 dark:bg-gradient-to-br dark:from-neutral-600 dark:to-neutral-600 text-white hover:bg-white hover:text-black duration-300'>Let's talk</button></Link></div>
            
        </div>
          </section>
        </div>

        
        <div className='hidden lg:inline-flex lg:gap-8'>
        <Link href={"mailto:nilamjyotisharma2000@gmail.com"}><button className='shadow-xl px-6 font-semibold py-2 rounded-xl bg-white dark:bg-neutral-600 hover:scale-105 dark:hover:bg-white hover:text-black duration-300'>Let's talk</button></Link>
        {renderThemeChanger()}
        </div>
        <div className={`${click === true ? "hidden lg:inline-flex" : "inline lg:inline-flex"} inline-flex lg:hidden`}>
            <FiMenu onClick={handleMenu} className='text-4xl font-bold' />
        </div>
       
    </div>
        
    </div>
  )
}

export default NavBar