import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-full my-32'>
    <div className='flex-row text-center space-y-5 mt-auto'>
        <div>
            <h1 className='text-3xl font-extrabold dark:text-white text-gray-800'>Nilam Jyoti Sharma</h1>
        </div>

        <div>
            <ul className={`lg:inline-flex justify-center gap-20 text-gray-700 dark:text-neutral-500 uppercase`} >

                <Link href="/"><li className={`hover:text-white duration-300`}>Home</li></Link>
                <Link href="/credentials"><li className='hover:text-white duration-300'>Credentials</li></Link>
                <Link href="/works"><li className='hover:text-white duration-300'>Works</li></Link>
                <Link href="/contact"><li className='hover:text-white duration-300'>Contact</li></Link>

            </ul>
        </div>

        <div className='mt-32'>
            <p className='text-neutral-500 text-sm mt-12'>&copy; All rights reserved by <span className='text-blue-500 text-sm'>Nilam Jyoti Sharma</span></p>
        </div>
        
    </div>
    </div>
    
  )
}

export default Footer