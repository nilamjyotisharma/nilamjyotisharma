"use client"
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeAnimate = () => {
  return (
    <>
        <h1 className='font-medium text-xl dark:text-neutral-400'>I'm a <span className='text-neutral-700 dark:text-neutral-300'><TypeAnimation
                sequence={[
                    'Web Developer',
                    1000,
                    'ReactJS Developer',
                    1000,
                    'NextJS Developer',
                    1000
                ]}
                speed={50}
                repeat={Infinity}
                /></span></h1>
    </>
  )
}

export default TypeAnimate