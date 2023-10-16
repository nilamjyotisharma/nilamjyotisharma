"use client"
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeAnimate = () => {
  return (
    <>
        <h1 className='font-semibold text-2xl text-neutral-400'>I'm a <span className='text-neutral-300'><TypeAnimation
                sequence={[
                    'Web Developer',
                    1000,
                    'React Developer',
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