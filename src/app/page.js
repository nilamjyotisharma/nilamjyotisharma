
import React from 'react'
import BaseLayout from '@/layouts/BaseLayout'
import Image from 'next/image'
import Link from 'next/link'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
// import { FaLaptopCode } from 'react-icons/fa';
import { PiCertificateLight } from 'react-icons/pi';
import { FcIdeas } from 'react-icons/fc';
import { BsCodeSlash } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';
import Credent from '../components/credent';
import WorkTogether from '../components/workTogether';
import SmallTiles from '../components/smallTiles';
import TypeAnimate from '@/components/typeAnimate';
import HomeComp from '@/components/HomeComp';




export const metadata = {
  title : 'Home'
}


export default function Home() {



  return (
    <div>
    <BaseLayout>
      
      <HomeComp />
    
    </BaseLayout>
      
    </div>
  )
}
